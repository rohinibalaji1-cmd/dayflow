export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Dayflow</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
        A color-coded momentum calendar that carries forward unfinished tasks.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <span style={{ background: "#4F8EF7", color: "white", padding: "6px 10px", borderRadius: 999 }}>
          Reminder
        </span>
        <span style={{ background: "#34C759", color: "white", padding: "6px 10px", borderRadius: 999 }}>
          Meeting
        </span>
        <span style={{ background: "#8E6CF0", color: "white", padding: "6px 10px", borderRadius: 999 }}>
          Focus
        </span>
        <span style={{ background: "#FF9F40", color: "white", padding: "6px 10px", borderRadius: 999 }}>
          Personal
        </span>
        <span style={{ background: "#FF6B6B", color: "white", padding: "6px 10px", borderRadius: 999 }}>
          Urgent
        </span>
      </div>
    </main>
  );
}
