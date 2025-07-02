"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"

const experiences = [
  {
    id: 1,
    title: "fullStackDeveloper",
    company: "Createvio Computer Engineering",
    location: "Egypt",
    period: "Oct 2023 - Jul 2024",
    description: "createvioDesc",
    technologies: ["JavaScript", "SQL", "PHP", "Laravel", "Bootstrap", "AOS", "Sweet Alert", "PHPflasher"],
  },
  {
    id: 2,
    title: "frontEndDeveloper",
    company: "Da3em",
    location: "Egypt",
    period: "Apr 2025 - Jun 2025",
    description: "da3emDesc",
    technologies: ["React", "Next.js", "Tailwind CSS", "Material UI", "Zoom SDK"],
  },
]

export default function Timeline() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <motion.section
      id="experience"
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-slate-800"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("experienceTitle")}
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              theme === "dark"
                ? "bg-gradient-to-b from-blue-500 to-purple-500"
                : "bg-gradient-to-b from-blue-400 to-purple-400"
            }`}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex items-start mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"
                whileHover={{ scale: 1.2 }}
              />

              {/* Content */}
              <motion.div
                className={`ml-16 backdrop-blur-lg rounded-2xl p-6 w-full ${
                  theme === "dark" ? "bg-white/10" : "bg-white/70 shadow-xl"
                }`}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                      {t(exp.title)}
                    </h3>
                    <p className="text-blue-500 font-semibold mb-1">{exp.company}</p>
                  </div>

                  <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}>
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}>{t(exp.description)}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
