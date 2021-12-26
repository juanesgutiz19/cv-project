import React from 'react'

const SkillProgressBar = ( { skillName, progressPercentage } ) => {
    return (
        <>
            <div class="pt-1">
                <div class="flex mb-2 items-center justify-between">
                    <div>
                        <span class="text-base font-normal inline-block py-1 px-4 rounded-full text-orange-800 bg-orange-300">
                        { skillName } </span>
                    </div>
                    <div class="text-right">
                        <span class="text-base font-medium inline-block text-orange-600"> { progressPercentage }% </span>
                    </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                    <div style= {{width: `${progressPercentage}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                </div>
            </div>
        </>
    )
}

export default SkillProgressBar;