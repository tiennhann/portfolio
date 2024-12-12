import project1 from '../assets/images/projects/brewhound.png';
import project2 from '../assets/images/projects/prisonbreak.gif';
import project3 from "../assets/images/projects/helloword.png";
import project4 from "../assets/images/projects/notion.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "August 2023 - Present",
        title: "Computer Science Teacher Assistant",
        company: "NMSU",
        desc: [
            'Worked as the Teaching Assistant, providing valuable assistance to students with their queries.',
            'Demonstrated strong communication skills, effective time management, and a solid grasp of foundational course concepts',
            ],
    },
    {
        year: "2022 - 2023",
        title: "'Computer Science Teacher Proctor",
        company: "NMSU",
        desc: [
            'Led CS tutoring sessions in the lab for students. Helped students with their courses like Introduction to Computer Science, Data Structures, Object Oriented Programming, etc.',
            'Ensured all students fully comprehended the weekly curriculum and provided additional support to students who required extra tutoring. Diagnosed computer and software problems using Linux troubleshooting techniques.',
        ],
    },
    {
        year: "2021 - 2022",
        title: "Undergraduate Researcher",
        company: "NMSU",
        desc: [
            'Led CS tutoring sessions in the lab for students. Helped students with their courses like Introduction to Computer Science, Data Structures, Object Oriented Programming, etc.',
            'Ensured all students fully comprehended the weekly curriculum and provided additional support to students who required extra tutoring. Diagnosed computer and software problems using Linux troubleshooting techniques.',
        ],
    },
];

export const PROJECTS = [
    {
        title: "Brew Hound",
        image: project1,
        description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
        technologies: ["HTML", "CSS", "React", "Node.js"],
        link: "https://github.com/tiennhann/brew-hound"
    },
    {
        title: "Prison Break",
        image: project2,
        description:
        "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
        technologies: ["Lua"],
    },
    {
        title: "Hello World - Recommendation app",
        image: project3,
        description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React Native", "Firebase"],
        link: "https://github.com/tiennhann/HW_Recommendations"
    },
    {
        title: "Note Taking",
        image: project4,
        description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        technologies: ["Next.js", "React", "Convex", "Tailwind"],
        link: "https://github.com/tiennhann/note-taking"
    },
    ];