/**
 * Single source of truth for portfolio content.
 * Update values here — no component edits needed.
 */

export const profile = {
  name: "Bharath Reddy Dasari",
  title: "Data Analyst | Python | SQL | Power BI | Excel",
  role: "Data Analyst",
  stack: "Python • SQL • Power BI • Excel",
  tagline: "Turning data into clear insights and actionable decisions.",
  intro:
    "I'm a Computer Science Engineering student focused on data analytics. I enjoy working with data, finding patterns, building dashboards, and communicating insights through clear visualizations.",
  about:
    "I'm a B.Tech Computer Science and Engineering student building my skills in data analysis. I work with Python, SQL, Excel and Power BI to clean datasets, explore them, and turn the results into dashboards and visual stories. I'm looking for internship and entry-level Data Analyst opportunities where I can apply these skills to real-world datasets and keep learning from experienced analysts.",
  location: "India",
};

/** Replace with your real email address. */
export const contactEmail = "bharathreddydasari@example.com";

/** Replace with your resume PDF URL (e.g. a Google Drive share link or /resume.pdf). */
export const resumeUrl = "/resume.pdf";

export const socials = {
  github: "https://github.com/bharath961-creator",
  linkedin: "https://www.linkedin.com/in/bharath-reddy-dasari-a1101434a",
  email: `mailto:${contactEmail}`,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { label: "Education", value: "B.Tech CSE" },
  { label: "Current Focus", value: "Data Analytics" },
  { label: "Location", value: "India" },
  { label: "Career Goal", value: "Data Analyst" },
];

export const skillGroups = [
  {
    category: "Programming & Analysis",
    icon: "code",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Database",
    icon: "database",
    skills: ["SQL", "MySQL"],
  },
  {
    category: "Data & Visualization",
    icon: "chart",
    skills: ["Microsoft Excel", "Power BI", "Tableau", "Data Visualization"],
  },
  {
    category: "Other",
    icon: "tools",
    skills: ["Git", "GitHub", "Exploratory Data Analysis", "Statistics"],
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: "sales" | "churn" | "dashboard";
  status?: "Coming Soon";
};

export const projects: Project[] = [
  {
    title: "Sales Data Analysis",
    description:
      "Analyzed sales data to identify revenue trends, top-performing products, customer patterns and business insights. Used Python/SQL and visualization techniques to explore the dataset and communicate findings.",
    tech: ["Python", "Pandas", "SQL", "Power BI", "Excel"],
    github: "https://github.com/bharath961-creator/Salse-Data-Analysis",
    image: "sales",
  },
  {
    title: "Customer Churn Analysis",
    description:
      "Analyzed customer data to identify patterns associated with customer churn and explored factors that may influence customer retention.",
    tech: ["Python", "Pandas", "SQL", "Power BI", "Data Visualization"],
    image: "churn",
  },
  {
    title: "Business Performance Dashboard",
    description:
      "Interactive dashboard project focused on analyzing business KPIs, revenue trends, product performance and customer metrics.",
    tech: ["Power BI", "Excel", "SQL"],
    image: "dashboard",
    status: "Coming Soon",
  },
];

export type Certificate = {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
};

export const certificates: Certificate[] = [
  { name: "Data Analytics Essentials", issuer: "Cisco Networking Academy" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte" },
  { name: "SQL", issuer: "Scaler" },
  { name: "Microsoft Excel", issuer: "Simplilearn / SkillUp" },
  { name: "Cloud Computing", issuer: "NPTEL" },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Audisankara College of Engineering and Technology",
    period: "2023 - 2027",
    description:
      "Building a foundation in computer science while developing practical skills in data analytics, programming, databases and visualization.",
  },
];
