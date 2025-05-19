import type { CertificationType, LinkType, ProjectType, SkillCardType, SkillType } from "../Types";

export const NAV_LINKS: LinkType[] = [
    {
        title: 'About Me',
        href: '#about'
    },
    {
        title: 'My Skills',
        href: '#skills'
    },
    {
        title: 'Certifications',
        href: '#certification'
    },
    {
        title: 'Projects',
        href: '#projects'
    },
    {
        title: 'Contact Me',
        href: '#contact'
    },
];

export const SKILLS: SkillCardType[] = [
    {
        title: 'Full-Stack Developer',
        img: '/Images/About/full.png'
    },
    {
        title: 'Next JS Developer',
        img: '/Images/About/next.png'
    },
    {
        title: 'Front-End Developer',
        img: '/Images/About/front.png'
    },
    {
        title: 'Back-End Developer',
        img: '/Images/About/back.png'
    },
];

export const TECHNOLOGIES: SkillType[] = [
    {
        img: '/Images/Tech/html.png',
        name: 'HTML'
    },
    {
        img: '/Images/Tech/css.png',
        name: 'CSS'
    },
    {
        img: '/Images/Tech/javascript.png',
        name: 'JavaScript'
    },
    {
        img: '/Images/Tech/git.png',
        name: 'GIT'
    },
    {
        img: '/Images/Tech/graphql.png',
        name: 'GraphQL'
    },
    {
        img: '/Images/Tech/mongodb.png',
        name: 'MongoDB'
    },
    {
        img: '/Images/Tech/next.png',
        name: 'Next JS'
    },
    {
        img: '/Images/Tech/nodejs.png',
        name: 'Node JS'
    },
    {
        img: '/Images/Tech/postgres.png',
        name: 'PostgreSQL'
    },
    {
        img: '/Images/Tech/react.png',
        name: 'React JS'
    },
    {
        img: '/Images/Tech/redux.png',
        name: 'Redux'
    },
    {
        img: '/Images/Tech/sass.png',
        name: 'Sass'
    },
    {
        img: '/Images/Tech/socket.png',
        name: 'Socket.IO'
    },
    {
        img: '/Images/Tech/tailwind.png',
        name: 'Tailwind CSS'
    },
    {
        img: '/Images/Tech/three.png',
        name: 'Three JS'
    },
    {
        img: '/Images/Tech/typescript.png',
        name: 'TypeScript'
    },
    {
        img: '/Images/Tech/prisma.png',
        name: 'Prisma'
    },
    {
        img: '/Images/Tech/fire.png',
        name: 'Firebase'
    },
    {
        img: '/Images/Tech/zustand.png',
        name: 'Zustand'
    }
];

export const CERTIFICATIONS: CertificationType[] = [
    {
        title: 'Responsive Web Design',
        description: 'Has successfully completed the freeCodeCamp Responsive Web Design Developer Certification, representing approximately 300 hours of coursework',
        img: '/Certifications/1.jpg',
        link: 'https://www.freecodecamp.org/certification/MoGabr/responsive-web-design',
    },
    {
        title: 'JavaScript Algorithms and Data Structures',
        description: 'Has successfully completed the freeCodeCamp JavaScript Algorithms and Data Structures Developer Certification, representing approximately 300 hours of coursework.',
        img: '/Certifications/2.jpg',
        link: 'https://www.freecodecamp.org/certification/MoGabr/javascript-algorithms-and-data-structures',
    },
];

