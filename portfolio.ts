import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Anupam Gautam",
  title: "Hi all, I'm Anupam",
  description:
    "In the digital world of endless connections, I build bridges that span the gap between sleek user interfaces and treasure troves of data, using tools like restful APIs, graphQL, and websockets. As aerverless computing rises to the forefront, I’m eagerly exploring this dynamic and cutting-edge domain.",
  // resumeLink: "#",
};

export const openSource = {
  githubUserName: "anupam-gautam",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:anupam.gautam46@gmail.com",
  linkedin: "https://www.linkedin.com/in/anupamgautam46/",
  github: "https://github.com/anupam-gautam/",
  twitter: "https://twitter.com/AnupamGautam46",
  // instagram: "https://www.instagram.com/anupam",
  // facebook: 'https://www.facebook.com/anupam',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "PRIMARILY BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY NEW TECH TOOL",
  data: [
    {
      title: "Backend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing scalable Single-Page-Apps (SPA) & PWA in ASP.NET Core"),
        emoji("⚡ Designing serverless architectures with Azure Functions or AWS Lambda"),
        emoji("⚡ Building RESTful APIs in ASP.NET Core Web API"),
      ],
      softwareSkills: [
        {
          skillName: "Dotnet",
          iconifyTag: "logos:dotnet",
        },
        {
          skillName: "Serverless",
          iconifyTag: "logos:serverless",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Cloud",
    progressPercentage: "95",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "50", //Insert relative proficiency in percentage
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Tribhuvan University",
    subHeader: "Bachelor of Science in Computer Science and Information Technology",
    duration: "2018 - 2023",
    desc: "",
    grade: "Distinction (80.8%)",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Kathmandu Model College",
    subHeader: "Higher National Diploma (+2) in Science (Major: Computer Science)",
    duration: "2016 - 2018",
    desc: "",
    grade: "Grade B+",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer",
    company: " Fintech Solutions",
    companyLogo: "/img/icons/common/FintechLogo.png",
    date: "Sept 2023 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Software Developer",
    company: "EDA Nepal",
    companyLogo: "/img/icons/common/edaNepal.PNG",
    date: "Jan 2023 - Sept 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Dotnet Developer Intern",
    company: "EDA Nepal",
    companyLogo: "/img/icons/common/edaNepal.PNG",
    date: "Sept 2022 - Dec 2022",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Student Partnership Coordinator and Graphic Designer",
    company: "Hamrobazar",
    companyLogo: "/img/icons/common/hamrobazar.jpg",
    date: "Oct 2021 - Sep 2022",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/anupam/developer-portfolio",
    link: "https://developer-portfolio-anupam.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Anupam is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Anupam has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Anupam is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Anupam for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page

export const seoData: SEODataType = {
  title: "Anupam Gautam",
  description: greetings.description,
  author: "Anupam Gautam",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://anupamgautam.com.np",
  keywords: [
    "Anupam",
    "Anupam Gautam",
    "@anupam-gautam",
    "anupamgautam",
    "software engineeer",
    "Anupam Portfolio ",
    "Anupam Gautam Portfolio",
  ],
};
