import { createClient } from '@supabase/supabase-js'

// Initialize Supabase Client (public)
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
      height: '100vh'
    }}>
      <h1>🚀 TARENZO Base Connected</h1>
      <p>Live Supabase Connection Successful ✅</p>
      <pre style={{ background: '#111', color: '#0f0', padding: '20px', borderRadius: '10px' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

// SSR call to test Supabase
export async function getServerSideProps() {
  const { data } = await supabase.from('test_table').select('*')
  return { props: { data: data || [] } }
}

