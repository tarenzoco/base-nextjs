import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "../lib/useSession";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const { session, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    }
  }, [session, loading]);

  if (loading) return <p>Loading...</p>;
  if (!session) return null;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif"
    }}>
      <h1>Welcome to Tarenzo Dashboard 👋</h1>
      <p>You’re logged in as {session.user.email}</p>
      <button
        onClick={async () => await supabase.auth.signOut()}
        style={{ padding: "10px", marginTop: "20px", borderRadius: "8px", background: "#111", color: "#fff" }}
      >
        Logout
      </button>
    </div>
  );
}
