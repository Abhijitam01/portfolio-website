import type { Metadata } from "next";
import { Inter, Outfit, Dancing_Script } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AgentModeProvider } from "@/contexts/agent-mode";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Abhijitam Dubey - Developer",
  description: "Software Developer focused on building tools and platforms that make developers' lives easier.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${outfit.variable} ${dancing.variable}`}>
        <AgentModeProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="dark"
            enableSystem={false}
          >
            <div className="main-wrapper">
              {children}
            </div>
          </ThemeProvider>
        </AgentModeProvider>
      </body>
    </html>
  );
}
