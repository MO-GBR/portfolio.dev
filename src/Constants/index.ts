import type { CertificationType, LinkType, ProjectType, SkillCardType } from "../Types";

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

export const TECHNOLOGIES: string[] = [
    '/Images/Tech/html.png',
    '/Images/Tech/css.png',
    '/Images/Tech/javascript.png',
    '/Images/Tech/git.png',
    '/Images/Tech/graphql.png',
    '/Images/Tech/mongodb.png',
    '/Images/Tech/next.png',
    '/Images/Tech/nodejs.png',
    '/Images/Tech/postgres.png',
    '/Images/Tech/react.png',
    '/Images/Tech/redux.png',
    '/Images/Tech/sass.png',
    '/Images/Tech/socket.png',
    '/Images/Tech/tailwind.png',
    '/Images/Tech/three.png',
    '/Images/Tech/typescript.png',
    '/Images/Tech/zustand.png',
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
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
    {
        title: 'Netflix Clone',
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
    {
        title: 'Disney Plus Clone',
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
    {
        title: 'Zentry Gaming Website',
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
    {
        title: 'Q7 Cars Landing Page',
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
    {
        title: 'Xora Landing Page',
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
    {
        title: 'Smart E-commerce Website',
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
    {
        title: 'Chat App',
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
    {
        title: 'Evently Events Management Platform',
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
    {
        title: 'Green E-commerce Website',
        img: '',
        description: '',
        githubLink: '',
        tags: ['']
    },
];

export const BADGES: Record<string, string> = {
    TypeScript: 'bg-[#007acc]',
    Sass: 'bg-[#cb6699]',
    TailwindCSS: 'bg-[#38bdf8]',
    React: 'bg-[#61dafb]',
    NodeJS: 'bg-[#83cd29]',
    MongoDB: 'bg-[#439934]',
    PostgresSQL: 'bg-[#336791]',
    GraphQL: 'bg-[#e434aa]',
    NextJS: 'bg-[#000]',
    Redux: 'bg-[#764abc]',
    Zustand: '#1f1f1f',
    SocketIO: 'bg-[#000]',
    ThreeJS: 'bg-[#080808]'
} as const;