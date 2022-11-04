import React from 'react';

import dayjs from 'dayjs';

import { ProjectType } from '@/types/struct'

type Props = {
  projectData:ProjectType
}


const ProjectMainCard = ({projectData}:Props) => {
  return (
    <div className="flex justify-center">
      <div className="w-[800px] h-[500px] my-12">
        <div className="w-full h-full rounded-xl bg-gradient-to-r from-cherGreen to-cherBlue p-[3px]">
          <div className="w-full h-full bg-secondary rounded-xl p-4">
            <div> </div>
            <div className="flex">
              <div className="mr-2">Project Address:</div>
              <div>{projectData.projectAddress}</div>
            </div>
            <div className="flex">
              <div>Project Owner:</div>
              <div>{projectData.projectOwnerAddress}</div>
            </div>
            <div>Belong Dao: {projectData.belongDaoAddress}</div>
            <div>Project Name: {projectData.projectName}</div>
            <div>Project Contents: {projectData.projectContents}</div>
            <div>Project Reword: {projectData.projectReword}</div>
            <div>Created At: {dayjs(projectData.timestamp.toString()).format('YYYY/M/D/H:m:s')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMainCard;
