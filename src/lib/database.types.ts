// Keep in sync with supabase/migrations/202611160001_create_projects.sql.
export type ProjectRow = {
  slug: string
  name: string
  category: string
  description: string
  contribution: string
  highlight: string
  technologies: string[]
  repository_url: string | null
  demo_url: string | null
  display_order: number
  published: boolean
}

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: ProjectRow
        Insert: Omit<ProjectRow, 'published' | 'repository_url' | 'demo_url'> & {
          published?: boolean
          repository_url?: string | null
          demo_url?: string | null
        }
        Update: Partial<ProjectRow>
        Relationships: []
      }
    }
    Views: { [_ in never]: never }
    Functions: { [_ in never]: never }
    Enums: { [_ in never]: never }
    CompositeTypes: { [_ in never]: never }
  }
}
