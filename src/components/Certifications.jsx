import React from 'react';
import CertificationCard from 'components/CertificationCard';
import UdemyPicture from 'assets/udemy-logo.jpg';
import PlatziPicture from 'assets/platzi-logo.jpg';

const Certifications = () => (
  <div id='certifications'>
    <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 text-center md:text-left md:mx-6 lg:mx-8 mt-10 md:mt-12 mb-10 md:mb-12'>
      Certifications
    </h1>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 m-8'>
      <CertificationCard
        certificationName='Node: De cero a experto'
        platform='Udemy'
        picture={UdemyPicture}
        certificationLink='https://udemy-certificate.s3.amazonaws.com/pdf/UC-68c90621-05a2-4d81-bbc6-2fb968f92264.pdf'
      />
      <CertificationCard
        certificationName='Curso de Docker'
        platform='Platzi'
        picture={PlatziPicture}
        certificationLink='https://platzi.com/p/juanesguti19/curso/2066-docker/diploma/detalle/'
      />
    </div>
  </div>
);

export default Certifications;
