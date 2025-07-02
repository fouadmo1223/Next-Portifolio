"use client"

import { motion } from "framer-motion"
import { Code, ExternalLink, Play } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  codeLink?: string
  demoLink?: string
  videoId?: string
  type: "code-video" | "code-demo"
  category: string
}

interface ProjectCardProps {
  project: Project
  onVideoClick?: () => void
}

export default function ProjectCard({ project, onVideoClick }: ProjectCardProps) {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <motion.div
      className={`backdrop-blur-lg rounded-2xl overflow-hidden group ${
        theme === "dark" ? "bg-white/10" : "bg-white/70 shadow-xl"
      }`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Action buttons overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            {project.codeLink && (
              <motion.a
                href={project.codeLink}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Code size={20} />
              </motion.a>
            )}

            {project.type === "code-demo" && project.demoLink && (
              <motion.a
                href={project.demoLink}
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}

            {project.type === "code-video" && project.videoId && (
              <motion.button
                onClick={onVideoClick}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play size={20} />
              </motion.button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <motion.h3
          className={`text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-slate-800"}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className={`mb-4 text-sm ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={tech}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-2 py-1 rounded text-xs"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className={`text-xs px-2 py-1 ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </motion.div>

        <motion.div
          className="flex space-x-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.codeLink && (
            <motion.a
              href={project.codeLink}
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code size={16} className="mr-1" />
              {t("code")}
            </motion.a>
          )}

          {project.type === "code-demo" && project.demoLink && (
            <motion.a
              href={project.demoLink}
              className="flex items-center text-green-400 hover:text-green-300 text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} className="mr-1" />
              {t("demo")}
            </motion.a>
          )}

          {project.type === "code-video" && project.videoId && (
            <motion.button
              onClick={onVideoClick}
              className="flex items-center text-red-400 hover:text-red-300 text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={16} className="mr-1" />
              {t("video")}
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
