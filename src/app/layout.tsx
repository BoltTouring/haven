import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Bitcoin, Menu, X } from "lucide-react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bitcoin Haven Finder | Find Your Bitcoin-Friendly Home",
  description: "Discover the best Bitcoin-friendly jurisdictions for long-term relocation. Compare taxes, safety, cost of living, and more.",
  openGraph: {
    title: "Bitcoin Haven Finder",
    description: "Find your ideal Bitcoin-friendly place to live",
    type: "website",
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="p-1.5 rounded-lg bg-orange-500 text-white">
              <Bitcoin className="w-5 h-5" />
            </div>
            <span className="hidden sm:inline">Bitcoin Haven</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/quiz" className="text-slate-600 hover:text-slate-900 transition-colors">
              Take Quiz
            </Link>
            <Link href="/results" className="text-slate-600 hover:text-slate-900 transition-colors">
              Browse Jurisdictions
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
              Methodology
            </Link>
          </div>

          <div className="flex md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="relative group">
      <button className="p-2 rounded-lg hover:bg-slate-100 peer">
        <Menu className="w-5 h-5" />
      </button>
      <div className="absolute right-0 top-full mt-2 w-48 py-2 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible hover:opacity-100 hover:visible transition-all">
        <Link href="/quiz" className="block px-4 py-2 text-slate-600 hover:bg-slate-50">
          Take Quiz
        </Link>
        <Link href="/results" className="block px-4 py-2 text-slate-600 hover:bg-slate-50">
          Browse Jurisdictions
        </Link>
        <Link href="/about" className="block px-4 py-2 text-slate-600 hover:bg-slate-50">
          Methodology
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <div className="p-1.5 rounded-lg bg-orange-500">
                <Bitcoin className="w-4 h-4" />
              </div>
              Bitcoin Haven Finder
            </div>
            <p className="text-sm">
              Helping Bitcoiners find their ideal Bitcoin-friendly jurisdiction for long-term relocation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quiz" className="hover:text-white transition-colors">Take the Quiz</Link></li>
              <li><Link href="/results" className="hover:text-white transition-colors">Browse Jurisdictions</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Methodology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Disclaimer</h4>
            <p className="text-sm">
              This tool is for informational purposes only. It is not legal, tax, or financial advice.
              Always consult qualified professionals before making relocation decisions.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bitcoin Haven Finder. All rights reserved.
          </p>
          <p className="text-xs">
            Images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Unsplash</a>. See individual image credits.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
