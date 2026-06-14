export const portfolioData = {
  personalInfo: {
    name: "DHANUSH M M",
    role: "Java Full Stack Developer",
    email: "mmdhanush2204@gmail.com",
    phone: "7337604292",
    location: "Mysuru",
    linkedin: "dhanush-m-m9b05b2254",
    summary: "Motivated Java Full Stack Developer and Computer Science Engineering student. Seeking opportunities to further develop my skills and contribute to the company. Strong willingness to learn and contribute, effective communicator with collaborative mindset and strong work ethic.",
    resumePath: "/full stack resume.pdf",
    profilePicture: "/IMG_20260608_201010.jpg.jpeg",
  },
  skills: [
    {
      category: "Languages",
      items: ["Java", "JavaScript"]
    },
    {
      category: "Front-End",
      items: ["HTML5", "CSS", "React", "Tailwind CSS"]
    },
    {
      category: "Back-End",
      items: ["Spring Boot", "JDBC", "Servlets", "Hibernate", "Node.js", "Express.js", "WebSocket", "RESTful APIs"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"]
    },
    {
      category: "Cloud",
      items: ["Docker"]
    }
  ],
  projects: [
    {
      title: "AI-Based Healthcare System",
      techStack: ["React", "Spring Boot", "Java", "Gemini AI", "Docker"],
      image: "/health_project.png",
      github: "https://github.com/dhanu2204/health_management",
      live: "https://health-management-three.vercel.app",
      description: [
        "Engineered a full-stack health management platform featuring a secure Medical Vault for users to centrally upload, store, and manage personal medical documents.",
        "Integrated Google Gemini AI to automatically extract complex vital signs (BP, Pulse, SpO2, BMI) from uploaded medical reports and provide a statistic report having a comparison with the normal ranges.",
        "Developed an AI-powered Symptom Checker chatbot for intelligent health analysis, and deployed the full application to production using Docker, Render, Vercel, and Aiven Cloud."
      ]
    },
    {
      title: "AI-Powered Gym Tracker",
      techStack: ["React", "Spring Boot", "Java", "Gemini AI", "Docker"],
      image: "/gym_project.png",
      github: "https://github.com/dhanu2204/gym_managment",
      live: "https://gym-managment-beta.vercel.app/",
      description: [
        "Engineered a full-stack fitness platform featuring a real-time health dashboard, an interactive Exercise Vault, and secure authentication.",
        "Integrated Google Gemini AI as a virtual personal trainer to deliver highly customized workout routines and dietary guidance.",
        "Containerized and deployed the application to production using Docker, Render, Vercel, and TiDB Cloud (Serverless MySQL)."
      ]
    },
    {
      title: "Craves – Full-Stack Food Delivery Application",
      techStack: ["React.js", "Spring Boot", "MySQL", "Vite", "REST API"],
      image: "/craves_project.png",
      github: "https://github.com/dhanu2204/craves-food-app",
      live: "https://craves-food-app.vercel.app/",
      description: [
        "Developed a responsive food delivery platform using a React.js frontend and a Spring Boot backend, ensuring seamless communication via RESTful APIs.",
        "Built features to browse restaurants and food items with filtering capabilities (Cuisine, Veg/Non-Veg) and real-time search.",
        "Integrated a persistent shopping cart using React Context API and developed a backend order processing system to handle checkouts and order history."
      ]
    },
    {
      title: "Agricultural Advisory Platform",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Sarvam AI"],
      image: "/agri.png",
      github: "https://github.com/dhanu2204/Agri",
      live: "https://agri-one.vercel.app",
      description: [
        "Designed and developed a multilingual agricultural advisory platform that enables farmers to check real time market prices of crops and provides location-based weather updates, helping them make informed farming decisions.",
        "Integrated voice-based assistance using Sarvam API with speech-to-text and text-to-speech support in English, Hindi, and Kannada for improved accessibility.",
        "Implemented Calculator that calculates the amount of crop and minerals required based on the land measurement."
      ]
    }
  ],
  education: [
    {
      degree: "X Central Board Of Secondary Education",
      institution: "Maharshi Public School",
      duration: "2019",
      score: "75%"
    },
    {
      degree: "XII Department of Pre-University Education",
      institution: "Vivekananda PU College",
      duration: "2021",
      score: "84.9%"
    },
    {
      degree: "B.E : Computer Science & Engineering",
      institution: "P.E.S College of Engineering",
      duration: "2021-2025",
      score: "7.85 CGPA"
    }
  ],
  certifications: [
    {
      title: "Full Stack Web Development Certification",
      issuer: "Tap Academy",
      year: "2026",
      link: "/tap_certificate.pdf"
    }
  ],
  hobbies: ["Photography", "Videography", "Video Editing", "Travelling", "Reading Manga"]
};
