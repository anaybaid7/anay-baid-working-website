import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Data Analysis, Engineering & Production",
    icon: web,
  },
  {
    title: "Software Administration",
    icon: mobile,
  },
  {
    title: "Frontend Development",
    icon: backend,
  },
  {
    title: "Software Engineering",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Data Engineering & Analysis",
    companyName: "Cineplex Entertainment LP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Performed comprehensive data quality assessments across multiple datasets, resolving over 200 anomalies through rigorous testing and collaborative problem-solving..",
      "Improved show-time optimization ML algorithm by 15% through model evaluations, fine-tuning, and data validation.",
      "Validated of 10TB data to Azure, ensuring 99% data integrity and automated data reporting workflows, reducing report generation time by 70%.",
      "Implemented data governance protocols via a coding management project implementing SQL Schema Compare and Git tools through Python shell scripting, achieving 100% compliance with industry standards.",
      "Developed custom data cube connections on the Cineplex Homepage Dashboard Power BI report, ran multiple testing scripts, & enhanced box office records displays via comprehensive data incident validation & tracking."
      ],
  },
  {
    title: "Software Administration Intern",
    companyName: "Alterra Mountain Company",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - September 2023",
    points: [
        "Implemented a Management System with Cenium 9, for a 20% reduction in check-in time via data streamlining.",
        "Enhanced the existing database scalability to handle 10,000+ guest records, achieving a 30% faster data retrieval in Tapechart via optimized indexing.",
        "Independently utilized Power BI for generating monthly reports, identifying upsell opportunities and driving a 15% revenue increase through data insights.",
      ],
  },
  {
    title: "Frontend Developer & Data Science Intern",
    companyName: "Nytia Health",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
        "Integrated libraries TensorFlow & Scikit-learn into Android watches, optimized data processing & efficiency by 20%.",
        "Leveraged Python and R with the Google BigQuery API, achieving a data processing rate of 1.5 Mbps.",
        "Developed real-time data visualization dashboards from A/B testing using Tableau, streamlining decision-making processes by 30%.",
      ],
  },
  {
    title: "Software Developer Intern",
    companyName: "VeDA Corporation",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
        "Reduced manual testing by 40% using Selenium-based scripts for content maintenance.",
        "Leveraged the Splunk monitoring tool and Docker for proactive identification and resolution of infrastructure issues, resulting in a 55% decrease in website downtime.",
        "Incorporated performance testing using Apache JMeter, identified and resolved bottlenecks resulting in a 10% increase in concurrent user capacity.",
      ],
  },
];

const testimonials: TTestimonial[] = [ 
  {
    testimonial:
        "Anay is an incredible communicator and problem-solver, always willing to help and share his expertise, making him a valuable resource for understanding complex topics with relative ease.",
      name: "Manju Tiwari",
      designation: "Senior Manager",
      company: "DreamWeb India",
      image: "https://media.licdn.com/dms/image/D4D03AQEO1P7quIcbyg/profile-displayphoto-shrink_100_100/0/1683222236604?e=1710979200&v=beta&t=Azg5LCvfTo1FJrazWYxuBiXYgYW2mdvjKPsRp1RXHX8",
    },
];

const projects: TProject[] = [
  {
    name: "TechStackify",
    description:
        "TechStackify is a MERN-GraphQL solution built by me in November 2023. It efficiently manages user interactions using Apollo Client and Context API, reducing processing time by 30%. The project also features visually appealing interfaces that reduce bounce rates by 20%. By implementing authentication, CRUD operations, voting, tagging, and pagination, error rates are decreased by 25%.",
      tags: [
          {
              name: "ApolloClient",
              color: "blue-text-gradient",
          },
          {
              name: "ContextAPI",
              color: "pink-text-gradient",
          },
          {
              name: "MongoDB",
              color: "red-text-gradient",
          },
          {
              name: "ExpressJS",
              color: "green-text-gradient",
          },
          {
              name: "ReactJS",
              color: "orange-text-gradient",
          },
          {
              name: "NodeJS",
              color: "purple-text-gradient",
          },
          {
              name: "GraphQL",
              color: "grey-text-gradient",
          },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "HackWestern — Best Gaming Hack (Big Blue Bubble)",
    description:
      "Led a 3-member team to develop an interactive animal welfare project Pashu, with WebGL & Unity frameworks, in C#.",
    tags: [
        {
          name: "WebGL",
          color: "blue-text-gradient",
        },
        {
          name: "Unity - Unreal Engine",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
