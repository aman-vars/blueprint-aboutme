import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

function createConfiguredClient(): SupabaseClient<Database> | null {
  const url = import.meta.env.VITE_SUPABASE_URL?.trim()
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim()

  if (!url || !key || url.includes('YOUR_PROJECT_REF') || key === 'YOUR_SUPABASE_PUBLISHABLE_KEY') {
    return null
  }

  try {
    return createClient<Database>(url, key, {
      // This portfolio only makes anonymous reads; it needs no auth session.
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    })
  } catch {
    // Malformed configuration should leave the static portfolio usable.
    return null
  }
}

export const supabase = createConfiguredClient()
