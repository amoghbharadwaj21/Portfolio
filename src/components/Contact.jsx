import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
    return (
        <section id="contact" className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Connect with me
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Feel free to reach out to me through any of the following platforms
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-8 lg:grid-cols-4">
                    {/* Instagram Card */}
                    <a
                        href="https://www.instagram.com/amogha_bharadwaj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg dark:hover:bg-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                    >
                        <FaInstagram className="w-16 h-16 text-primary-600 dark:text-primary-300 mb-4" />
                        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            Instagram
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Follow me for updates and more!</span>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href="https://www.linkedin.com/in/amogh-m-985490216"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg dark:hover:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800"
                    >
                        <FaLinkedin className="w-16 h-16 text-primary-600 dark:text-primary-300 mb-4" />
                        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            LinkedIn
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Connect with me professionally!</span>
                    </a>

                    {/* GitHub Card */}
                    <a
                        href="https://github.com/amoghbharadwaj21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg dark:hover:bg-gray-700 hover:bg-gradient-to-r hover:from-gray-800 hover:to-black"
                    >
                        <FaGithub className="w-16 h-16 text-primary-600 dark:text-primary-300 mb-4" />
                        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            GitHub
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Explore my repositories!</span>
                    </a>

                    {/* Email Card */}
                    <a
                        href="mailto:amoghabharadwaj21@gmail.com"
                        className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg dark:hover:bg-gray-700 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700"
                    >
                        <MdEmail className="w-16 h-16 text-primary-600 dark:text-primary-300 mb-4" />
                        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            Email
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Drop me a message anytime!</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
