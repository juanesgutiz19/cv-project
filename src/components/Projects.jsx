import React from 'react';
import ProjectCard from './ProjectCard';
import EnrollmentPicture from '../assets/MatriculasBack.jpg';
import SeguraPicture from '../assets/AforoCovid.jpg';
import OldWavePicture from '../assets/OldWave.png';
import NamesPicture from '../assets/NamesGenerator.jpg';

const Projects = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <ProjectCard picture={ EnrollmentPicture } projectName='Enrollment Backend' technologies='Node.js, MongoDB' projectLink='https://github.com/juanesgutiz19/backend-server-matriculas'/>
                <ProjectCard picture={ SeguraPicture } projectName='UdeA Segura Backend' technologies='Node.js, MongoDB' projectLink='https://documenter.getpostman.com/view/13549292/UUy1fSVi#e63954e4-3f87-48be-8f40-8346535f4aa7'/>
                <ProjectCard picture={ NamesPicture } projectName='Names Generator' technologies='HTML, CSS, Javascript' projectLink='https://github.com/juanesgutiz19/Fetch-API---Names-generator'/>
                <ProjectCard picture={ OldWavePicture } projectName='Old Wave' technologies='React Native (Expo CLI)' projectLink='https://github.com/juanesgutiz19/old-wave-RN'/>
            </div>
        </>
    )
}

export default Projects;