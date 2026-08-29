import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 78% 18%, rgba(47,107,255,0.55) 0%, rgba(8,9,11,0) 42%), radial-gradient(circle at 8% 92%, rgba(15,42,92,0.7) 0%, rgba(8,9,11,0) 45%), #08090b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#5b93ff",
            }}
          />
          <span
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#5b93ff",
            }}
          >
            The Interview &amp; News Media Brand
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 44,
          }}
        >
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#f6f7f8",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            The Lost Art of
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#f6f7f8",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Storytelling
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
          }}
        >
          <span style={{ fontSize: 32, color: "#a4a9b4", fontWeight: 500 }}>
            with Nathan Salins
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
