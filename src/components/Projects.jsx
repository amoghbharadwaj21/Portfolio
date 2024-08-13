import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

function Projects() {
    return (
        <section id="projects" className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Projects
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400 text-justify">
                        Crafted with skill and care to address real-world challenges and showcase innovative solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-8 lg:grid-cols-3">
                    {/* AI Amatya Card */}
                    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                        
                        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            AI-Amatya
                        </h3>
                        <div className="mt-4 mb-6 flex justify-center flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Python
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Machine Learning
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Flask
                            </span>
                        </div>
                        <p className="mt-4 mb-4 text-gray-500 dark:text-gray-400 text-justify">
                            A web application for interacting with and querying the content of uploaded PDF documents. Utilizes machine learning models to process text and deliver accurate responses.
                        </p>

                        <a href="https://amatya.onrender.com/" title="View Project"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View Project
                            <FaArrowRight className="w-4 h-4 ml-2 -mr-1" />
                        </a>
                    </div>

                    {/* Student Performance Prediction Card */}
                    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                    <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            EduPredictor
                        </h3>

                        <div className="mt-4 mb-6 flex justify-center flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Python
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                AWS
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Machine Learning
                            </span>
                        </div>
                        <p className="mt-4 mb-4 text-gray-500 dark:text-gray-400 text-justify">
                            An AI system for predicting student performance based on historical academic data. Developed with Python and deployed on AWS for a scalable solution.
                        </p>
                        <a href="http://testmarksprediction-env.eba-wpkyse4j.ap-south-1.elasticbeanstalk.com/" title="View Project"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View Project
                            <FaArrowRight className="w-4 h-4 ml-2 -mr-1" />

                        </a>
                    </div>



                    {/* AdPredict Card */}
                    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                    <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            Ad-Predict
                        </h3>

                        <div className="mt-4 mb-6 flex justify-center flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Python
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                NumPy
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Pandas
                            </span>
                        </div>
                        <p className="mt-4 mb-4 text-gray-500 dark:text-gray-400 text-justify">
                            Implements a simple neural network to analyze the impact of marketing expenses on sales. Utilizes Python libraries for linear regression modeling and data analysis.
                        </p>
                        <a href="https://github.com/amoghbharadwaj21/Single-Perceptron-Neural-Network" title="View Project"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View Project
                            <FaArrowRight className="w-4 h-4 ml-2 -mr-1" />

                        </a>
                    </div>

                    {/* AskHowLabs Card */}
                    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                    <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            AskHowLabs
                        </h3>

                        <div className="mt-4 mb-6 flex justify-center flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                React JS
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                JavaScript
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                SCSS
                            </span>
                        </div>
                        <p className="mt-4 mb-4 text-gray-500 dark:text-gray-400 text-justify">
                            A visually appealing and interactive web application for showcasing company services.
                        </p>
                        <a href="https://askhowlabs.netlify.app/" title="View Project"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View Project
                            <FaArrowRight className="w-4 h-4 ml-2 -mr-1" />

                        </a>
                    </div>

                    {/* Farm.Connect Card */}
                    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                    <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            Farm-Connect
                        </h3>
                        <div className="mt-4 mb-6 flex justify-center flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                React JS
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                SCSS
                            </span>
                            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                MySQL
                            </span>
                        </div>
                        <p className="mt-4 mb-4 text-gray-500 dark:text-gray-400 text-justify">
                            A comprehensive software solution designed to streamline and optimize the management of crop inventory. Aims to address the challenges faced by farmers and agricultural businesses in efficiently monitor and managing their crop inventory throughout the cycle.
                        </p>

                        <a href="https://github.com/amoghbharadwaj21/Farm.Connect" title="View Project"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View Project
                            <FaArrowRight className="w-4 h-4 ml-2 -mr-1" />

                        </a>
                    </div>

                    {/* GitHub Card */}
                    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col items-center justify-center border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                        <FaGithub className="w-16 h-16 text-gray-900 dark:text-white mb-4" />
                        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                            View more on GitHub
                        </h3>
                        <a href="https://github.com/amoghbharadwaj21" title="Visit GitHub"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-700 rounded-xl hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4"
                            role="button">
                            Visit GitHub
                            <FaArrowRight className="w-4 h-4 ml-2 -mr-1" />

                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;
