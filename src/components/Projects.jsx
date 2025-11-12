import { useState } from 'react';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const projectsData = {
        all: [
            {
                id: 1,
                title: "Panda Task",
                description: "Web application for task management using boards with columns and drag-and-drop functionality for moving tasks.",
                image: "https://i.ibb.co/TxRrvBmD/Captura-de-pantalla-2025-11-07-203819.png",
                technologies: ["PHP", "laravel", "Vue.js", "Tailwind CSS"],
                category: "fullstack",
                github: "https://github.com/juancarlosgt/panda-task",
                demo: "https://pandatask.juankrlos.dev/",
                featured: true
            }, {
                id: 2,
                title: "Emisora UFPS",
                description: "Mobile application for the University Francisco de Paula Santander radio, allowing access to live streaming.",
                image: "https://i.ibb.co/1tXzsc0s/UFPSRADIO.jpg",
                technologies: ["Kotlin", "firebase",],
                category: "mobile",
                github: "https://github.com/juancarlosgt/emisora-ufps",
                demo: "https://github.com/juancarlosgt/emisora-ufps",
                progress: true
            },
            , {
                id: 2,
                title: "E-Commerce API",
                description: "Restful API for an e-commerce platform, providing endpoints for product management, user authentication, and shopping cart functionality.",
                image: "https://i.ibb.co/rfRzCkbG/Captura-de-pantalla-2025-11-12-181346.png",
                technologies: ["Node JS", "Express js", "JWT", "MySQL"],
                category: "backend",
                github: "https://github.com/juancarlosgt/API-KOI",
                demo: "https://github.com/juancarlosgt/API-KOI",                
            }

        ],
        fullstack: [{
            id: 1,
            title: "Panda Task",
            description: "Web application for task management using boards with columns and drag-and-drop functionality for moving tasks.",
            image: "https://i.ibb.co/TxRrvBmD/Captura-de-pantalla-2025-11-07-203819.png",
            technologies: ["PHP", "laravel", "Vue.js", "Tailwind CSS"],
            category: "fullstack",
            github: "https://github.com/juancarlosgt/panda-task",
            demo: "https://pandatask.juankrlos.dev/",
            featured: true
        }],
        frontend: [{
            id: 1,
            title: "Panda Task",
            description: "Web application for task management using boards with columns and drag-and-drop functionality for moving tasks.",
            image: "https://i.ibb.co/TxRrvBmD/Captura-de-pantalla-2025-11-07-203819.png",
            technologies: ["Vue.js", "Tailwind CSS"],
            category: "frontend",
            github: "https://github.com/juancarlosgt/panda-task",
            demo: "https://pandatask.juankrlos.dev/",
            featured: true
        }],
        backend: [{
            id: 1,
            title: "Panda Task",
            description: "Backend application for task management through a REST API with authentication and user management.",
            image: "https://i.ibb.co/TxRrvBmD/Captura-de-pantalla-2025-11-07-203819.png",
            technologies: ["PHP", "laravel", "Jwt"],
            category: "backend",
            github: "https://github.com/juancarlosgt/task-manager",
            demo: "https://pandatask.juankrlos.dev/",
            featured: true
        }],
        mobile: [{
            id: 1,
            title: "Emisora UFPS",
            description: "Mobile application for the University Francisco de Paula Santander radio, allowing access to live streaming.",
            image: "https://i.ibb.co/1tXzsc0s/UFPSRADIO.jpg",
            technologies: ["Kotlin", "Firebase",],
            category: "mobile",
            github: "https://github.com/juancarlosgt/emisora-ufps",
            demo: "https://github.com/juancarlosgt/emisora-ufps",
            progress: true
        }]
    };

    const categories = [
        { id: 'all', label: 'All', count: projectsData.all.length },
        { id: 'fullstack', label: 'Full Stack', count: projectsData.fullstack.length },
        { id: 'frontend', label: 'Frontend', count: projectsData.frontend.length },
        { id: 'backend', label: 'Backend', count: projectsData.backend.length },
        { id: 'mobile', label: 'Mobile', count: projectsData.mobile.length }
    ];

    const filteredProjects = projectsData[activeCategory];

    return (
        <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                    My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    A collection of projects that showcase my skills and experience in software development.
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === category.id
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                            }`}
                    >
                        {category.label}
                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                            {category.count}
                        </span>
                    </button>
                ))}
            </div>

            {/* Projects Container - Usando Flex en lugar de Grid */}
            <div className={`flex flex-wrap gap-8 justify-center`}>
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className={`group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-blue-500/50 transform hover:-translate-y-2 ${project.featured ? 'ring-2 ring-blue-500' : ''
                            }`}
                        style={{
                            width: 'calc(33.333% - 22px)', 
                            minWidth: '320px', 
                            flex: '0 0 auto' 
                        }}
                    >
                        {/* Project Image */}
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {project.featured && (
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Destacado
                                </div>
                            )}
                            {project.progress && (
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    En Progreso
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a
                                    href={project.github}
                                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                                >
                                    {/* Icono GitHub */}
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href={project.demo}
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                                >
                                    {/* Icono Demo */}
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Project Links */}
                            <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Código
                                </a>
                                <a
                                    href={project.demo}
                                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mensaje cuando no hay proyectos */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 text-lg">
                        No hay proyectos en esta categoría.
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;