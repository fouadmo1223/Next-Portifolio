"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MapPin, Download, Sun, Moon, Languages } from "lucide-react"

import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"

import Navigation from "@/components/navigation"
import Timeline from "@/components/timeline"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import VideoModal from "@/components/video-modal"
import ContactForm from "@/components/contact-form"

const projects = [
  {
    id: 1,
    title: "FreeSmile",
    description: "Dental platform connecting professionals and patients with appointment scheduling.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    videoId: "freesmile",
    type: "code-video" as const,
    category: "webDevelopment",
  },
  {
    id: 2,
    title: "Boutique E-Commerce",
    description: "Full e-commerce solution with admin dashboard and payment integration.",
    technologies: ["PHP", "MySQL", "jQuery", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    videoId: "boutique",
    type: "code-video" as const,
    category: "ecommerce",
  },
  {
    id: 3,
    title: "Fresh Cart with Auth",
    description: "E-commerce website and admin dashboard with authentication and responsive design.",
    technologies: ["PHP", "MySQL", "React", "Redux", "Chart.js", "Material UI"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    videoId: "freshcart",
    type: "code-video" as const,
    category: "ecommerce",
  },
  {
    id: 4,
    title: "Dashboard with Auth",
    description: "Admin dashboard with authentication, charts, and responsive design.",
    technologies: ["React", "Redux", "Chart.js", "Material UI"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    videoId: "dashboard",
    type: "code-video" as const,
    category: "dashboard",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather forecasts with location detection and interactive UI.",
    technologies: ["React", "Material UI", "Redux", "Axios", "Moment.js"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "webDevelopment",
  },
  {
    id: 6,
    title: "Book Store",
    description: "Functional shopping cart with login and product management.",
    technologies: ["Next.js", "Framer Motion", "Swiper", "Tailwind CSS", "EmailJS", "Lucide"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "ecommerce",
  },
  {
    id: 7,
    title: "TechSphere",
    description: "Website for adding programming articles or any other tech-related content.",
    technologies: ["Next.js", "Framer Motion", "Swiper", "Tailwind CSS", "EmailJS", "Lucide", "Prisma", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "webDevelopment",
  },
  {
    id: 8,
    title: "Bondi Landing Page",
    description: "Modern landing page showcasing team members and services.",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "landingPage",
  },
  {
    id: 9,
    title: "Solar Landing Page",
    description: "Modern landing page showcasing benefits of Solar Energy.",
    technologies: ["HTML5", "CSS3"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "landingPage",
  },
  {
    id: 10,
    title: "Movie App Landing Page",
    description: "Modern landing page showcasing a Movie App.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "landingPage",
  },
  {
    id: 11,
    title: "Tailwind To Do",
    description: "Task management application with local storage support.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "webDevelopment",
  },
  {
    id: 12,
    title: "Neo Landing Page",
    description: "Modern landing page showcasing team members and services.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "PHP", "jQuery", "JavaScript", "Swiper"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "landingPage",
  },
  {
    id: 13,
    title: "Softy Landing Page",
    description: "Modern landing page showcasing team members and services.",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "landingPage",
  },
  {
    id: 14,
    title: "To-Do App",
    description: "Task management application with local storage support.",
    technologies: ["JavaScript", "jQuery"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "webDevelopment",
  },
  {
    id: 15,
    title: "React To-Do App",
    description: "Advanced task manager built with React and Redux Toolkit.",
    technologies: ["React", "Redux"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "webDevelopment",
  },
  {
    id: 16,
    title: "Your Country",
    description: "Advanced information about countries using API.",
    technologies: ["React", "Material-UI", "SweetAlert2"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "webDevelopment",
  },
  {
    id: 17,
    title: "Simple Dashboard",
    description: "Admin dashboard for managing customers, products, and categories.",
    technologies: ["React", "Material UI"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    videoId: "simple-dashboard",
    type: "code-video" as const,
    category: "dashboard",
  },
  {
    id: 18,
    title: "Loremspher (Next E-commerce)",
    description: "Authenticated website for safe shopping.",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Swiper",
      "Tailwind CSS",
      "EmailJS",
      "Lucide",
      "Strapi",
      "Stripe",
      "Clerk",
    ],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    videoId: "loremspher",
    type: "code-video" as const,
    category: "ecommerce",
  },
  {
    id: 19,
    title: "E-Commerce Cart",
    description: "Functional shopping cart with login and product management.",
    technologies: ["React", "Redux", "Material UI"],
    image: "/placeholder.svg?height=300&width=400",
    codeLink: "#",
    demoLink: "#",
    type: "code-demo" as const,
    category: "ecommerce",
  },
]

export default function Portfolio() {
  const { t, language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState("allProjects")

  const filteredProjects =
    activeFilter === "allProjects" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      {/* Navigation */}
      <Navigation />

      {/* Theme and Language Toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <motion.button
          onClick={toggleTheme}
          className={`p-3 rounded-full backdrop-blur-lg transition-colors ${
            theme === "dark" ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"
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
              : "bg-black/10 text-slate-800 hover:bg-black/20"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Languages size={20} />
        </motion.button>
      </div>

      {/* Hero Section - Added padding-top to avoid navbar */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20"
              : "bg-gradient-to-r from-blue-400/10 to-purple-400/10"
          }`}
        />

        <motion.div className="text-center z-10 px-4" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1`}
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-bold ${
                theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-slate-800"
              }`}
            >
              FM
            </div>
          </motion.div>

          <motion.h1
            className={`text-5xl md:text-7xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-slate-800"}`}
            variants={itemVariants}
          >
            {t("heroTitle")}
          </motion.h1>

          <motion.p
            className={`text-xl md:text-2xl mb-8 ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}
            variants={itemVariants}
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div className="flex justify-center space-x-6 mb-8" variants={itemVariants}>
            <motion.a
              href="https://github.com/fouadmo1223"
              className={`transition-colors ${
                theme === "dark" ? "text-white hover:text-blue-400" : "text-slate-800 hover:text-blue-600"
              }`}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/fouadmohamed2000/"
              className={`transition-colors ${
                theme === "dark" ? "text-white hover:text-blue-400" : "text-slate-800 hover:text-blue-600"
              }`}
              whileHover={{ scale: 1.2, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:fm0850020@gmail.com"
              className={`transition-colors ${
                theme === "dark" ? "text-white hover:text-blue-400" : "text-slate-800 hover:text-blue-600"
              }`}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={32} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              <Download className="inline mr-2" size={20} />
              {t("downloadCV")}
            </button>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-blue-500/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-purple-500/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-slate-800"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("aboutTitle")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className={`backdrop-blur-lg rounded-2xl p-8 ${
                theme === "dark" ? "bg-white/10" : "bg-white/70 shadow-xl"
              }`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                {t("professionalSummary")}
              </h3>
              <p className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}>{t("aboutDescription")}</p>

              <div className="space-y-4">
                <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}>
                  <Phone className="mr-3 text-blue-400" size={20} />
                  <span>UAE: 0504472752 | Egypt: 01016218389</span>
                </div>
                <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}>
                  <MapPin className="mr-3 text-blue-400" size={20} />
                  <span>El Mansoura, Egypt (open to relocate)</span>
                </div>
                <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}>
                  <Mail className="mr-3 text-blue-400" size={20} />
                  <span>fm0850020@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`backdrop-blur-lg rounded-2xl p-8 ${
                theme === "dark" ? "bg-white/10" : "bg-white/70 shadow-xl"
              }`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">Computer Engineering</h4>
                  <p className={theme === "dark" ? "text-gray-300" : "text-slate-600"}>Mansoura University</p>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                    Jan 2018 - Jun 2023 | Grade: Very Good
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-400">Front End Developer</h4>
                  <p className={theme === "dark" ? "text-gray-300" : "text-slate-600"}>ITI</p>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                    Feb 2022 - Apr 2022
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <Timeline />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-slate-800"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("projectsTitle")}
          </motion.h2>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { key: "allProjects", label: t("allProjects") },
              { key: "webDevelopment", label: t("webDevelopment") },
              { key: "ecommerce", label: t("ecommerce") },
              { key: "dashboard", label: t("dashboard") },
              { key: "landingPage", label: t("landingPage") },
            ].map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-slate-800 hover:bg-black/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeFilter}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onVideoClick={() => project.videoId && setActiveModal(project.videoId)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
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
            {t("contactTitle")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>

      {/* Video Modals */}
      <VideoModal
        isOpen={activeModal === "freesmile"}
        onClose={() => setActiveModal(null)}
        title="FreeSmile Demo"
        videoSrc="/placeholder-video.mp4"
      />
      <VideoModal
        isOpen={activeModal === "boutique"}
        onClose={() => setActiveModal(null)}
        title="Boutique E-Commerce Demo"
        videoSrc="/placeholder-video.mp4"
      />
      <VideoModal
        isOpen={activeModal === "freshcart"}
        onClose={() => setActiveModal(null)}
        title="Fresh Cart Demo"
        videoSrc="/placeholder-video.mp4"
      />
      <VideoModal
        isOpen={activeModal === "dashboard"}
        onClose={() => setActiveModal(null)}
        title="Dashboard Demo"
        videoSrc="/placeholder-video.mp4"
      />
      <VideoModal
        isOpen={activeModal === "loremspher"}
        onClose={() => setActiveModal(null)}
        title="Loremspher E-commerce Demo"
        videoSrc="/placeholder-video.mp4"
      />
      <VideoModal
        isOpen={activeModal === "simple-dashboard"}
        onClose={() => setActiveModal(null)}
        title="Simple Dashboard Demo"
        videoSrc="/placeholder-video.mp4"
      />
    </div>
  )
}
