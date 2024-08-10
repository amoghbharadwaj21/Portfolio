import React from 'react';
import { DiJavascript1 } from 'react-icons/di';
import { FaPython, FaDatabase } from 'react-icons/fa';
import { MdCloud } from 'react-icons/md';

function TechStack() {
    return (
        <section id="techstack" className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto mb-8 lg:mb-16 text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Technologies I use
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Trying to improve and expand my knowledge in
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Tech Item 1: JavaScript */}
                    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                            <DiJavascript1 className="w-8 h-8 text-primary-600 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">JavaScript</h3>
                        <ul className="text-gray-500 dark:text-gray-400 list-none flex flex-col items-center">
                            <li>React</li>
                            <li>Next.js</li>
                            <li>NestJS</li>
                            <li>Express</li>
                            <li>Node.js</li>
                        </ul>
                    </div>

                    {/* Tech Item 2: Python */}
                    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                            <FaPython className="w-8 h-8 text-primary-600 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Python</h3>
                        <ul className="text-gray-500 dark:text-gray-400 list-none flex flex-col items-center">
                            <li>NumPy</li>
                            <li>Pandas</li>
                            <li>Matplotlib</li>
                            <li>Scikit-learn</li>
                            <li>Flask</li>
                        </ul>
                    </div>

                    {/* Tech Item 3: Cloud Platforms */}
                    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                        <MdCloud className="w-8 h-8 text-primary-600 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Cloud Platform</h3>
                        <ul className="text-gray-500 dark:text-gray-400 list-none flex flex-col items-center">
                            <li>AWS</li>
                        </ul>
                    </div>

                    {/* Tech Item 4: Databases */}
                    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                            <FaDatabase className="w-8 h-8 text-primary-600 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Databases</h3>
                        <ul className="text-gray-500 dark:text-gray-400 list-none flex flex-col items-center">
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;
