import React from 'react';

import Link from 'next/link';

import { ProjectType } from '@/types/struct';

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <>
      <Link href="#">
        <div className="w-80 p-4 mx-4 my-4 rounded-lg bg-secondary cursor-pointer">
          <div className="flex items-center text-xs mb-2">
            <div className="p-1 bg-cherBlue rounded-lg">{project.belongDaoAddress}</div>
          </div>
          <div className="text-cherGreen mb-2 text-sm">{project.projectName}</div>
          <div className="text-xs mb-2 h-20">{project.projectContents}</div>
          <div className="flex items-start h-8 text-cherYellow">
            <div className="text-xs  mr-1">reword:</div>
            <div className="text-xs">{project.projectReword}</div>
          </div>
          <div className="flex items-center text-lg">
            <div>💰</div>
            <div className="flex items-end">
              <div className="translate-y-0.5">{1000}</div>
              <div className="ml-1 text-sm">CHER</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
