import React from 'react';

function Experience() {
    return (
        <section id="experience" className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-4 lg:py-2">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Experience
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Here's a look at my professional experiences and contributions
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-12 text-center justify-items-center">
                    {/* KPIT Technology Card */}
                    <div className="p-6 bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800 dark:border-transparent hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Development Engineer Intern (Frontend)</h3>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-3">
                            KPIT Technologies
                        </p>
                        <div className="mt-4 mb-6 flex justify-center flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Python
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Pydantic
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                FastAPI
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                FastMCP
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                LangChain
                            </span>
                        </div>
                        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            Developed and implemented automation solutions that reduced manual effort by 30-40% and significantly improved overall workflow efficiency. Worked on AI-driven tasks to optimize processes, achieving up to 25-30% improvement in execution time. Built and maintained scalable scripts and tools to streamline repetitive operations across systems, while collaborating with cross-functional teams to integrate automation into existing pipelines, enhancing overall system reliability.
                        </p>
                        <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                            Dec 2025 - Present
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;
