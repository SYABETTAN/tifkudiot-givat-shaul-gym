import { ImageResponse } from "next/og";
import { businessData } from "@/lib/business-data";

export const runtime = "edge";
export const alt = "תיפקודיות | מכון כושר בגבעת שאול ירושלים";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "64px",
          background: "linear-gradient(135deg, #0B1117 0%, #171C22 50%, #0B1117 100%)",
          color: "#F8F6F1",
          fontFamily: "sans-serif",
          direction: "rtl",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
          }}
        />
        <p style={{ fontSize: 28, color: "#FFB547", margin: 0 }}>
          {businessData.tagline}
        </p>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            margin: "16px 0",
            background: "linear-gradient(135deg, #F8F6F1, #FFB547)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {businessData.name}
        </h1>
        <p style={{ fontSize: 28, color: "#E8E3DA", maxWidth: 800, textAlign: "right" }}>
          אימון פונקציונלי בירושלים — תנועה, כוח ויציבות
        </p>
      </div>
    ),
    { ...size }
  );
}
