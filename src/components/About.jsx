import React from 'react';
import Picture from 'assets/picture-juan.jpg';

const About = () => (
  <div id='about'>
    <div className='flex flex-col h-96 my-24 justify-center items-center'>
      <div>
        <img
          src={Picture}
          alt='juan pic'
          className='w-44 h-44 rounded-full object-cover drop-shadow-2xl'
        />
      </div>
      <div>
        <h2 className='text-3xl text-center font-bold text-gray-1 my-3'>
          Juan Gutiérrez
        </h2>
      </div>
      <div className='w-3/5 lg:w-5/12'>
        <p className='text-base text-center leading-6 font-normal text-gray-2'>
          I am a Systems Engineering student at UdeA, I am mainly interested in
          backend software development. I consider myself a team player and I
          have excellent leadership skills as well as good communication skills,
          both verbal and written
        </p>
      </div>
    </div>
  </div>
);

export default About;
