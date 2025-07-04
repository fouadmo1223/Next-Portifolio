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
      {/* Skills */}
      <SkillsSection />

    </div>
  );
}
