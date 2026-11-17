import type { SupabaseClient } from '@supabase/supabase-js'
import { projects as localProjects } from '../data/projects.ts'
import type { Project } from '../data/projects.ts'
import type { Database } from './database.types.ts'

export async function loadProjects(
  client: SupabaseClient<Database> | null,
  signal: AbortSignal = AbortSignal.timeout(10_000),
): Promise<Project[]> {
  if (!client) return localProjects

  try {
    const { data, error } = await client
      .from('projects')
      .select('slug, name, category, description, contribution, highlight, technologies, repository_url, demo_url')
      .eq('published', true)
      .order('display_order', { ascending: true })
      .order('slug', { ascending: true })
      .abortSignal(signal)

    if (error || data === null) return localProjects

    // An empty successful response must stay empty, never reveal local drafts.
    return data.map(row => ({
      id: row.slug,
      name: row.name,
      category: row.category,
      description: row.description,
      contribution: row.contribution,
      highlight: row.highlight,
      technologies: row.technologies,
      repositoryUrl: row.repository_url,
      demoUrl: row.demo_url,
    }))
  } catch {
    return localProjects
  }
}
