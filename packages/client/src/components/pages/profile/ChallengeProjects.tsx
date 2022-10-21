import React from 'react'
import { ProjectCard } from '@/components/shared'
import { projectsData } from '@/data'

const ChallengeProjects = () => {
  return (
    <div className='p-12'>
      <div className='text-4xl mb-12'>Challenge Projects</div>
      <div className='flex'>
      {projectsData.map((project,i)=>(
        <ProjectCard key={i} belongDao={project.belongDao} projectName={project.projectName} projectContent={project.projectContent} reword={project.reword} />
      ))}
      </div>
    </div>
  )
}

export default ChallengeProjects
