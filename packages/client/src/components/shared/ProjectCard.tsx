import React from 'react';

type Props = {
  belongDao:string;
  projectName:string;
  projectContent:string;
  reword:string;
}

const ProjectCard = ({belongDao,projectName,projectContent,reword}:Props) => {
  return (
    <div className='w-80 p-2 mx-4'>
      <div>{belongDao}</div>
      <div>{projectName}</div>
      <div>{projectContent}</div>
      <div>{reword}</div>
    </div>
  );
};

export default ProjectCard;
