import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Horizon | RaidGuild";
const description =
  "A stakeholder prototype for RaidGuild's business-development signal feed.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const candidateHost =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const host =
    candidateHost && /^[a-zA-Z0-9.-]+(?::\d+)?$/.test(candidateHost)
      ? candidateHost
      : "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol === "http" || forwardedProtocol === "https"
      ? forwardedProtocol
      : host.startsWith("localhost")
        ? "http"
        : "https";
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    icons: {
      icon: "/assets/raidguild-symbol.svg",
      shortcut: "/assets/raidguild-symbol.svg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Horizon, RaidGuild signal feed",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
