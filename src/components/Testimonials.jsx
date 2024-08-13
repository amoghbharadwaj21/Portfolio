import React from 'react';
import Raghuveer from '../Images/Raghuveer.jpeg';
import Sudhir from '../Images/Sudhir.jpeg';

function Testimonials() {
    return (
        <section id="testimonials" className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
                </div>
                <div className="flex flex-col space-y-8 mt-8 sm:space-y-0 sm:space-x-8 sm:flex-row justify-center">
                    {/* Raghuveer Bhat's Testimonial */}
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-2 border-transparent rounded-lg md:p-12 dark:bg-gray-800 dark:border-gray-700 max-w-lg hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400 text-justify">
                            <p className="my-4">"I enjoyed having Amogh on our team as a Software Development Engineer Intern for one month. Although our paths did not directly cross during this time, I observed his contributions and impact on our projects from a strategic standpoint.</p>
                            <p className="my-4">Amogh demonstrated commendable dedication and enthusiasm in his role, showcasing a solid commitment to his responsibilities. His technical skills and problem-solving abilities were evident in the quality of work he delivered, even within the relatively short duration of his internship.</p>
                            <p className="my-4">I highly recommend Amogh to any organization seeking a dedicated and capable software development professional."</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-16 h-16 rounded-full" src={Raghuveer} alt="raghuveer bhat" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Raghuveer Bhat</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400 italic">Director, DeepByte Technology</div>
                            </div>
                        </figcaption>
                    </figure>

                    {/* Sudhir S R's Testimonial */}
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-2 border-transparent rounded-lg md:p-12 dark:bg-gray-800 dark:border-gray-700 max-w-lg hover:border-blue-500 dark:hover:border-blue-300 transition-colors">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400 text-justify">
                            <p className="my-4">"Amogh is a thorough Software Developer and is able to meet the deadlines. He was able to develop the required website and the application within the shortest time. It really helped us showcase the website before we went for promotion on social media.</p>
                            <p className="my-4">I strongly recommend him, and for sure he will be an asset to any company hiring him.</p>
                            <p className="my-4">I look forward to working with him in the days to come."</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-16 h-16 rounded-full" src={Sudhir} alt="sudhir s r" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Sudhir S R</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400 italic">Director - Operations, GTD Technologies</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
