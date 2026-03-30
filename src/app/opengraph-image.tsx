import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Good Company - Organize. Automate. Scale.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const pennantData = await readFile(
    join(process.cwd(), "public/images/logos/pennant.png")
  );
  const pennantBase64 = `data:image/png;base64,${pennantData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#004D36",
          position: "relative",
        }}
      >
        {/* Pennant flag - inverted to white */}
        <img
          src={pennantBase64}
          width={220}
          height={220}
          style={{
            filter: "brightness(0) invert(1)",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 40,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "0.02em",
          }}
        >
          Organize. Automate. Scale.
        </div>

        {/* URL */}
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 22,
            color: "#A8D5C2",
            letterSpacing: "0.04em",
          }}
        >
          yourgoodcompany.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
