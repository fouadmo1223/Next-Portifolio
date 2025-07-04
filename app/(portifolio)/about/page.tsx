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
    <div>


      {/* About */}
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
            className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("aboutTitle")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className={`backdrop-blur-lg rounded-2xl p-8 ${theme === "dark" ? "bg-white/10" : "bg-white/70 shadow-xl"
                }`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
              >
                {t("professionalSummary")}
              </h3>
              <p
                className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-slate-600"
                  }`}
              >
                {t("aboutDescription")}
              </p>

              <div className="space-y-4">
                <div
                  className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-slate-600"
                    }`}
                >
                  <Phone className="mr-3 text-blue-400" size={20} />
                  <span>UAE: 0504472752 | Egypt: 01016218389</span>
                </div>
                <div
                  className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-slate-600"
                    }`}
                >
                  <MapPin className="mr-3 text-blue-400" size={20} />
                  <span>El Mansoura, Egypt (open to relocate)</span>
                </div>
                <div
                  className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-slate-600"
                    }`}
                >
                  <Mail className="mr-3 text-blue-400" size={20} />
                  <span>fm0850020@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`backdrop-blur-lg rounded-2xl p-8 ${theme === "dark" ? "bg-white/10" : "bg-white/70 shadow-xl"
                }`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
              >
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">
                    Computer Engineering
                  </h4>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-slate-600"
                    }
                  >
                    Mansoura University
                  </p>
                  <p
                    className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-slate-500"
                      }`}
                  >
                    Jan 2018 - Jun 2023 | Grade: Very Good
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-400">
                    Front End Developer
                  </h4>
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-slate-600"
                    }
                  >
                    ITI
                  </p>
                  <p
                    className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-slate-500"
                      }`}
                  >
                    Feb 2022 - Apr 2022
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>




    </div>
  );
}
