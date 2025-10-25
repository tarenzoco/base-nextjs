import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    const currentSession = supabase.auth.getSession();
    currentSession.then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    // Listen for session changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return { session, loading };
}
