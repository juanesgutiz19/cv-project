import React from 'react'
import SkillProgressBar from './SkillProgressBar';

const Skills = () => {
    return (
        <>
            <SkillProgressBar skillName = "MongoDB" progressPercentage = { 60 }/>
            <SkillProgressBar skillName = "MySQL" progressPercentage = { 50 }/>
            <SkillProgressBar skillName = "Node.js" progressPercentage = { 70 }/>
            <SkillProgressBar skillName = "React.js" progressPercentage = { 55 }/>
            <SkillProgressBar skillName = "English" progressPercentage = {70 }/>
        </>
    )
}

export default Skills;