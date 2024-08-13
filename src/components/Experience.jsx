import React from 'react';

function Experience() {
    return (
        <section id="experience" className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Experience
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Here's a look at my professional experiences and contributions
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 text-center">
                    {/* Trustworthy Card */}
                    <div className="p-6 bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800 dark:border-transparent hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Development Engineer Intern</h3>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-3">
                            Trustworthy
                        </p>
                        <div className="mt-4 mb-6 flex justify-center flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                NextJS
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                NestJS
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                AWS
                            </span>
                        </div>
                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            Focused on enhancing security and user experience by developing a secure login process and integrating social login options. Improved website aesthetics with advanced styling techniques.
                        </p>
                        <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                            May 2024 - Present
                        </p>
                    </div>

                    {/* DeepByte Technology Card */}
                    <div className="p-6 bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800 dark:border-transparent hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Development Engineer Intern (Frontend)</h3>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-3">
                            DeepByte Technology
                        </p>
                        <div className="mt-4 mb-6 flex justify-center flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                React
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                TypeScript
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                SCSS
                            </span>
                        </div>
                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            Contributed to the development of an online shopping platform by creating an intuitive user interface and ensuring a smooth and error-free user experience.
                        </p>
                        <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                            Oct 2023 - Nov 2023
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;
