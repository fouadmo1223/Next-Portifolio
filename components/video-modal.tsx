"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  videoSrc: string
}

export default function VideoModal({ isOpen, onClose, title, videoSrc }: VideoModalProps) {
  const { theme } = useTheme()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className={`relative rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] ${
              theme === "dark" ? "bg-slate-900" : "bg-white"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between p-6 border-b ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>{title}</h3>
              <motion.button
                onClick={onClose}
                className={`transition-colors ${
                  theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-slate-800"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Video */}
            <div className="aspect-video bg-black">
              <video src={videoSrc} controls className="w-full h-full" autoPlay>
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
