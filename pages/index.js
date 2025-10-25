import { createClient } from '@supabase/supabase-js'

// Initialize Supabase Client (frontend safe)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function Home({ data }) {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#0a0a0a',
      color: '#fff'
    }}>
      <h1>🚀 TARENZO Base Connected</h1>
      <p>Live Supabase Connection Successful ✅</p>
      <div style={{
        background: '#111',
        borderRadius: '12px',
        padding: '20px',
        marginTop: '20px',
        width: '80%',
        maxWidth: '500px',
        textAlign: 'left',
      }}>
        <h3>Data from Supabase:</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

// Server-side fetch from Supabase
export async function getServerSideProps() {
  const { data, error } = await supabase.from('test_table').select('*')
  if (error) console.error('Supabase Error:', error)
  return { props: { data: data || [] } }
}
