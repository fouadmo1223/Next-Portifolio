"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",

    // Hero
    heroTitle: "Fouad Mohamed",
    heroSubtitle: "Full-Stack Web Developer",
    downloadCV: "Download CV",

    // About
    aboutTitle: "About Me",
    professionalSummary: "Professional Summary",
    aboutDescription:
      "I am a passionate Full Stack Developer with expertise in React.js, JavaScript, PHP, and SQL, dedicated to building high-performance, scalable web applications. With a strong foundation in Computer Engineering, I thrive in both front-end and back-end development, delivering seamless user experiences and robust functionality.",

    // Experience
    experienceTitle: "Professional Experience",
    fullStackDeveloper: "Full Stack Web Developer",
    frontEndDeveloper: "Front End Developer",
    createvioDesc:
      "Developed app solutions using JavaScript, SQL, PHP, Laravel, Bootstrap, resulting in 30% improvement in website performance through code optimization.",
    da3emDesc:
      "Contributed to building a dynamic Smart Student platform using React and Next.js, with real-time quiz modules and Zoom integration.",
    neoxeroDesc:
      "I specialize in frontend development, building modern and responsive eCommerce interfaces using React. My focus is on creating fast, user-friendly, and visually engaging shopping experiences by leveraging tools like Tailwind CSS, Framer Motion, and the React ecosystem. I work on customizing Zid themes and integrating them with React to deliver seamless, conversion-focused online stores that align with each brand’s identity.",

    // Skills
    skillsTitle: "Skills & Technologies",
    technicalSkills: "Technical Skills",
    softSkills: "Soft Skills",

    // Projects
    projectsTitle: "Featured Projects",
    allProjects: "All Projects",
    html: "HTML / CSS / JS",
    react: "React.js",
    next: "Next.js",
    php: "PHP | laravel ",
    zid: "Zid ",
    node: "Nodejs | Express.js",
    code: "Code",
    demo: "Demo",
    video: "Video",

    // Contact
    contactTitle: "Get In Touch",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    yourMessage: "Your Message",
    sendMessage: "Send Message",

    // Soft Skills
    problemSolving: "Problem-solving",
    teamwork: "Teamwork",
    adaptability: "Adaptability",
    timeManagement: "Time Management",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "نبذة عني",
    experience: "الخبرة",
    skills: "المهارات",
    projects: "المشاريع",
    contact: "التواصل",

    // Hero
    heroTitle: "فؤاد محمد",
    heroSubtitle: "مطور ويب متكامل",
    downloadCV: "تحميل السيرة الذاتية",

    // About
    aboutTitle: "نبذة عني",
    professionalSummary: "الملخص المهني",
    aboutDescription:
      "أنا مطور ويب متكامل شغوف بخبرة في React.js و JavaScript و PHP و SQL، مكرس لبناء تطبيقات ويب عالية الأداء وقابلة للتطوير. مع أساس قوي في هندسة الحاسوب، أتفوق في تطوير الواجهة الأمامية والخلفية، وأقدم تجارب مستخدم سلسة ووظائف قوية.",

    // Experience
    experienceTitle: "الخبرة المهنية",
    fullStackDeveloper: "مطور ويب متكامل",
    frontEndDeveloper: "مطور واجهة أمامية",
    createvioDesc:
      "طورت حلول تطبيقات باستخدام JavaScript و SQL و PHP و Laravel و Bootstrap، مما أدى إلى تحسن بنسبة 30% في أداء الموقع من خلال تحسين الكود.",
    da3emDesc:
      "ساهمت في بناء منصة الطالب الذكي الديناميكية باستخدام React و Next.js، مع وحدات اختبار في الوقت الفعلي وتكامل Zoom.",

    // Skills
    skillsTitle: "المهارات والتقنيات",
    technicalSkills: "المهارات التقنية",
    softSkills: "المهارات الشخصية",

    // Projects
    projectsTitle: "المشاريع المميزة",
    allProjects: "جميع المشاريع",
    html: "HTML / CSS / JS",
    react: "React.js",
    next: "Next.js",
    php: "PHP | laravel ",
    node: "Nodejs | Express.js",
    zid: "Zid ",
    code: "الكود",
    demo: "العرض",
    video: "فيديو",

    // Contact
    contactTitle: "تواصل معي",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    subject: "الموضوع",
    yourMessage: "رسالتك",
    sendMessage: "إرسال الرسالة",

    // Soft Skills
    problemSolving: "حل المشكلات",
    teamwork: "العمل الجماعي",
    adaptability: "القدرة على التكيف",
    timeManagement: "إدارة الوقت",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ar" ? "rtl" : "ltr"} dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
