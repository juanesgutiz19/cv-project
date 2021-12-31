import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
      <div id="experience">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 text-center md:text-left md:mx-6 lg:mx-8 mt-10 md:mb-5">Experience</h1>
        <div className="max-w-xl md:max-w-2xl mx-auto px-10 pb-10 pt-5 md:p-1">             
          <ExperienceCard
                    title="Software Developer"
                    description="I belong to the VText integration area where I have to attend to the requirements of the clients."
                    year={ 2021 }
                    company="Experimentality"
                    companyLink="https://www.experimentality.co/"
          />
          <ExperienceCard
                    title="Programming Assistant"
                    description="I was in charge of supporting the AVIDO server applications of the University of Antioquia."
                    year={ 2020 }
                    company="UdeA"
                    companyLink="https://www.udea.edu.co/"
          />
        </div>
      </div>  
      );
}

export default Experience;
