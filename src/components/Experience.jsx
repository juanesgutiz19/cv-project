import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <section className="bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
              Experience
            </h1>
          </div>
          <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
            <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">               
                  <ExperienceCard
                    key={1}
                    title="Juan"
                    desc="Hola"
                    year={2016}
                    company="Expe"
                    companyLink="expe.com"
                  />
            </div>
          </div>
        </section>
      );
}

export default Experience;
