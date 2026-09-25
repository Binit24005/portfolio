
import resumeForgeImg from "../images/resume-forge.png";
import irctcImg from "../images/irctc-analysis.png";

export const ProductsDetails = [
  {
    id: "project-1",
    title: "Resume Forge – Full-Stack Resume Builder",

    description:
      "A full-stack resume builder that allows users to create, customize, preview, and export professional resumes through a modern web interface.",

    techstack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    img: resumeForgeImg,

    liveDemoLink: "https://resume-5ennm6n11-binit-s-projects1.vercel.app",

    sourceCodeLink: "",

    overview:
      "Resume Forge is a full-stack resume generation platform designed to simplify the process of creating professional resumes. It provides secure user authentication, persistent sessions, CRUD operations, customizable resume templates, real-time resume rendering, and PDF export functionality.",

    features: [
      "JWT-secured user authentication and protected routes",
      "Persistent user sessions and resume CRUD operations",
      "Real-time resume preview and editing",
      "Three customizable resume templates",
      "PDF export using html2canvas and jsPDF",
      "Modular React frontend with centralized backend error handling",
    ],

    challenges: [
      "Designing a reliable authentication and session-management system",
      "Keeping resume data synchronized with the live preview",
      "Creating reusable resume templates and components",
      "Generating consistent PDF output from dynamic resume layouts",
    ],

    images: [],
  },

  {
    id: "project-2",
    title: "IRCTC UTS Ticketing & Passenger Flow Analysis",

    description:
      "A data analysis project using 89,000+ railway ticketing records to identify passenger flow patterns, peak travel periods, route trends, and digital booking adoption.",

    techstack: [
      "Python",
      "Pandas",
      "MySQL",
      "SQL",
      "Data Visualization",
    ],

    img: irctcImg,

    liveDemoLink: "https://irctc-data-analysis-d9arqwty2edyvmegax4aae.streamlit.app/",

    sourceCodeLink: "",

    overview:
      "The IRCTC UTS Ticketing & Passenger Flow Analysis project analyzes more than 89,000 railway ticketing records to identify important passenger and booking patterns. Python and Pandas were used for data cleaning and ingestion, while MySQL was used to store and query normalized datasets. SQL analysis was performed to identify peak travel hours, route profitability, congestion patterns, and digital booking adoption.",

    features: [
      "Analyzed 89,000+ railway ticketing records",
      "Automated data cleaning and ingestion using Pandas",
      "Normalized railway booking data into MySQL tables",
      "Used SQL queries to analyze routes and passenger trends",
      "Identified peak travel hours and congestion patterns",
      "Analyzed digital booking adoption and ticketing behavior",
    ],

    challenges: [
      "Cleaning and preparing a large railway ticketing dataset",
      "Handling inconsistent and missing data during preprocessing",
      "Designing normalized database tables for efficient analysis",
      "Writing SQL queries to extract meaningful business insights",
    ],

    images: [irctcImg],
  },
];

