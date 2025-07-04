"use client";
import type React from "react";
import { Inter } from "next/font/google";
import "./../globals.css";
import { useTheme } from "@/contexts/theme-context";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import { Languages, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, toggleTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div
          className={`min-h-screen transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
              : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
          }`}
        >
          {/* Navigation */}
          <Navigation />

          {/* Theme & Language Toggles */}
          <div className="fixed top-12 right-4 z-50 flex gap-2">
            <motion.button
              onClick={toggleTheme}
              className={`p-3 rounded-full backdrop-blur-lg transition-colors ${
                theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/10 text-black hover:bg-black/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className={`p-3 rounded-full backdrop-blur-lg transition-colors ${
                theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/10 text-black hover:bg-black/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Languages size={20} />
            </motion.button>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
