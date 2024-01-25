import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Junior Web Developer",
        company_name: "Movinnza",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "FEB 2022 - DEC 2022",
        points: [
            "Developing and maintaining web applications using React.js and PHP Codeigniter related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "Self-Employed",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Present",
        points: [
            "Collaborated directly with clients to analyze and define unique requirements, driving successful delivery of customized WordPress,Nodejs, PHP, and React for diverse e-commerce and blogging projects; achieved 100% client satisfaction rate and exceeded revenue targets by 20%.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Using agile approaches, web apps were built and deployed, cutting development time by 30% and improving performance by 25%.",
          ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mayureshju',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mayuresh-juvekar/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Ed-tech Platform',
        description: 'Revolutionize your learning journey with our cutting-edge ed-tech platform, featuring secure OTP-based authentication for a personalized experience. Explore a vast array of courses, empowering students to purchase and instructors to seamlessly sell their knowledge, all enhanced by smooth video streaming.',
        link: 'https://ed-tech-frontend.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Blog App',
        description: 'Empower your blogging experience with our user-friendly app, enabling admins to effortlessly add, edit, and delete blogs. Users can dive into a world of rich content, easily filtering, searching, and engaging with blogs through comments, fostering an interactive reading journey with seamless community interaction.',
        link: 'https://www.webswizards.in/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Ecommerce',
        description: 'Designed and built a Ecommerce app, enabling admin to track expenses add , edit orders and product, added secure payment gateways and responsive UI with lightning fast loading speed.also added filtering and searching in frontend for searching product.to track latest and deals product we added dedicted section for that.',
        link: 'https://prettypetals.com/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Advance WhetherApp',
        description: 'Develop an advanced weather app featuring real-time updates and personalized suggestions. Provide insightful average reports for the past week and month, along with expected forecasts for the current week. Enhance user convenience with a toggle for Fahrenheit to Celsius conversion and ensure a responsive UI for optimal user experience.',
        link: 'https://65a10876f3c403a4e8f1c651--chic-granita-e002fe.netlify.app/',
    }
];