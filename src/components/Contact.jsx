import { FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () => {
    return (
        <>
            <section id="contact" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold mb-4">Get in Touch</h2>
                    <p className="mb-8 text-lg">I'm open to new opportunities and collaborations. Feel free to reach out!</p>
                    <a
                        href="mailto:juancarlosgonzaleztorres4@gmail.com"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Contact Me
                    </a>
                    <p className="text-2xl font-bold- mt-6">Other Links</p>
                    <div className="links gap-4 flex justify-center mt-4 space-x-6">

                        <a href="https://www.linkedin.com/in/juankrlos-gonzalez/"><FaLinkedin className="inline-block mt-4 text-4xl text-blue-600 hover:text-blue-800 transition-colors duration-300" /></a>
                        <a href="https://github.com/juancarlosgt/"><FaGithub className="inline-block mt-4 text-4xl text-white hover:text-gray-500 transition-colors duration-300" /></a>
                        
                    </div>

                </div>
            </section>
        </>
    );
}
export default Contact