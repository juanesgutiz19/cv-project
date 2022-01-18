import React from 'react';
import AcademicCard from 'components/AcademicCard';

const Academic = () => (
  <div id='academic'>
    <h1 className='text-gray-900 text-4xl md:text-5xl lg:text-7xl font-bold mt-10 text-center md:text-left md:mx-6 lg:mx-8'>
      Academic
    </h1>
    <div className='flex flex-col lg:flex-row px-10 md:px-24'>
      <AcademicCard
        qualification='High School Graduate'
        institution='Liceo Salazar y Herrera'
        period={2016}
      />
      <AcademicCard
        qualification='Systems Engineering'
        institution='University of Antioquia'
      />
    </div>
  </div>
);

export default Academic;
