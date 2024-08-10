import React from 'react';
import Amogh from '../Images/Amogh.jpeg';

function About() {
    return (
        <section id="about" className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:col-span-2 text-center lg:text-left">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Hi, I’m Amogh!
                    </h2>
                    <p className="mb-4 text-justify lg:text-left">
                        A highly motivated student with a strong passion for technology and innovation, currently pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning at RNS Institute of Technology, Bengaluru.
                    </p>
                    <p className="mb-4 text-justify lg:text-left">
                        My academic journey, coupled with hands-on experience in various projects and internships, has equipped me with the skills and knowledge to tackle real-world challenges and drive impactful change.
                    </p>
                    <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
                        <p>"Driven by Dedication, Defined by Results"</p>
                    </blockquote>
                </div>
                <div className="flex justify-center mt-8 lg:mt-0">
                    <img
                        className="w-3/4 lg:w-[80%] rounded-lg"
                        src={Amogh}
                        alt="Amogh"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
