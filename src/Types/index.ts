// ======== Components types ======== //
export type LinkType = {
    title: string
    href: string
};

export type SkillCardType = {
    title: string
    img: string
};

export type ProjectType = {
    title: string
    description: string
    img: string
    tags: string[]
    githubLink: string
    liveLink?: string
};

export type CertificationType = {
    title: string
    img: string
    description: string
    link: string
};

// ======== Motion types ======== //
export type MotionType = {
    direction?: string
    type?: string
    delay?: number
    duration?: number
};