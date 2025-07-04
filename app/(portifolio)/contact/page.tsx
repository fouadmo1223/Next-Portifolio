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
                        className={`text-4xl font-bold text-center mb-16 ${theme === "dark" ? "text-white" : "text-slate-800"
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
