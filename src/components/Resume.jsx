import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

function Resume() {
    return (
        <section id="download-resume" className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Download My Resume
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        Click the button below to download my latest resume
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-12 text-center gap-8">
                    <a
                        href="/resume.pdf"
                        download
                        className="p-6 bg-white border-2 border-transparent rounded-lg shadow-md dark:bg-gray-800 dark:border-transparent flex flex-col items-center justify-center transition-colors transform hover:border-blue-500 dark:hover:border-blue-300"
                        >
                        <FaFileDownload className="w-16 h-16 text-primary-600 dark:text-primary-300 mb-4" />
                        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            Download Resume
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400">Get a copy of my resume here</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;
