// src/data/config.js

import resumeForgeImg from "../images/resume-forge.png";
import irctcImg from "../images/irctc-analysis.png";

export const SITE_CONFIG = {
  name: "Binit Singh",

  role: "Full-Stack Developer",

  description: `Computer Science undergraduate specializing in full-stack web development and Java programming. Experienced in building scalable RESTful APIs, modern user interfaces, and database-driven applications using the MERN stack, MySQL, MongoDB, and Docker. Passionate about problem-solving, software development, and building efficient, user-focused applications.`,

  profile: {
    location: "Greater Noida, Uttar Pradesh, India",
    pronouns: "he/him",
  },

  socials: {
    github: "https://github.com/Binit24005",
    linkedin: "https://www.linkedin.com/in/binitsingh24/",
    twitter: "",
    x: "",
    youtube: "",
    instagram: "",
    mail: "mailto:binitkumarsingh24005@gmail.com",
    resume: "https://drive.google.com/file/d/1c2fWx5AaKiqn87ds3BQsQeRq8ju6tGZx/view?usp=sharing",
  },

  experience: [
    {
      company: "EduSkills",
      role: "Android Developer Virtual Intern",
      date: "July 2025 – September 2025",
      location: "Virtual Internship",
      isCurrent: false,
      description:
        "Worked on native Android application development using Java, XML layouts, and Android Studio.",
      bullets: [
        "Built and optimized native Android application interfaces using Java, XML layouts, and Android Studio",
        "Integrated RESTful backend endpoints to manage dynamic data flow, data serialization, and error handling",
        "Debugged and troubleshot applications across Android API levels to improve application stability and responsiveness",
      ],
      tags: ["Java", "Android Studio", "XML", "REST APIs"],
    },

    {
      company: "CodSoft",
      role: "Web Development Intern",
      date: "July 2025 – August 2025",
      location: "Remote",
      isCurrent: false,
      description:
        "Developed responsive web applications using React.js, Tailwind CSS, and Node.js.",
      bullets: [
        "Engineered and deployed responsive web interfaces using React.js, Tailwind CSS, and Node.js",
        "Implemented modular RESTful APIs with input validation, error handling, and JWT-based authentication middleware",
        "Collaborated on code reviews and version control using Git to maintain clean, reusable, and maintainable code",
      ],
      tags: ["React.js", "Tailwind CSS", "Node.js", "REST APIs", "Git"],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "Resume Forge – Full-Stack Resume Builder",
      description:
        "An interactive full-stack resume generation platform featuring JWT-secured authentication, persistent user sessions, CRUD operations, customizable resume templates, real-time resume rendering, and PDF export.",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      image: resumeForgeImg,

      // Resume Forge deployed website
      link: "https://resume-5ennm6n11-binit-s-projects1.vercel.app",
      liveDemoLink:
        "https://resume-5ennm6n11-binit-s-projects1.vercel.app",
    },

    {
      id: "project-2",
      title: "IRCTC UTS Ticketing & Passenger Flow Analysis",
      description:
        "A data analysis project using an unreserved railway ticketing dataset of 89,000+ records to identify peak congestion windows, booking trends, route profitability, peak travel hours, and digital booking adoption.",
      tags: [
        "Python",
        "Pandas",
        "MySQL",
        "Data Visualization",
        "SQL",
      ],
      image: irctcImg,

      // No live demo available yet
     link: "https://irctc-data-analysis-d9arqwty2edyvmegax4aae.streamlit.app/",
     liveDemoLink: "https://irctc-data-analysis-d9arqwty2edyvmegax4aae.streamlit.app/",
    },
  ],

  footer: [
    {
      Quote: "Wake up to reality. Nothing ever goes as planned in this world.",
      author: "Madara Uchiha",
    },
    {
      Quote: "What if it all works out in the end?",
      author: "Unknown",
    },
  ],
};