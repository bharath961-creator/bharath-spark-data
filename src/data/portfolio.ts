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

/** Contact email address. */
export const contactEmail = "bharathreddy6874@gmail.com";

/** Contact phone number. */
export const contactPhone = "6305470656";

/** Resume PDF / Drive link. */
export const resumeUrl = "https://drive.google.com/file/d/1nhpZL2ElJQfgrRgzKT_ls88jTtICWbZ2/view?usp=drivesdk";

export const socials = {
  github: "https://github.com/bharath961-creator",
  linkedin: "http://www.linkedin.com/in/bharath-reddy-dasari-a1101434a",
  email: `mailto:${contactEmail}`,
  phone: `tel:+91${contactPhone}`,
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
  image: "sales" | "churn" | "dashboard" | "student";
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
    title: "Student Performance Analysis",
    description:
      "Explored student performance data to understand factors that influence academic outcomes. Cleaned and analyzed scores alongside demographic and study-habit variables, then visualized patterns and key drivers using Python libraries.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/bharath961-creator/student-performance-analysis",
    image: "student",
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
  { name: "Data Analytics Essentials", issuer: "Cisco Networking Academy", url: "https://drive.google.com/file/d/1eRr9PXA5s5wAeS9eNK7-Wn8Sx-cZdo7p/view?usp=drivesdk" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte", url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_695885c539ff7eaad955f779_1778075409749_completion_certificate.pdf?raw=1" },
  { name: "SQL", issuer: "Scaler", url: "https://drive.google.com/file/d/1JOSd8fc1btl-ajAUX5yJKzYmxDCbCCC0/view?usp=drivesdk" },
  { name: "Microsoft Excel", issuer: "Simplilearn / SkillUp", url: "https://drive.google.com/file/d/14Rb0qvYi7kFzE33ZcwBXDRyGyDmdbsmJ/view?usp=drivesdk" },
  { name: "Cloud Computing", issuer: "NPTEL", url: "https://drive.google.com/file/d/1LcufjESGmE_BJCosgogPaTfTq7096uBu/view?usp=drivesdk" },
  { name: "Gen AI powered Data Analytics Job Simulation", issuer: "TATA", url: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_695885c539ff7eaad955f779_1770137274914_completion_certificate.pdf?raw=1" },
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
