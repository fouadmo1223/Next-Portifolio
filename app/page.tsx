"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Sun,
  Moon,
  Languages,
} from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { useTheme } from "@/contexts/theme-context";

import Navigation from "@/components/navigation";
import Timeline from "@/components/timeline";
import SkillsSection from "@/components/skills-section";
import ProjectCard from "@/components/project-card";
import ContactForm from "@/components/contact-form";

import { projects } from "@/data/projects";

export default function Portfolio() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("allProjects");

  const filteredProjects =
    activeFilter === "allProjects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

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

      {/* Theme & Language Toggles */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
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

      {/* Hero Section */}
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

        <motion.div
          className="text-center z-10 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1`}
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-bold ${
                theme === "dark"
                  ? "bg-slate-800 text-white"
                  : "bg-white text-slate-800"
              }`}
            >
              FM
            </div>
          </motion.div>

          <motion.h1
            className={`text-5xl md:text-7xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
            variants={itemVariants}
          >
            {t("heroTitle")}
          </motion.h1>

          <motion.p
            className={`text-xl md:text-2xl mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-slate-600"
            }`}
            variants={itemVariants}
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-8"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/fouadmo1223"
              className={
                theme === "dark"
                  ? "text-white hover:text-blue-400"
                  : "text-slate-800 hover:text-blue-600"
              }
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/fouadmohamed2000/"
              className={
                theme === "dark"
                  ? "text-white hover:text-blue-400"
                  : "text-slate-800 hover:text-blue-600"
              }
              whileHover={{ scale: 1.2, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:fm0850020@gmail.com"
              className={
                theme === "dark"
                  ? "text-white hover:text-blue-400"
                  : "text-slate-800 hover:text-blue-600"
              }
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={32} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/CV_Fouad_Mohamed.pdf"
              download
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
            >
              <Download className="mr-2" size={20} />
              {t("downloadCV")}
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About */}
      {/* ... (Your about section code remains unchanged) */}

      {/* Timeline */}
      <Timeline />

      {/* Skills */}
      <SkillsSection />

      {/* Projects */}
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
            className={`text-4xl font-bold text-center mb-16 ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("projectsTitle")}
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact */}
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
            className={`text-4xl font-bold text-center mb-16 ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("contactTitle")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
