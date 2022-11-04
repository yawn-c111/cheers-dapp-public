import React, { useCallback, useEffect, useState } from 'react';

import { CheerCard } from '@/components/shared/card';
// import { cheersData } from '@/data';
import { useProjectPoolContract } from '@/hooks/contracts';
import { useProjectsDataContract } from '@/hooks/contracts/data';
import { ProjectType } from '@/types/struct';

import Nodata from './Nodata';
import { usePoolListDataContract } from '../../../hooks/contracts/data/usePoolListDataContract';

type Props = {
  ownerAddress: string;
};

const CheerProjects = ({ ownerAddress }: Props) => {
  const [projectOwnerAddressList,setProjectOwnerAddressList] = useState<string[]>([])

  const { allProjectList } = useProjectsDataContract({});
  const getProjectOwnerAddressList = useCallback((allProjectList: ProjectType[]) => {
    const projectOwnerAddressList:string[] = [];
    allProjectList.map((project) => {
      projectOwnerAddressList.push(project.projectOwnerAddress);
    });
    setProjectOwnerAddressList(projectOwnerAddressList)
  }, []);

  useEffect(() => {
    getProjectOwnerAddressList(allProjectList);
  }, [allProjectList, getProjectOwnerAddressList]);

  return (
    <div className="p-12">
      <div className="text-4xl mb-12">Cheer Projects</div>
      <div className="flex flex-wrap">
         {}
      </div>
    </div>
  );
};

export default CheerProjects;
