import React from 'react';

const CertificationCard = ({
  certificationName,
  platform,
  picture,
  certificationLink,
}) => (
  <div className=''>
    <div className='flex flex-col md:flex-row rounded-sm bg-white shadow-xl'>
      <img
        className=' w-full md:h-auto object-cover md:w-48 rounded-sm'
        src={picture}
        alt='Certification platform'
      />
      <div className='p-6 flex flex-col justify-between'>
        <div>
          <h5 className='text-gray-900 text-2xl md:text-3xl font-bold mb-2'>
            {certificationName}
          </h5>
          <p className='text-gray-800 text-base md:text-lg font-normal mb-4'>
            {platform}
          </p>
        </div>
        <div className='text-center md:text-left'>
          <a
            href={certificationLink}
            target='_blank'
            rel='noopener noreferrer'
            className=' hover:underline hover:decoration-gray-2'
          >
            <span className='text-gray-2 text-base md:text-lg font-normal'>
              View credential
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CertificationCard;
