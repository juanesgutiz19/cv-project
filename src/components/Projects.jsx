import React from 'react';
import ProjectCard from './ProjectCard';
import EnrollmentPicture from '../assets/MatriculasBack.jpg';
import SeguraPicture from '../assets/AforoCovid.jpg';
import OldWavePicture from '../assets/OldWave.png';
import NamesPicture from '../assets/NamesGenerator.jpg';


const Projects = () => {
    return (
        <>
            <ProjectCard picture={ EnrollmentPicture } projectName='Enrollment Backend' technologies='Node.js, MongoDB' projectLink='https://github.com/juanesgutiz19/backend-server-matriculas'/>
            <ProjectCard picture={ SeguraPicture } projectName='UdeA Segura Backend' technologies='Node.js, MongoDB' projectLink='https://documenter.getpostman.com/view/13549292/UUy1fSVi#e63954e4-3f87-48be-8f40-8346535f4aa7'/>
            <ProjectCard picture={ OldWavePicture } projectName='Old Wave' technologies='React Native (I was part of the project)' projectLink='https://github.com/juanesgutiz19/old-wave-RN'/>
            <ProjectCard picture={ NamesPicture } projectName='Names Generator' technologies='HTML, CSS, Javascript' projectLink='https://github.com/juanesgutiz19/Fetch-API---Names-generator'/>
        </>
    )
}

export default Projects;