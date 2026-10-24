import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import { preload } from "react-dom";

// The fonts (DESIGN.md) are declared with @font-face in globals.css and
// served from public/fonts. Preload the two the first paint uses — body text
// (IBM Plex Mono Regular) and headings (Fraunces) — so text doesn't swap late.
const PRELOADED_FONTS = [
  "/fonts/IBMPlexMono/IBMPlexMono-Regular.woff2",
  "/fonts/Fraunces/Fraunces-Variable.woff2",
];

export const metadata: Metadata = {
  // Needed to resolve og:image/twitter:image into absolute URLs — without
  // it Next falls back to localhost even in production. Set
  // NEXT_PUBLIC_SITE_URL once this is actually deployed somewhere.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "App",
  description: "App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  for (const href of PRELOADED_FONTS) {
    preload(href, {
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    });
  }

  return (
    <html
      lang="en"
      className="h-full antialiased"
      // next-themes sets the .dark class client-side, before hydration
      // finishes, so the class it applies never matches the server-rendered
      // markup — that mismatch is expected here, not a real bug.
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
