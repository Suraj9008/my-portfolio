export const portfolio = {
    name: "Suraj Narule",
    role: "Software Engineer / Full Stack Developer",
    location: "India",
    phone: "+91 9890359008",
    email: "surajnarule.tech@gmail.com",
    stats: [
        { label: "Years of Experience", value: "4+" },
        { label: "Production Projects", value: "5+" },
        { label: "Payment Integrations", value: "Computop" },
        { label: "Domains", value: "Travel & Hospitality" },
    ],
    links: {
        github: "https://github.com/",       // update if needed
        linkedin: "https://linkedin.com/",   // update if needed
    },

    summary:
        "Senior Full Stack Engineer with 4+ years of experience designing and scaling multi-tenant B2B and B2C platforms in the travel-tech and booking domain. Strong ownership of frontend and backend systems including payment microservices, admin-driven platforms, and white-label solutions. Experienced in building reliable booking and payment flows used by multiple clients across regions.",

    skills: {
        languages: ["JavaScript", "TypeScript", "SQL", "C#"],
        frontend: ["React.js", "Angular", "Next.js", "HTML", "CSS", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", ".NET (Microservices)"],
        databases: ["PostgreSQL", "MongoDB", "SQL Server"],
        architecture: ["Multi-Tenant Systems", "Microservices"],
        payments: ["Computop (REST API Integration)"],
        tools: ["Git", "GitHub", "Bitbucket", "Docker", "Postman", "JIRA"],
    },

    experience: [
        {
            company: "EmbarkingOnVoyage Digital Solutions Pvt. Ltd.",
            role: "Software Engineer / Full Stack Developer",
            duration: "Mar 2022 – Present",
            bullets: [
                "Owned development of core product modules for airline and hotel booking platforms supporting B2B and B2C business models.",
                "Designed and implemented multi-tenant and white-label capabilities enabling client-specific branding and configuration.",
                "Collaborated with product managers and stakeholders to translate business requirements into scalable technical designs.",
            ],
        },
    ],

    projects: [
        {
            title: "Airline Booking System (B2B / B2C)",
            tag: "Multi-Tenant • Payments • Event Driven",
            duration: "2023 – Present",
            description:
                "Multi-tenant airline booking platform supporting B2B and B2C models with hierarchical agent onboarding and admin-driven white-label customization.",
            highlights: [
                "Designed hierarchical tenant structure (Web → Branch Group → Branch) to support scalable agent onboarding and access control.",
                "Built admin-driven white-label customization for branding, UI themes, loading screens, and email templates.",
                "Designed and implemented a standalone payment microservice integrating Computop REST APIs.",
                "Owned the complete payment lifecycle including authentication flows, callbacks, and transaction reconciliation.",
                "Improved payment reliability with idempotent transaction handling and failure recovery mechanisms.",
                "Implemented event-driven notifications using Kafka for real-time booking and payment status updates.",
            ],
            tech: [
                "React",
                "Node.js",
                "PostgreSQL",
                "Computop",
                "Kafka",
                "Microservices",
            ],
        },

        {
            title: "Airline Operations System",
            tag: "Operations • Performance • Security",
            duration: "Jun 2022 – Jun 2023",
            description:
                "Internal airline operations system supporting day-to-day operational workflows with secure and high-performance backend services.",
            highlights: [
                "Developed core airline operations modules used during peak operational hours.",
                "Optimized API response times and database performance using indexing and query tuning.",
                "Containerized backend services using Docker for consistent deployments.",
                "Implemented secure authentication mechanisms to protect sensitive operational data.",
            ],
            tech: ["Node.js", "Express.js", "PostgreSQL", "Docker"],
        },

        {
            title: "Hotel Booking System (Multi-Tenant)",
            tag: "Hospitality • CMS • Multi-Tenant",
            duration: "Feb 2024 – Jun 2025",
            description:
                "Multi-tenant hotel booking platform allowing multiple hotels to operate independently on a shared system.",
            highlights: [
                "Implemented booking workflows including availability management, reservations, and guest lifecycle handling.",
                "Built digital check-in and check-out flows using location-based validation.",
                "Designed CMS-driven hotel pages enabling non-technical users to manage content, images, amenities, and policies.",
                "Structured MongoDB schemas to ensure tenant isolation and scalable onboarding of hotels.",
            ],
            tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        },
    ],

    education: [
        {
            institute: "Shivaji University Kolhapur, India",
            degree: "Master in Computer Science",
            duration: "2016 – 2018",
            score: "68%",
        },
    ],

    contact: {
        address: "India",
        phone: "+91 9890359008",
        email: "surajnarule.tech@gmail.com",
    },

};
