import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vikas",
  lastName: "", // optional (or put your last name)
  name: "Vikas",
  role: "Data Analyst | Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "nitesh.vikas11@gmail.com",
  location: "Australia/Melbourne", 
  languages: ["English", "Hindi"], 
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Vikas-2703",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vikas-66161921b/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Vikas | Data Analyst & Data Scientist",
description:
  "Portfolio — Power BI dashboards, SQL analytics, Python automation, and GenAI projects.",
  headline: <>Data Analyst | Data Scientist — Power BI, SQL, Python, AWS</>,
  featured: {
    display: false
    ,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
  <>
    I’m Vikas, a data professional in Australia specialising in{" "}
    <Text as="span" size="xl" weight="strong">
      Power BI, SQL, and Python
    </Text>
    . I build KPI dashboards, automate reporting, and develop{" "}
    <Text as="span" size="xl" weight="strong">
      GenAI solutions
    </Text>{" "}
    that turn data into clear business decisions.
  </>
),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Data Analyst & Data Scientist in Australia | Power BI, SQL, Python, GenAI`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a Data Analyst / Data Scientist focused on building reliable dashboards, automated
    reporting, and GenAI-enabled analytics. I enjoy turning messy data into clean models,
    clear insights, and stakeholder-ready storytelling using Power BI, SQL, Python, and cloud tools.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
  {
    company: "Tech Mahindra",
    timeframe: "Jan 2025 – Present",
    role: "Data Analyst",
    achievements: [
      <>Designed and delivered weekly and month-end operational and financial performance reports, supporting leadership visibility across cost, SLA, and productivity metrics.</>,
      <>Applied analytical and statistical techniques to large datasets to identify trends and root causes, contributing to a 56% reduction in aged backlog.</>,
      <>Implemented data validation and quality checks, improving SLA compliance from 80% to 92% and increasing stakeholder confidence.</>,
      <>Prepared executive-level performance summaries for senior stakeholders, translating data insights into operational recommendations.</>,
    ],
    images: [],
  },
  {
    company: "RMIT University",
    timeframe: "Jul 2024 – Nov 2024",
    role: "Data Analyst Intern",
    achievements: [
      <>Performed data discovery, profiling, and cleansing across multi-source datasets using Python (Pandas, NumPy) and SQL, reducing classification errors by 69%.</>,
      <>Built reusable Python-based transformation pipelines to standardise metrics and improve downstream data usability.</>,
      <>Supported cloud-hosted ETL workflows on AWS, ensuring data accuracy, consistency, and refresh reliability.</>,
    ],
    images: [],
  },
  {
    company: "Kurukshetra University",
    timeframe: "Apr 2022 – Apr 2023",
    role: "Data Analyst",
    achievements: [
      <>Analysed user interaction and chatbot performance data to identify trends and improvement opportunities, increasing response accuracy by ~35%.</>,
      <>Cleaned and transformed 100k+ legacy records using SQL, producing reliable datasets for performance analysis and reporting.</>,
      <>Delivered structured weekly performance packs and monthly dashboard summaries aligned with leadership review cycles.</>,
    ],
    images: [],
  },
],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "RMIT University",
        description: <>Masters of Data Science</>,
      },
      {
        name: "Kurukshetra University",
        description: <>Bachelors of Technology (Computer Science & Engineering).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
  {
    title: "Analytics & BI",
    description: <>Power BI dashboards, DAX, Power Query, KPI design, stakeholder reporting.</>,
    tags: [
      { name: "Power BI"}, // if icon exists; if not, remove icon field
      { name: "DAX"},
      { name: "Power Query"},
    ],
    images: [],
  },
  {
    title: "SQL & Data Modeling",
    description: <>SQL (CTEs, joins, window functions), data validation, analytics-ready tables.</>,
    tags: [
      { name: "SQL"},
      { name: "Data Modeling"},
    ],
    images: [],
  },
  {
    title: "Python & Automation",
    description: <>Python (pandas), automation, data cleaning, and reproducible analysis.</>,
    tags: [
      { name: "Python"},
    ],
    images: [],
  },
  {
    title: "Cloud & GenAI",
    description: <>AWS fundamentals + GenAI workflows (RAG, embeddings, prompt engineering).</>,
    tags: [
      { name: "AWS"},
      { name: "RAG"},
    ],
    images: [],
  },
],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Data analytics, BI dashboards, and GenAI projects ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
