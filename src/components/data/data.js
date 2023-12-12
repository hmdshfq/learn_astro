
//Skills.astro
export const skills = [
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java (SE)"}, 
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", name:  "Spring"}, 
    {link: "./JUnit.svg", name: "JUnit"}, 
    {link: "./Mockito_Logo.png", name: "Mockito"}, 
    {link: "./maven.svg", name: "Maven"}, 
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL"},
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL"}, 
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML"}, 
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS"}, 
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript"}, 
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "GIT"}, 
    {link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", name: "Postman"}, 
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker"},
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernates"}, 
    {link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", name: "Jenkins"}
];

//WorkSection.astro
export const workInfo = [
    {
        dates: "January 2018 - January 2021",
        positionAndCompany: "System Administrator/Technical Support Engineer @ System Administrator LLC",
        place: "Minsk | ",
        link: "https://sys-admin.by",
        responsibilities: "Installing and configuring computer hardware, software, systems, networks, printers, and scanners. Troubleshooting and resolving issues with software, hardware and network. Support the implementation of new solutions or applications"
    },
    {
        dates: "September 2013 - November 2017",
        positionAndCompany: "System Administrator @ HCRB National Academic Orchestra",
        place: "Minsk | ",
        link: "https://orchestra.by",
        responsibilities: "Installing and configuring computer hardware, software, systems, networks, printers, and scanners. Troubleshooting and resolving issues with software, hardware and network. Support the implementation of new solutions or applications"
    }
];

//EducationSection.astro
export const educationInfo = [
    {
        dates : "June 2023 - current",
        positionAndCompany : "Front-end developer @ CodeYourPath (online mentorship)",
        place : "CodeYourPath | ", 
        link : "https://codeyourpath.com",
        responsibilities : "During my front-end mentorship journey as a mentee, I acquired a comprehensive set of skills that have significantly enriched my web development capabilities. Through hands-on guidance and collaborative learning, I've honed my proficiency in HTML, CSS, JavaScript and Astro."
    },
    {
        dates : "September 2005 - June 2009",
        positionAndCompany : "Software of mathematical information processing @ Minsk Radioengineering College (bachelor)",
        place : "Minsk | ", 
        link : "https://mrk-bsuir.by/en/",
        responsibilities : "I graduated from my bachelor's degree with good grades. I started off with C++ and gained a thorough understanding of algorithms. I also completed a minor in system administration."
    }
];

//CertificateCard.astro
export const certificateData = [
    { link: "/src/assets/images/certificate/English_cert.jpg", alt: "english business certificate", description: "English Business Course" },
    { link: "/src/assets/images/certificate/Udemi_docker_cert.jpg", alt: "Docker & Kubernetes: The Complete Practical Guide", description: "Docker & Kubernetes: The Complete Practical Guide" },
    { link: "/src/assets/images/certificate/Responsive_web_design.png", alt: "Responsive web design certificate from Free Code Camp", description: "Responsive web design" }
];

//ProjectCard.astro
export const projectData = [
    {link: "/src/assets/images/project/English_cert.jpg", alt: "project1", description: "simple project description"},
    {link: "/src/assets/images/project/English_cert.jpg", alt: "project1", description: "simple project description"},
    {link: "/src/assets/images/project/English_cert.jpg", alt: "project1", description: "simple project description"}
];

//Social.astro
export const socialLinks = [
    { href: "https://github.com/PavelPaliakou", label: "github profile", image: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>`},
    { href: "https://www.linkedin.com/in/pavel-p-4a0724287/", label: "linkedin profile", image: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`}
];