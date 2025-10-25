import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif"
    }}>
      <h1>Welcome to Tarenzo 👋</h1>
      <p>It's our first app, we hope you'll enjoy it.</p>
      <Link href="/login">
        <button style={{
          padding: "10px 20px",
          borderRadius: "8px",
          marginTop: "20px",
          background: "#111",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}>
          Go to Login
        </button>
      </Link>
    </div>
  );
}
