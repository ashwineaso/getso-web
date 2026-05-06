import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Getso — The shared shopping list";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "80px",
        }}
      >
        {/* G logomark */}
        <div
          style={{
            width: 88,
            height: 88,
            background: "#53B175",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "white", fontSize: 52, fontWeight: 700, lineHeight: 1 }}>
            G
          </span>
        </div>

        {/* Headline */}
        <p
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#1A1A2E",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Stop buying four pints of milk.
        </p>

        {/* Subhead */}
        <p
          style={{
            fontSize: 28,
            color: "#6B7280",
            marginTop: 24,
            marginBottom: 0,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          The shared shopping list your household actually sticks to.
        </p>

        {/* Domain */}
        <p
          style={{
            fontSize: 22,
            color: "#53B175",
            marginTop: 36,
            fontWeight: 600,
          }}
        >
          getso.app
        </p>
      </div>
    ),
    size
  );
}
