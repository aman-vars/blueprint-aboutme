import { useEffect, useState } from 'react'
import { projects as localProjects } from '../data/projects'
import type { Project } from '../data/projects'
import { loadProjects } from '../lib/projects'
import { supabase } from '../lib/supabase'

export function useProjects() {
  // Don't flash local projects while checking which remote rows are published.
  const [projects, setProjects] = useState<Project[] | null>(supabase ? null : localProjects)

  useEffect(() => {
    if (!supabase) return

    let active = true
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10_000)

    void loadProjects(supabase, controller.signal).then(result => {
      if (active) setProjects(result)
      clearTimeout(timeout)
    })

    return () => {
      active = false
      clearTimeout(timeout)
      controller.abort()
    }
  }, [])

  return projects
}
