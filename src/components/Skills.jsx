import { useState } from 'react';
import { FaNodeJs ,FaPython,FaJava,FaReact,FaDocker,FaAws,FaPhp ,FaLaravel,FaVuejs  } from 'react-icons/fa';
import { BiLogoPostgresql,BiLogoMongodb  } from "react-icons/bi";
import { SiExpress ,SiTypescript,SiJavascript,SiTailwindcss,SiNextdotjs,SiHtml5,SiVite,SiGithubactions,SiDjango,SiSpring} from "react-icons/si";
const Skills = () => {
    const [activeTab, setActiveTab] = useState('backend');

    // Íconos para cada skill (puedes usar react-icons)
    const skillsData = {
        backend: [
            { name: 'Node.js',  icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Django',  icon:<SiDjango className='text-green-600'/> },
            { name: 'Python',  icon:<FaPython className='text-yellow-300'/> },
            { name: 'Spring',  icon:<SiSpring className='text-green-400'/> },
            { name: 'Java',  icon: <FaJava className='text-white'/> },
            { name: 'PostgreSQL', icon: <BiLogoPostgresql className='text-blue-300'/> },
            { name: 'MongoDB',  icon: <BiLogoMongodb className='text-green-400'/> },
            { name: 'Express.js',  icon: <SiExpress className='text-white'/> },
            { name: 'PHP',  icon: <FaPhp className='text-blue-300'/> },
            { name: 'Laravel',  icon: <FaLaravel className='text-red-400'/> },
        ],
        frontend: [
            { name: 'React',  icon: <FaReact className='text-blue-400'/> },
            { name: 'Vue.js',  icon: <FaVuejs  className='text-green-600'/> },
            { name: 'TypeScript',  icon: <SiTypescript className='text-blue-600'/> },
            { name: 'JavaScript',  icon: <SiJavascript className='text-yellow-300'/> },
            { name: 'Tailwind CSS',  icon: <SiTailwindcss className='text-blue-400'/> },
            { name: 'Next.js',  icon: <SiNextdotjs className='text-white'/> },
            { name: 'HTML/CSS',  icon:<SiHtml5 className='text-orange-400'/>  },
            { name: 'Vite',  icon:<SiVite className='text-white'/>  }
        ],
        devops: [
            { name: 'Docker',  icon: <FaDocker className='text-cyan-400'/> },
            { name: 'AWS',  icon: <FaAws className='text-orange-300'/> },
            { name: 'CI/CD',  icon: '🔄' },
            { name: 'GitHub Actions',  icon:<SiGithubactions className='text-white'/> },
    
        ],
        
    };

    const tabs = [
        { id: 'backend', label: 'Backend', icon: '⚙️' },
        { id: 'frontend', label: 'Frontend', icon: '🎨' },
        { id: 'devops', label: 'DevOps', icon: '🚀' },
        //{ id: 'tools', label: 'Herramientas', icon: '🛠️' }
    ];

    return (
        <section id='skills' className="max-w-6xl mx-auto px-4 py-12 mb-20" >
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
                Dev Stack
            </h2>
            
            {/* Tabs con íconos */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                            activeTab === tab.id
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="text-lg">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Skills Grid con íconos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData[activeTab].map((skill, index) => (
                    <div
                        key={skill.name}
                        className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transform hover:-translate-y-2"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-gray-800 dark:text-white text-lg">
                                        {skill.name}
                                    </h3>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;