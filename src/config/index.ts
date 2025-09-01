import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "The Vinh Ha — Graduate Data Scientist & AI Engineer",
  author: "The Vinh Ha",
  description:
    "Fresh graduate from Macquarie University, based in Sydney, Australia. I specialize in data engineering and AI engineering while continuing to learn and grow in these fields.",
  lang: "en",
  siteLogo: "/thevinh-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/vin-ha/" },
    { text: "Github", href: "https://github.com/TheVinh-Ha-1710" },
    { text: "Resume", href: "/resume.pdf" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "The Vinh Ha",
    specialty: "Graduate Data Scientist & AI Engineer",
    summary:
      "Fresh graduate from Macquarie University, based in Sydney, Australia. I specialize in data engineering and AI engineering while continuing to learn and grow in these fields.",
    email: "thevinhha21082003@gmail.com",
  },
  experience: [
    {
      company: "Access Grants",
      position: "AI Engineer Intern",
      startDate: "Jul 2024",
      endDate: "Oct 2024",
      summary: [
        "Leveraged LLM-driven system utilizing LangChain framework to extracted key patterns from R&D documents automatically.",
        "Built an AI model that helps reduced manual review time by 15 hours weekly and Elevated data retrieval precision to 88%.",
        "Led a team of 6 engineers in daily stand-ups and sprint planning.",
        "Delivered the first MVP increasing 40% in processing speed, and lowered 15% of input errors.",
      ],
    },
    {
      company: "Miniso Australia",
      position: "Assisstant Store Manager",
      startDate: "Apr 2025",
      endDate: "Present",
      summary: [
        "Led a team of 10+ staff, ensuring smooth daily operations and high customer satisfaction.",
        "Tracked daily sales and inventory trends, supported restocking.",
        "Audited weekly stock, reducing inventory discrepancies.",
        "Optimized staff schedules based on sales and store visit pattern.",
      ],
    },
  ],
  projects: [
    {
      name: "E-Commerce Analytics Pipeline",
      summary: "An end-to-end analytics ETL pipeline for an e-commerce platform.",
      linkSource: "https://github.com/TheVinh-Ha-1710/Ecommerce-Analytics-Pipeline",
      image: "/ecommerce.png",
    },
    {
      name: "Diabetes Prediction Machine Learning Model",
      summary: "A machine learning model to diagnose diabetes patients.",
      linkSource: "https://github.com/TheVinh-Ha-1710/Diabetes-Predictive-Model",
      image: "/predictive-modeling.png",
    },
    {
      name: "Global Fashion Retail Analysis",
      summary: "A sales performance analysis report on a global fashion retail franchise.",
      linkSource: "https://github.com/TheVinh-Ha-1710/Fashion-Retails-Sales-Report",
      image: "/analysis.png",
    },
  ],
  about: {
    description: `
      Hi, I’m The Vinh Ha, a dedicated Data and AI Engineer with a passion for transforming information into insight. With a strong foundation in data pipelines, cloud platforms, and machine learning, I thrive at the crossroads of engineering and intelligence. As a fresh graduate from Macquarie University, I’ve cultivated skills in designing scalable data systems and developing AI-driven solutions that bring real-world impact. My projects span from building efficient ETL workflows to exploring predictive models, all with a focus on reliability, innovation, and continuous learning.
    `,
    image: "/thevinh-big.jpg",
  },
};

// #5755ff
