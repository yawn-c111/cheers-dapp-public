import React, { useCallback, useEffect, useState } from 'react';

import { CheerCard } from '@/components/shared/card';
// import { cheersData } from '@/data';
import { useProjectsDataContract } from '@/hooks/contracts/data';
import { ProjectType } from '@/types/struct';
import Nodata from './Nodata';
import { useProjectPoolContract } from '../../../hooks/contracts/useProjectPoolContract';
import { usePoolListDataContract } from '../../../hooks/contracts/data/usePoolListDataContract';

type Props = {
  ownerAddress: string;
};

const CheerProjects = ({ ownerAddress }: Props) => {
  const { allProjectList } = useProjectsDataContract({});

  const [myCheerProjectList, setMyCheerProjectList] = useState<ProjectType[]>();

  const getMyCheerProject = useCallback(async () => {
    if (!allProjectList) return;
    const projects: ProjectType[] = [];
    allProjectList.map((project) => {
      const projectPoolAddress = project.projectAddress
      const {allCheers} = useProjectPoolContract({projectPoolAddress})
      const {myPoolAddress} = usePoolListDataContract({ownerAddress})
      if(!allCheers) return;
      allCheers.map((cheer)=>{
        if(cheer.cheerPoolAddress == myPoolAddress) {
          projects.push(project)
        }
      })
    });
    setMyCheerProjectList(projects);
  }, [allProjectList]);

  useEffect(() => {
    getMyCheerProject();
  }, [getMyCheerProject]);

  return (
    <div className="p-12">
      <div className="text-4xl mb-12">Cheer Projects</div>
      <div className="flex flex-wrap">
        {myCheerProjectList ? (
          myCheerProjectList.map((project, i) => 
            
          (
            <CheerCard
              key={i}
              challengerName={project.}
              challengerIcon={project.challengerIcon}
              belongDao={project.belongDaoAddress}
              projectName={project.projectName}
              comment={project.}
              throwCher={project.throwCher}
            />
          ))
        ) : (
          <Nodata />
        )}
      </div>
    </div>
  );
};

export default CheerProjects;
