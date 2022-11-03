import React from 'react';

import { ProjectCard } from '@/components/shared/card';

// import { projectsData } from '@/mock';
import { useProjectsDataContract } from '../../../hooks/contracts/data/useProjectsDataContract';
import Nodata from './Nodata';

type Props = {
  projectOwnerAddress: string;
};

const ChallengeProjects = ({ projectOwnerAddress }: Props) => {
  const { eachProjectList } = useProjectsDataContract({ projectOwnerAddress });
  return (
    <div className="p-12">
      <div className="text-4xl mb-12">Challenge Projects</div>
      <div className="flex flex-wrap">
        {eachProjectList ? eachProjectList.map((project, i) => <ProjectCard key={i} project={project} />) : <Nodata />}
      </div>
    </div>
  );
};

export default ChallengeProjects;
