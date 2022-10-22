import Link from 'next/link';
import React from 'react';

type Props = {
  belongDao: string;
  projectName: string;
  projectContent: string;
  reword: string;
  totalCher: number;
};

const ProjectCard = ({ belongDao, projectName, projectContent, reword, totalCher }: Props) => {
  return (
    <>
      <Link href="#">
        <div className="w-80 p-4 mx-4 rounded-lg border-2 border-white bg-secondary cursor-pointer">
          <div className="flex items-center text-xs mb-2">
            <div className="p-1 bg-cherBlue rounded-lg">{belongDao}</div>
          </div>
          <div className="text-cherGreen mb-2 text-sm">{projectName}</div>
          <div className="text-xs mb-2 h-20">{projectContent}</div>
          <div className="flex items-start h-8 text-cherRed">
            <div className="text-xs  mr-1">reword:</div>
            <div className="text-xs">{reword}</div>
          </div>
          <div className="flex items-center">
            <div className="text-lg">💰</div>
            <div className='flex items-end'>
            <div className='text-lg'>{totalCher.toLocaleString()}</div>
            <div className='text-lg ml-1'>cher</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
