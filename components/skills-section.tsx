"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"

const technicalSkills = [
  { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  { name: "Redux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
  {
    name: "Laravel",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg",
  },
  { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
  },
  { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  {
    name: "jQuery",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg",
  },
  { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  { name: "Vite", icon: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg" },
  {
    name: "Material UI",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
]

const softSkills = [
  {
    name: "problemSolving",
    icon: "https://img.icons8.com/fluency/96/problem-solving.png",
    description: "Analytical thinking and creative solutions",
  },
  {
    name: "teamwork",
    icon: "https://img.icons8.com/fluency/96/collaboration.png",
    description: "Effective collaboration and communication",
  },
  {
    name: "adaptability",
    icon: "https://img.icons8.com/fluency/96/change.png",
    description: "Quick learning and flexibility",
  },
  {
    name: "timeManagement",
    icon: "https://img.icons8.com/fluency/96/time-management.png",
    description: "Efficient project planning and execution",
  },
]

export default function SkillsSection() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.section
      id="skills"
      className="py-16 sm:py-20 lg:py-28 px-4 overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t("skillsTitle")}
            </span>
          </motion.h2>

          <motion.p
            className={`text-lg sm:text-xl max-w-3xl mx-auto mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-slate-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Crafting digital experiences with cutting-edge technologies and
            creative problem-solving
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 ">
          {/* Technical Skills */}
          <motion.div
            className={`backdrop-blur-2xl rounded-3xl p-8 sm:p-10 lg:p-12 border-2 relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 shadow-2xl"
                : "bg-gradient-to-br from-white/80 to-white/60 border-white/30 shadow-2xl"
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {/* Card Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="flex items-center mb-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3
                className={`text-3xl sm:text-4xl font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-800"
                }`}
              >
                {t("technicalSkills")}
              </h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`group relative flex flex-col items-center p-4 sm:p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    theme === "dark"
                      ? "bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30"
                      : "bg-black/5 hover:bg-black/15 border border-black/10 hover:border-black/30"
                  }`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.15,
                    y: -12,
                    rotateY: 8,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Skill Icon Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      fill
                      className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
                      crossOrigin="anonymous"
                    />
                  </div>

                  <p
                    className={`text-xs sm:text-sm font-semibold text-center transition-all duration-500 ${
                      theme === "dark"
                        ? "text-gray-300 group-hover:text-white"
                        : "text-slate-600 group-hover:text-slate-800"
                    }`}
                  >
                    {skill.name}
                  </p>

                  {/* Enhanced Tooltip */}
                  <motion.div
                    className={`absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-xl text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 ${
                      theme === "dark"
                        ? "bg-gray-800 text-white shadow-xl"
                        : "bg-gray-900 text-white shadow-xl"
                    }`}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  >
                    {skill.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills - Enhanced Design */}
          <motion.div
            className={`backdrop-blur-2xl rounded-3xl p-8 sm:p-10 lg:p-12 border-2 relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-br from-white/5 to-white/10 border-white/10 shadow-2xl"
                : "bg-gradient-to-br from-white/80 to-white/60 border-white/30 shadow-2xl"
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {/* Card Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="flex items-center mb-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3
                className={`text-3xl sm:text-4xl font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-800"
                }`}
              >
                {t("softSkills")}
              </h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`group relative flex flex-col items-center p-6 sm:p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                    theme === "dark"
                      ? "bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30"
                      : "bg-black/5 hover:bg-black/15 border border-black/10 hover:border-black/30"
                  }`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -15,
                    rotateX: 8,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 mb-6">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={t(skill.name)}
                      fill
                      className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
                      crossOrigin="anonymous"
                    />
                  </div>

                  <h4
                    className={`text-lg sm:text-xl font-bold text-center mb-3 transition-all duration-500 ${
                      theme === "dark"
                        ? "text-gray-200 group-hover:text-white"
                        : "text-slate-700 group-hover:text-slate-900"
                    }`}
                  >
                    {t(skill.name)}
                  </h4>

                  <p
                    className={`text-sm text-center transition-all duration-500 ${
                      theme === "dark"
                        ? "text-gray-400 group-hover:text-gray-300"
                        : "text-slate-500 group-hover:text-slate-600"
                    }`}
                  >
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-gray-300 to-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  {
                    label: "Projects",
                    value: "19+",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    label: "Experience",
                    value: "2+ Years",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    label: "Technologies",
                    value: "20+",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    label: "Satisfaction",
                    value: "100%",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className={`text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      whileHover={{ scale: 1.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div
                      className={`text-xs sm:text-sm font-medium ${
                        theme === "dark" ? "text-gray-400" : "text-slate-500"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
