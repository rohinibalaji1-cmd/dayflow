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
      <div style={{ marginTop: 28, maxWidth: 720 }}>
  <h2 style={{ fontSize: 18, marginBottom: 12 }}>Today</h2>

  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        border: "1px solid #eee",
        borderRadius: 12,
      }}
    >
      <span style={{ width: 10, height: 10, borderRadius: 999, background: "#8E6CF0" }} />
      <input type="checkbox" />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14 }}>Write Dayflow spec</div>
        <div style={{ fontSize: 12, color: "#777" }}>2:00pm • Focus</div>
      </div>
      <button style={{ border: "1px solid #ddd", borderRadius: 10, padding: "6px 10px", background: "white" }}>
        ↻
      </button>
    </div>
  </div>
</div>
    </main>
  );
}
