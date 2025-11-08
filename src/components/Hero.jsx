const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
            {/* Efecto de partículas de fondo */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                {/* Avatar o imagen */}
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        {/* <span className="text-2xl font-bold text-white">JG</span> */}
                        <img
                            src="https://i.ibb.co/qMTVGj9X/91266135.jpg"
                            alt="Juan Carlos Gonzalez"
                            className="w-28 h-28 rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Badge de profesión */}
                <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 mb-8">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 font-medium">Open to Work</span>
                </div>

                {/* Nombre y título */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Juan Carlos Gonzalez
                </h1>

                <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                    Software <span className="font-semibold text-blue-400">Developer</span>
                </p>

                {/* Descripción */}
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    What I love the most: Learning new things and expanding my knowledge every day.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
                    >
                        See My Projects
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>

                    <a
                        href="#contact"
                        className="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                    >
                        Contact Me
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;