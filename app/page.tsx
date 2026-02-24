"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      {/* Auth Bar */}
      <div style={{ marginBottom: 24 }}>
        {status === "loading" ? (
          <span style={{ color: "#777" }}>Checking auth…</span>
        ) : session ? (
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ color: "#555", fontSize: 14 }}>
              {session.user?.email}
            </span>
            <button
              onClick={() => signOut()}
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                border: "1px solid #ddd",
                background: "white",
                cursor: "pointer",
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "white",
              cursor: "pointer",
            }}
          >
            Sign in with Google
          </button>
        )}
      </div>

      {/* Header */}
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>Dayflow</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        A color-coded momentum calendar that carries forward unfinished tasks.
      </p>

      {/* Category Pills */}
      <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
        <span
          style={{
            background: "#4F8EF7",
            color: "white",
            padding: "6px 12px",
            borderRadius: 999,
          }}
        >
          Reminder
        </span>

        <span
          style={{
            background: "#34C759",
            color: "white",
            padding: "6px 12px",
            borderRadius: 999,
          }}
        >
          Meeting
        </span>

        <span
          style={{
            background: "#8E6CF0",
            color: "white",
            padding: "6px 12px",
            borderRadius: 999,
          }}
        >
          Focus
        </span>

        <span
          style={{
            background: "#FF9F40",
            color: "white",
            padding: "6px 12px",
            borderRadius: 999,
          }}
        >
          Personal
        </span>

        <span
          style={{
            background: "#FF6B6B",
            color: "white",
            padding: "6px 12px",
            borderRadius: 999,
          }}
        >
          Urgent
        </span>
      </div>

      {/* Today Section */}
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>Today</h2>

      {/* Task Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 16px",
          border: "1px solid #eee",
          borderRadius: 16,
          maxWidth: 720,
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: 999,
            background: "#8E6CF0",
          }}
        />

        <input type="checkbox" />

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16 }}>Write Dayflow spec</div>
          <div style={{ fontSize: 13, color: "#777" }}>
            2:00pm • Focus
          </div>
        </div>

        <button
          style={{
            border: "1px solid #ddd",
            borderRadius: 10,
            padding: "6px 10px",
            background: "white",
            cursor: "pointer",
          }}
        >
          ↻
        </button>
      </div>
    </main>
  );
}
