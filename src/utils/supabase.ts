import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ypmojsbckuxdbejxnxvh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwbW9qc2Jja3V4ZGJlanhueHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NzQ0NzcsImV4cCI6MjA3MTA1MDQ3N30.cJCzjCXRzoLJociEkb0jlz0nBc7Y5jsMYV34JtW3TDI'

export const supabase = createClient(supabaseUrl, supabaseKey);
