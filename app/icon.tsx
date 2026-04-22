import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          borderRadius: 12,
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 46,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            fontFamily: "sans-serif",
          }}
        >
          J
        </span>
      </div>
    ),
    size,
  );
}
