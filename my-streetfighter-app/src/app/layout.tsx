import type { Metadata } from "next";
import { Orbitron, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const orbitron = Orbitron({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Street Fighter 6 - Cyberpunk Edition",
  description: "A cyberpunk-themed Street Fighter 6 character showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <header className="border-b border-[#333] bg-black/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-[#00ffff] text-xl font-bold hover:text-[#ff00ff] transition-colors">
              <span className="animate-pulse">SF6</span> <span className="text-[#ff00ff]">CYBER</span>
            </Link>
            <nav>
              <Link href="/" className="text-[#00ffff] hover:text-[#ff00ff] transition-colors px-3 py-2 rounded border border-[#333] hover:border-[#ff00ff]">
                Characters
              </Link>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t border-[#333] py-6 text-center text-[#666] text-sm">
          <div className="container mx-auto">
            <p>© 2024 Street Fighter 6 Cyberpunk Edition</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