export const PROJECTS: ProjectType[] = [
    {
        title: 'Nike Landing Page',
        img: '/Images/Projects/nike.jpg',
        description: 'A Nike landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        githubLink: 'https://github.com/MO-GBR/nike_landing_page',
        tags: ['Firebase', 'React', 'TailwindCSS']
    },
    {
        title: 'Netflix Clone',
        img: '/Images/Projects/netflix.jpg',
        description: 'A Netflix landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        githubLink: 'https://github.com/MO-GBR/netflix_clone',
        tags: ['Firebase', 'React', 'Sass', 'Redux']
    },
    {
        title: 'Disney Plus Clone',
        img: '/Images/Projects/disney.jpg',
        description: 'A Disney + landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        githubLink: 'https://github.com/MO-GBR/disney_plus_clone',
        tags: ['Firebase', 'React', 'Redux']
    },
    {
        title: 'Zentry Gaming Website',
        img: '/Images/Projects/zentry.jpg',
        description: 'Zentry is a gaming landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        githubLink: 'https://github.com/MO-GBR/zentry_gaming_website',
        tags: ['React', 'TailwindCSS']
    },
    {
        title: 'Q7 Cars Landing Page',
        img: '/Images/Projects/q7.jpg',
        description: 'A Cars landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        githubLink: 'https://github.com/MO-GBR/q7cars_landing_page',
        tags: ['React', 'TailwindCSS', 'ThreeJS']
    },
    {
        title: 'Xora Landing Page',
        img: '/Images/Projects/xora.jpg',
        description: 'Xora is a modern designed landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        githubLink: 'https://github.com/MO-GBR/xora_landing_page',
        tags: ['React', 'TailwindCSS']
    },
    {
        title: 'Smart E-commerce Website',
        img: '/Images/Projects/smart.jpg',
        description: 'A Full-Stack e-commerce website. That can handle all of the e-commerce user features. Featuring seamless payment processing through Stripe, you have the capability to purchase order from your shopping cart. With an admin side dashboard where you have a full management system.',
        githubLink: 'https://github.com/MO-GBR/smart_ecom_website',
        tags: ['React', 'Redux', 'TailwindCSS', 'NodeJS', 'MongoDB', 'ExpressJS']
    },
    {
        title: 'Chat App',
        img: '/Images/Projects/chat.jpg',
        description: 'Chatty is an advanced chat web app with some crazy amazing features. A real world project ready for production. It handles user privacy and easy to use. Real time functions that makes the app fast.',
        githubLink: 'https://github.com/MO-GBR/chat_app',
        tags: ['React', 'TailwindCSS', 'NodeJS', 'SocketIO', 'ExpressJS', 'PostgreSQL', 'GraphQL', 'Zustand']
    },
    {
        title: 'Evently Events Management Platform',
        img: '/Images/Projects/event.jpg',
        description: 'Full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.',
        githubLink: 'https://github.com/MO-GBR/evently_events_platform',
        tags: ['NextJS', 'TailwindCSS', 'MongoDB', 'TypeScript']
    },
    {
        title: 'Green E-commerce Website',
        img: '/Images/Projects/green.jpg',
        description: 'A Full-Stack Ecommerce website. That can handle all of the ecomm user features. Featuring seamless payment processing through Stripe, you have the capability to purchase order from you shopping cart.',
        githubLink: 'https://github.com/MO-GBR/green_ecom_website',
        tags: ['NextJS', 'TailwindCSS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zustand']
    },
];

export const BADGES: Record<string, string> = {
    TypeScript: 'bg-[#007acc]',
    Sass: 'bg-[#cb6699]',
    TailwindCSS: 'bg-[#38bdf8]',
    React: 'bg-[#61dafb]',
    NodeJS: 'bg-[#83cd29]',
    MongoDB: 'bg-[#439934]',
    PostgreSQL: 'bg-[#336791]',
    GraphQL: 'bg-[#e434aa]',
    NextJS: 'bg-[#000]',
    Redux: 'bg-[#764abc]',
    Zustand: 'bg-[#1f1f1f]',
    SocketIO: 'bg-[#000]',
    ThreeJS: 'bg-[#080808]',
    ExpressJS: 'bg-[#000]',
    Prisma: 'bg-[#000]',
    Firebase: 'bg-[#f58220]',
} as const;