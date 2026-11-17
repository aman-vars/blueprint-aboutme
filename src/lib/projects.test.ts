import assert from 'node:assert/strict'
import test from 'node:test'
import { createClient } from '@supabase/supabase-js'
import { projects } from '../data/projects.ts'
import type { Database } from './database.types.ts'
import { loadProjects } from './projects.ts'

function clientWithFetch(fetch: typeof globalThis.fetch) {
  return createClient<Database>('https://portfolio.supabase.co', 'test-publishable-key', {
    global: { fetch },
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  })
}

test('unconfigured Supabase uses the existing local projects', async () => {
  assert.deepEqual(await loadProjects(null), projects)
})

test('queries published projects in display order and preserves all card fields', async () => {
  const remoteProjects = projects.map(project => ({ ...project, name: `Remote ${project.name}` }))
  const rows = remoteProjects.map(project => ({
    slug: project.id,
    name: project.name,
    category: project.category,
    description: project.description,
    contribution: project.contribution,
    highlight: project.highlight,
    technologies: project.technologies,
    repository_url: project.repositoryUrl,
    demo_url: project.demoUrl,
  }))
  let requestUrl = ''
  const client = clientWithFetch(async input => {
    requestUrl = String(input)
    return new Response(JSON.stringify(rows), {
      headers: { 'Content-Type': 'application/json' },
    })
  })

  assert.deepEqual(await loadProjects(client), remoteProjects)
  const url = new URL(requestUrl)
  assert.equal(url.pathname, '/rest/v1/projects')
  assert.equal(url.searchParams.get('published'), 'eq.true')
  assert.equal(url.searchParams.get('order'), 'display_order.asc,slug.asc')
})

test('a successful empty result stays empty instead of showing local projects', async () => {
  const client = clientWithFetch(async () => new Response('[]', {
    headers: { 'Content-Type': 'application/json' },
  }))
  assert.deepEqual(await loadProjects(client), [])
})

test('a database/API error falls back to local projects', async () => {
  const client = clientWithFetch(async () => new Response(
    JSON.stringify({ message: 'Permission denied', code: '42501' }),
    { status: 403, headers: { 'Content-Type': 'application/json' } },
  ))
  assert.deepEqual(await loadProjects(client), projects)
})

test('a network failure falls back to local projects', async () => {
  const client = clientWithFetch(async () => { throw new Error('Network unavailable') })
  assert.deepEqual(await loadProjects(client), projects)
})

test('an aborted request falls back to local projects', async () => {
  const client = clientWithFetch(async (_input, init) => {
    init?.signal?.throwIfAborted()
    throw new Error('Expected an aborted signal')
  })
  assert.deepEqual(await loadProjects(client, AbortSignal.abort()), projects)
})
