import panda from '../assets/panda.svg';
const Navbar = () => {
    return (
        <>
            <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-lg border-b border-gray-700 sticky top-0 z-50 ">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="text-white text-2xl font-bold">
                        <a
                            href="#"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
                        >
                            Juan Carlos Gonzalez
                            <img src={panda} className="inline-block w-10 h-10 ml-2 -mt-1 hover:scale-105 transition-all duration-300" />
                        </a>
                        
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-2">
                        <a
                            href="#skills"
                            className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-700/50 transition-all duration-300 font-medium hover:scale-105"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-700/50 transition-all duration-300 font-medium hover:scale-105"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-700/50 transition-all duration-300 font-medium hover:scale-105"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )

}
export default Navbar