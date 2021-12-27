import React from 'react';

const ProjectCard = ( { picture, projectName, technologies, projectLink} ) => {
    return (
        <div className="overflow-hidden shadow-2xl bg-white m-4">
            <img className="w-full border-2 border-gray-200" src={ picture }  alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ projectName }</div>
                <p className="text-gray-700 text-base">{ technologies }</p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
                <a href={ projectLink } target="_blank" rel="noopener noreferrer" className=" hover:underline"><span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View project</span></a>
            </div>
        </div>
    )
}

export default ProjectCard;