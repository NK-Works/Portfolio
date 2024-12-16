export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 5,
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1Al-KneSrFTP4HhQi9g1Ij13_MGrtxN1d/view',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/clients-data/review1.png',
    review:
      'Working with Anneshu was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/clients-data/review2.png',
    review:
      'Anneshu\'s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He\'s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/clients-data/review3.png',
    review:
      'I can\'t say enough good things about Anneshu. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/clients-data/review4.png',
    review:
      'Anneshu was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'UnravelAI - All-in-One AI Assistant',
    desc: 'UnravelAI is an innovative multi-functional AI platform that provides services such as a chatbot for conversational AI, image analysis, and more. With support for multiple languages, users can interact with the system either via text or voice, allowing for a seamless experience.',
    subdesc:
      'Offers chatbot interactions, image analysis, voice processing, and multilingual support through a Streamlit interface, powered by Python, AI models, and advanced audio/image utilities.',
    href: 'https://unravel-ai.streamlit.app/',
    texture: '/textures/project/unravelai.mp4',
    logo: '/assets/project-info/ai-assist.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/project-info/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Streamlit',
        path: '/assets/project-info/project-tags/streamlit.svg',
      },
      {
        id: 2,
        name: 'Gemini API',
        path: '/assets/project-info/project-tags/gemini.png',
      },
      {
        id: 3,
        name: 'Python',
        path: '/assets/project-info/project-tags/python.png',
      },
      {
        id: 4,
        name: 'Voice Processing',
        path: '/assets/project-info/project-tags/voice.png',
      },
    ],
  },
  {
    title: 'Library Wiz - Library Management System',
    desc: 'The Automated Library Management System is designed to revolutionize how libraries function. Its primary goal is to replace manual processes with an innovative, automated solution that enhances the library experience for both students and staff.',
    subdesc:
      'The system made built upon IoT uses Raspberry Pi, which focuses on automation, security, user-friendliness, and scalability as its core requirements.',
    href: 'https://www.instructables.com/Raspberry-Pi-Based-Automated-Library-Management-Sy/',
    texture: '/textures/project/alms.mp4',
    logo: '/assets/project-info/lib.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/project-info/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/project-info/project-tags/python.png',
      },
      {
        id: 2,
        name: 'RaspberryPi',
        path: '/assets/project-info/project-tags/rpi.png',
      },
      {
        id: 3,
        name: 'My SQL',
        path: '/assets/project-info/project-tags/sql.png',
      },
      {
        id: 4,
        name: 'Arduino',
        path: '/assets/project-info/project-tags/arduino.png',
      },
    ],
  },
  {
    title: 'IDentifyChain - Blockchain Files Manager',
    desc: 'IDentifyChain is a blockchain-based decentralized application (DApp) designed for secure, scalable, and reliable files management. IDentifyChain leverages the strengths of these ecosystems to provide a tamper-proof, accessible platform for managing sensitive files. ',
    subdesc:
      'From voting systems (used in example) to healthcare, finance, and cross-border services, IDentifyChain supports a wide range of applications where files verification is critical.',
    href: 'https://identify-chain.vercel.app/',
    texture: '/textures/project/identifychain.mp4',
    logo: '/assets/project-info/blockchain-id.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:'#325e53',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/project-info/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/project-info/project-tags/react.svg',
      },
      {
        id: 2,
        name: 'NodeJS',
        path: '/assets/project-info/project-tags/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/project-info/project-tags/typescript.png',
      },
      {
        id: 4,
        name: 'Solidity Contract',
        path: '/assets/project-info/project-tags/sol.svg',
      },
    ],
  },
  {
    title: 'Robo Play - Robot Controller',
    desc: 'Robot Play is a web application for simulating robot control, supporting multiple maps and task execution based on user instructions. It features intuitive interfaces, real-time monitoring, and scalable architecture for dynamic robotic task management.',
    subdesc:
      'Built with .NET Core, PostgreSQL for database management, Swagger for backend testing, and Handlebars for code formatting, it delivers seamless task execution.',
    href: 'https://www.youtube.com/playlist?list=PL8zzkwcyhj7Q6SvZ8dXR5Ih3yITbQz0PJ',
    texture: '/textures/project/robotcontroller.mp4',
    logo: '/assets/project-info/robot.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/project-info/spotlight4.png',
    tags: [
      {
        id: 1,
        name: '.NET Core',
        path: '/assets/project-info/project-tags/dotnet.png',
      },
      {
        id: 2,
        name: 'PostgreSQL',
        path: '/assets/project-info/project-tags/postgres.png',
      },
      {
        id: 3,
        name: 'Swagger UI',
        path: '/assets/project-info/project-tags/swaggerui.svg',
      },
      {
        id: 4,
        name: 'Handlebars',
        path: '/assets/project-info/project-tags/handlebars.png',
      },
    ],
  },
  {
    title: 'Novel Hub - Novel Reading/Writing App',
    desc: 'Novel Hub is a modern and user-friendly web application designed for avid novel readers and aspiring authors. It\'s community of web novel enthusiasts, providing a platform for readers to engage in discussions while allowing authors to publish and manage their works.',
    subdesc:
      'Built with React.js, Node.js, MongoDB, Cloudinary and Framer, Novel Hub combines cutting-edge technology with a user-centric approach offering a great platform for budding authors and avid readers.',
    href: 'https://novels-hub.vercel.app/',
    texture: '/textures/project/novelhub.mp4',
    logo: '/assets/project-info/novel-hub.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/project-info/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/project-info/project-tags/react.svg',
      },
      {
        id: 2,
        name: 'NodeJS',
        path: '/assets/project-info/project-tags/nodejs.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/project-info/project-tags/framer.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/project-info/project-tags/mongo.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Infosys Springboard',
    pos: 'AI Intern',
    duration: 'Nov. 2024 - Present',
    title: "Developed advanced NLP and Computer Vision solutions, enhancing project performance. Designed deep learning models with TensorFlow and PyTorch for sentiment analysis, text classification, and real-time data processing.",
    icon: '/assets/experience/infosys-springboard-logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Unstop',
    pos: 'Campus Ambassador',
    duration: 'Oct. 2024 - Present',
    title: "Promoted Unstop's competitions via social media and notice boards, organized meetups and discussions to foster student collaboration, and encouraged participation in skill development and competitions.",
    icon: '/assets/experience/unstop-icon.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'ACM Student Chapter',
    pos: 'Web & Graphics Developer',
    duration: 'Mar. 2024 - Oct. 2024',
    title: "Developed and maintained the chapter's website using MERN stack, increasing user engagement by 30%. Designed promotional materials to enhance the chapter's online presence and boosting student engagement by over 25%.",
    icon: '/assets/experience/acm-logo.png',
    animation: 'salute',
  },
  
];
