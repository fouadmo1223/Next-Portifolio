"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"

export default function ContactForm() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
  }

  const inputVariants = {
    focus: { scale: 1.02, borderColor: "#3b82f6" },
  }

  return (
    <motion.div
      className={`backdrop-blur-lg rounded-2xl p-8 ${theme === "dark" ? "bg-white/10" : "bg-white/70 shadow-xl"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <form action="https://formspree.io/f/xjkykgyd" method="POST" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder={t("yourName")}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/10 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white/50 border-gray-300 text-slate-800 placeholder-gray-500"
              }`}
              variants={inputVariants}
              whileFocus="focus"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.input
              type="email"
              name="email"
              placeholder={t("yourEmail")}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/10 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white/50 border-gray-300 text-slate-800 placeholder-gray-500"
              }`}
              variants={inputVariants}
              whileFocus="focus"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.input
            type="text"
            name="subject"
            placeholder={t("subject")}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/10 border-gray-600 text-white placeholder-gray-400"
                : "bg-white/50 border-gray-300 text-slate-800 placeholder-gray-500"
            }`}
            variants={inputVariants}
            whileFocus="focus"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.textarea
            name="message"
            rows={5}
            placeholder={t("yourMessage")}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none ${
              theme === "dark"
                ? "bg-white/10 border-gray-600 text-white placeholder-gray-400"
                : "bg-white/50 border-gray-300 text-slate-800 placeholder-gray-500"
            }`}
            variants={inputVariants}
            whileFocus="focus"
          />
        </motion.div>

        {/* Honeypot Field */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        {/* Redirect After Submission */}
        <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <motion.div
                className="flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              </motion.div>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="mr-2" size={20} />
                {t("sendMessage")}
              </span>
            )}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  )
}
