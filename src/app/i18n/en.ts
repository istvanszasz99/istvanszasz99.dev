// All visible English text. `hu.ts` must match this shape, or `tsc` fails.
// The sr-only blocks, index.html and llms.txt stay in English for crawlers.
export const en = {
  // The owner's name as shown on the page. Hungarian puts the family name first.
  brand: {
    // Hero lines, each a list of words. `accent` words use the brand color.
    lines: [
      [{ text: "ISTVAN", accent: false }],
      [
        { text: "{ZOLTAN}", accent: true },
        { text: "SZASZ", accent: true },
      ],
    ],
    display: "István Zoltán Szász",
    copyright: "Istvan Zoltan Szasz",
  },
  nav: {
    items: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    toggleMenu: "Toggle menu",
    lightMode: "Light mode",
    hungarian: "Hungarian language",
  },
  hero: {
    ariaLabel:
      "Introduction — István Zoltán Szász, Junior Full-Stack Developer",
    tag: "Personal Website",
    roles: [
      "Computer Science Engineer",
      "Junior Full-Stack Developer",
      "Frontend Specialist",
    ],
    bio: "Junior Full-Stack Web Developer from Hungary with a Bachelor's degree in Computer Science Engineering from Óbuda University.",
    downloadResume: "Download Resume",
    resumeHref: "/document/Resume_EN.pdf",
    resumeFilename: "Istvan_Zoltan_Szasz_Resume_EN.pdf",
    stats: {
      certifications: "Certifications",
      projects: "Projects Completed",
      technologies: "Technologies",
    },
    scroll: "Scroll",
  },
  about: {
    ariaLabel: "About István Zoltán Szász — background, education, and skills",
    label: "About Me",
    headingWhite: "ABOUT",
    headingAccent: "ME",
    lead: "Junior Full-Stack Developer with a BSc in Computer Science Engineering from Óbuda University, specialising in modern web application development with React, Next.js and TypeScript.",
    body: "I have developed Full-stack applications through academic, certificate-based and independent projects, working across the entire stack from user interface to debugging and deployment.",
    softSkillsLabel: "Soft Skills",
    softSkills: {
      problemSolving: "Problem-solving",
      communication: "Communication",
      teamwork: "Teamwork",
    },
    hobbiesLabel: "Hobbies",
    hobbies:
      "Hobby Cooking , Hardware repair (laptops, PCs, phones & tablets) , Following F1 & WEC",
    statusLabel: "Status",
    status: "Open to opportunities",
  },
  skills: {
    ariaLabel: "Technical skills of István Zoltán Szász",
    label: "Tech Skills",
    headingWhite: "TECH",
    headingAccent: "SKILLS",
    paragraphs: [
      "Proficient across the modern web stacks like React, Next.js, TypeScript, and Node.js . Delivering scalable applications with responsive UI, optimized performance, and production-grade deployment workflows using Docker, Kubernetes, and cloud platforms.",
      "With expertise in frontend frameworks, backend architecture, mobile development, and emerging technologies like 3D graphics and game engines, I create comprehensive digital solutions that combine aesthetic design with robust functionality.",
      "Beyond technical proficiency, I'm passionate about solving complex problems through clean, maintainable code and creating seamless user experiences. I stay current with industry trends and best practices, constantly exploring new technologies to expand my skill set and deliver innovative solutions.",
    ],
    cta: "View Tools & Technologies",
    cards: {
      1: {
        heading: "Frontend Development",
        body: [
          "Development with React, Next.js & TypeScript",
          "Styling with Tailwind CSS & Motion",
          "Responsive Web Design & Mobile-first approach",
          "Search engine optimization (SEO)",
        ],
      },
      2: {
        heading: "Backend Development",
        body: [
          "Next.js, Node.js & Express.js for server-side development",
          "REST API design and implementation",
          "Authentication, validation and secure server-side logic",
        ],
      },
      3: {
        heading: "Mobile Development",
        body: [
          "Cross-platform apps with React Native",
          "development with Android Studio and Expo",
          "Mobile UI/UX best practices",
        ],
      },
      4: {
        heading: "3D Development",
        body: [
          "3D modelling with Unreal Engine 5 & Twinmotion",
          "Game development with Unreal Engine 5",
          "Level design and world-building",
          "Blueprints visual scripting & C++ programming",
        ],
      },
      5: {
        heading: "UI/UX Design",
        body: [
          "UI design & UX research principles",
          "Design systems & component libraries",
          "Responsive design for desktop, tablet and mobile",
          "Wireframing and prototyping with Figma",
        ],
      },
      6: {
        heading: "DevOps",
        body: [
          "CI/CD pipelines automated with GitHub Actions",
          "Containerised applications with Docker",
          "Container orchestration and scaling with Kubernetes",
          "Cloud deployment and serverless hosting for production releases",
        ],
      },
      7: {
        heading: "Databases",
        body: [
          "Relational data modelling and querying with PostgreSQL & SQL",
          "Document-based storage with MongoDB & NoSQL",
          "Flexible, typed API data fetching with GraphQL",
        ],
      },
    },
  },
  tools: {
    ariaLabel: "Tools and technologies used by István Zoltán Szász",
    label: "Tools & Technologies",
    headingWhite: "TOOLS &",
    headingAccent: "TECHNOLOGIES",
    description:
      "A collection of languages, frameworks and tools I use to build fast, scalable & beautiful products.",
  },
  experience: {
    ariaLabel:
      "Work experience, education, and certifications of István Zoltán Szász",
    label: "Experience",
    headingWhite: "MY",
    headingAccent: "Experience",
    description:
      "A comprehensive overview of my professional experience, academic background, and industry certifications.",
    workLabel: "Work Experience",
    educationLabel: "Education",
    certificationsLabel: "Certifications",
    work: {
      1: {
        title: "Full-Stack Web Developer",
        department: "MolnarCodes",
        description:
          "Optimised and made client websites and web interfaces fully responsive. Proposed UI/UX improvements and implemented them following joint discussion, and implemented SEO and GEO (Generative Engine Optimization) to improve visibility in search engines and AI-powered search. Independently integrated Next.js, Tailwind CSS, shadcn/ui and GSAP into production work. Refactored client codebases and resolved bugs to improve readability, maintainability and performance.",
        location: "Remote",
        type: "Mar 2026 – May 2026",
        logoAlt: "MolnarCodes",
      },
    },
    education: {
      1: {
        title: "Computer Science Engineer (BSc)",
        department: "Óbuda University – Alba Regia Faculty of Engineering",
        description: "",
        location: "Székesfehérvár, Hungary",
        type: "Sep 2019 – Feb 2025",
        logoAlt: "Óbuda University",
      },
      2: {
        title: "High School Diploma, Specialisation in Computer Science",
        department: "Bálint Márton Vocational Secondary School",
        description: "",
        location: "Törökbálint, Hungary",
        type: "Sep 2014 – May 2019",
        logoAlt: "Bálint Márton",
      },
    },
    certifications: {
      1: {
        title: "Full-Stack Developer Professional Certificate",
        department: "Microsoft",
        description: "",
        location: "Coursera",
        type: "2025",
        logoAlt: "Microsoft",
      },
      2: {
        title: "Full-Stack JavaScript Developer Professional Certificate",
        department: "IBM",
        description: "",
        location: "Coursera",
        type: "2025",
        logoAlt: "IBM",
      },
      3: {
        title: "Full-Stack Developer Professional Certificate",
        department: "Meta",
        description: "",
        location: "Coursera",
        type: "2024–2025",
        logoAlt: "Meta",
      },
      4: {
        title: "React Native Specialization",
        department: "Meta",
        description: "",
        location: "Coursera",
        type: "2024",
        logoAlt: "Meta",
      },
    },
  },
  projects: {
    ariaLabel: "Featured projects by István Zoltán Szász",
    label: "Projects",
    headingWhite: "FEATURED",
    headingAccent: "WORKS",
    viewAll: "View All on GitHub",
    more: "More Projects",
    onGitHub: (title: string) => `${title} on GitHub`,
    liveSite: (title: string) => `${title} live site`,
    techLabels: {
      "Responsive Design": "Responsive Design",
    } as Record<string, string>,
    items: {
      1: {
        title: "Frontend development for solidfinances.hu",
        category: "Web Development",
        description:
          "Frontend development for solidfinances.hu at MolnarCodes, a financial services website. Built with React & Tailwind CSS, and optimized for performance and all screen sizes.",
      },
      2: {
        title: "Full-Stack development for mindenegyseg.hu",
        category: "Web Development",
        description:
          "Full-Stack development for mindenegyseg.hu at MolnarCodes. Built with Next.js & Tailwind CSS, animations with GSAP, and UI components from Shadcn.ui. Fully responsive and optimized for performance.",
      },
      3: {
        title: "Simulation of the University Campus in 3D Environment",
        category: "3D Development",
        description:
          "A 3D educational simulation, where the user can visit the campus of Óbuda University in Székesfehérvár. The Simulation was created using the Unreal Engine 5 3D graphics engine. It uses high resolution textures to make the environment and buildings look more realistic.",
      },
    },
  },
  contact: {
    ariaLabel:
      "Contact István Zoltán Szász for freelance, full-time, or collaboration opportunities",
    label: "Contact",
    srHeading: "Let's Build Something Great",
    headingWhite: "LET'S BUILD",
    headingAccent: "SOMETHING GREAT",
    subtitle:
      "Open to freelance projects, full-time roles & exciting collaborations.",
    intro:
      "Whether you have a project in mind or want to collaborate, my inbox is always open. I'll get back to you as soon as possible.",
    available: "Available for new projects",
    emailLabel: "Email",
    nameLabel: "Your Name",
    namePlaceholder: "Your Name",
    addressLabel: "Email Address",
    addressPlaceholder: "Your Email Address",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    sending: "Sending...",
    send: "Send Message",
    errors: {
      required: "All fields are required.",
      send: "Failed to send message. Please try again.",
      generic: "Something went wrong.",
    },
    sentHeading: "MESSAGE SENT!",
    sentBody: "Thanks for reaching out. I'll get back to you within 24 hours.",
  },
  footer: {
    tagline: "Junior Full-Stack Developer · Érd, Hungary",
    emailLabel: "Email",
    rights: "All rights reserved.",
    builtWith: "Built with React · TailwindCSS · Motion",
  },
};

export type Translation = typeof en;
