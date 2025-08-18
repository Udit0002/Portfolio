// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import prismaLogo from './assets/tech_logo/prisma.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import solidityLogo from './assets/tech_logo/solidity.svg';
import supabaseLogo from './assets/tech_logo/supabase.webp';

// Experience Section Logo's
import drdoLogo from './assets/company_logo/drdo.png';

// Education Section Logo's
import schoolLogo from './assets/education_logo/school.png';
import collegeLogo from './assets/education_logo/ben.png';


// Project Section Logo's
import Fintracklogo from './assets/work_logo/Fintrack.png';
import Nexuslogo from './assets/work_logo/Nexus.png';
import switchStreamLogo from './assets/work_logo/switchstreamlogo.png';
import flexLogo from './assets/work_logo/flexApp.png';
import chatbotLogo from './assets/work_logo/bhishma.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Supabase', logo: supabaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Solidity', logo: solidityLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Prisma', logo: prismaLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: drdoLogo, 
      role: "Research Intern",
      company: "Defence Research and Development Organisation (DRDO)",
      date: "June 2024 – August 2024",
      desc: "Worked with scientists and engineers at DRDO to develop an AI-powered gesture recognition system using Convolutional Neural Networks (CNN). Contributed to critical defence R&D projects, focusing on enhancing operational efficiency and safety through custom AI solutions for national security.",
      skills: [
        "Python",
        "TensorFlow",
        "CNN",
        "Computer Vision",
        "AI/ML",
        "Deep Learning",
        "OpenCV",
        "Data Annotation",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: collegeLogo,
      school: "Bennett University",
      date: "Sept 2022 - Current",
      grade: "9.2 CGPA",
      desc: "I am currently pursuing a B.Tech in Computer Science Engineering at Bennett University with a CGPA of 9.2 . My coursework covers Data Structures, Algorithms, OOP, DBMS, Operating Systems, and Web Development. Alongside academics, I’ve built full-stack projects using React, Node.js, MongoDB, and PostgreSQL, and gained experience with cloud deployment and authentication. Hackathons, coding contests, and workshops have further strengthened my technical and problem-solving skills..",
      degree: "B.Tech Computer Science Engineering",
    },
    {
      id: 1,
      img: schoolLogo,
      school: "The Gurukul Nilokheri",
      date: "2019 - 2021",
      grade: "92.8%",
      desc: "I completed my Class 12th from The Gurukul, Nilokheri in the PCM (Physics, Chemistry, Mathematics) stream. My academic journey there helped me build a strong foundation in logical reasoning, mathematics, and analytical thinking. It was during this time that I developed a deep interest in technology and problem-solving, which led me to pursue Computer Science Engineering in my undergraduate studies..",
      degree: "Senior Secondary (Class 12) – PCM",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Fintrack-X",
      description:
        "A modern personal finance tracking platform that offers real-time dashboards, smart expense categorization, budget planning, and goal tracking — designed to give users clarity, control, and confidence in managing their money.",
      image: Fintracklogo,
      tags: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS", "Clerk", "Node.js", "Prisma", "Supabase", "REST / GraphQL API", "Inngest"],
      github: "https://github.com/Udit0002/Fintrack-X",
      webapp: "https://fintrack-x.vercel.app/",
    },
    {
      id: 1,
      title: "Nexuss",
      description: "Nexuss is an AI-powered alumni-student engagement platform that enables smart mentorship and networking through AI-driven recommendations, real-time chat & video calls, secure authentication, alumni location maps, and interactive feeds—helping institutions build stronger, career-focused communities.",
      image: Nexuslogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Udit0002/Nexus",
      webapp: "/",
    },
    {
      id: 2,
      title: "Flex App",
      description:
        "A cross-platform fitness tracking application built with React Native that offers personalized workout plans, water intake logging, and calorie tracking. Designed with a sleek UI and RESTful backend, it empowers users to monitor and improve their daily health routines.",
      image: flexLogo,
      tags: ["React Native", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
      github: "https://github.com/Udit0002/Flex", 
      webapp: "/", 

    },
    {
      id: 3,
      title: "SwitchStream",
      description:
        "A Next.js and TypeScript-based live streaming platform designed for both streamers and viewers. Built with Prisma and Vercel Postgres, integrated with Livekit for secure streaming and Clerk for authentication, SwitchStream delivers a seamless, engaging, and community-focused streaming experience.",
      image: switchStreamLogo,
      tags: ["Next.js", "TypeScript", "Prisma", "Postgres", "Livekit", "Clerk"],
      github: "https://github.com/Udit0002/SwitchStream",
      webapp: "https://switch-stream.vercel.app", 
    },

    {
      id: 4,
      title: "Namami Gange Awareness Chatbot",
      description:
        "A smart AI-powered chatbot featuring Chacha Chaudhary, designed as part of a government problem statement by the Ministry of Jal Shakti under the Namami Gange Programme. The chatbot uses interactive storytelling, quizzes, and games to educate children about river conservation. Built using TensorFlow/Dialogflow with a responsive frontend (HTML, CSS, JS), it provides real-time updates and environmental awareness. This project won 1st place in our college’s annual project showcase.",
      image: chatbotLogo,
      tags: ["AI", "Chatbot", "TensorFlow", "Dialogflow", "HTML", "JavaScript", "Government"],
      github: "https://github.com/Udit0002/Bhishma", 
      webapp: "https://astounding-pixie-f9e57b.netlify.app/",
    },    
    
  ];  