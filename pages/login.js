import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Check your email for the login link!");
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh",
      fontFamily: "sans-serif"
    }}>
      <h1>Login to Tarenzo</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "10px", background: "#111", color: "#fff", borderRadius: "6px" }}>
          Send Magic Link
        </button>
      </form>
      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </div>
  );
}
