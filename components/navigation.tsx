"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useTheme } from "@/contexts/theme-context";

export default function Navigation() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "experience", href: "/experience" },
    { key: "skills", href: "/skills" },
    { key: "projects", href: "/projects" },
    { key: "contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-lg transition-colors ${
        theme === "dark" ? "bg-slate-900/80" : "bg-white/80"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            FM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href} passHref>
                <motion.span
                  className={`cursor-pointer transition-colors hover:text-blue-500 ${
                    theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t(item.key)}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className={`md:hidden py-4 border-t ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link key={item.key} href={item.href} passHref>
                <motion.span
                  className={`block py-2 cursor-pointer transition-colors hover:text-blue-500 ${
                    theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {t(item.key)}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
