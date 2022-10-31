/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace SharedStruct {
  export type ProjectStruct = {
    belongDaoAddress: PromiseOrValue<string>;
    projectName: PromiseOrValue<string>;
    projectContents: PromiseOrValue<string>;
    projectReword: PromiseOrValue<string>;
  };

  export type ProjectStructOutput = [string, string, string, string] & {
    belongDaoAddress: string;
    projectName: string;
    projectContents: string;
    projectReword: string;
  };
}

export interface DaoPoolInterface extends utils.Interface {
  functions: {
    "addCheerProject(address)": FunctionFragment;
    "chargeCher(uint256)": FunctionFragment;
    "cheersDapp()": FunctionFragment;
    "cher()": FunctionFragment;
    "daoAddress()": FunctionFragment;
    "daoIcon()": FunctionFragment;
    "daoName()": FunctionFragment;
    "daoProfile()": FunctionFragment;
    "getAllChallengeProjects()": FunctionFragment;
    "getDaoAddress()": FunctionFragment;
    "getDaoIcon()": FunctionFragment;
    "getDaoName()": FunctionFragment;
    "getDaoPoolAddress()": FunctionFragment;
    "getDaoProfile()": FunctionFragment;
    "newProjectFactory(string,string,string)": FunctionFragment;
    "projectsData()": FunctionFragment;
    "removeCheerProject(address)": FunctionFragment;
    "setCHER(address)": FunctionFragment;
    "setProjectsData(address)": FunctionFragment;
    "withdrawCher(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addCheerProject"
      | "chargeCher"
      | "cheersDapp"
      | "cher"
      | "daoAddress"
      | "daoIcon"
      | "daoName"
      | "daoProfile"
      | "getAllChallengeProjects"
      | "getDaoAddress"
      | "getDaoIcon"
      | "getDaoName"
      | "getDaoPoolAddress"
      | "getDaoProfile"
      | "newProjectFactory"
      | "projectsData"
      | "removeCheerProject"
      | "setCHER"
      | "setProjectsData"
      | "withdrawCher"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addCheerProject",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "chargeCher",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cheersDapp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cher", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "daoAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "daoIcon", values?: undefined): string;
  encodeFunctionData(functionFragment: "daoName", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "daoProfile",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllChallengeProjects",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDaoAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDaoIcon",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDaoName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDaoPoolAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDaoProfile",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newProjectFactory",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "projectsData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeCheerProject",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCHER",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProjectsData",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawCher",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCheerProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "chargeCher", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cheersDapp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cher", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daoAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daoIcon", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daoName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daoProfile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllChallengeProjects",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDaoAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDaoIcon", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDaoName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDaoPoolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDaoProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newProjectFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectsData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeCheerProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCHER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProjectsData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawCher",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DaoPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DaoPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    chargeCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cheersDapp(overrides?: CallOverrides): Promise<[string]>;

    cher(overrides?: CallOverrides): Promise<[string]>;

    daoAddress(overrides?: CallOverrides): Promise<[string]>;

    daoIcon(overrides?: CallOverrides): Promise<[string]>;

    daoName(overrides?: CallOverrides): Promise<[string]>;

    daoProfile(overrides?: CallOverrides): Promise<[string]>;

    getAllChallengeProjects(
      overrides?: CallOverrides
    ): Promise<[SharedStruct.ProjectStructOutput[]]>;

    getDaoAddress(overrides?: CallOverrides): Promise<[string]>;

    getDaoIcon(overrides?: CallOverrides): Promise<[string]>;

    getDaoName(overrides?: CallOverrides): Promise<[string]>;

    getDaoPoolAddress(overrides?: CallOverrides): Promise<[string]>;

    getDaoProfile(overrides?: CallOverrides): Promise<[string]>;

    newProjectFactory(
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    projectsData(overrides?: CallOverrides): Promise<[string]>;

    removeCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCHER(
      CHERAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProjectsData(
      projectsDataAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addCheerProject(
    _cheerProjectPoolAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  chargeCher(
    _cherAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cheersDapp(overrides?: CallOverrides): Promise<string>;

  cher(overrides?: CallOverrides): Promise<string>;

  daoAddress(overrides?: CallOverrides): Promise<string>;

  daoIcon(overrides?: CallOverrides): Promise<string>;

  daoName(overrides?: CallOverrides): Promise<string>;

  daoProfile(overrides?: CallOverrides): Promise<string>;

  getAllChallengeProjects(
    overrides?: CallOverrides
  ): Promise<SharedStruct.ProjectStructOutput[]>;

  getDaoAddress(overrides?: CallOverrides): Promise<string>;

  getDaoIcon(overrides?: CallOverrides): Promise<string>;

  getDaoName(overrides?: CallOverrides): Promise<string>;

  getDaoPoolAddress(overrides?: CallOverrides): Promise<string>;

  getDaoProfile(overrides?: CallOverrides): Promise<string>;

  newProjectFactory(
    _projectName: PromiseOrValue<string>,
    _projectContents: PromiseOrValue<string>,
    _projectReword: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  projectsData(overrides?: CallOverrides): Promise<string>;

  removeCheerProject(
    _cheerProjectPoolAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCHER(
    CHERAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProjectsData(
    projectsDataAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawCher(
    _cherAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    chargeCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    cheersDapp(overrides?: CallOverrides): Promise<string>;

    cher(overrides?: CallOverrides): Promise<string>;

    daoAddress(overrides?: CallOverrides): Promise<string>;

    daoIcon(overrides?: CallOverrides): Promise<string>;

    daoName(overrides?: CallOverrides): Promise<string>;

    daoProfile(overrides?: CallOverrides): Promise<string>;

    getAllChallengeProjects(
      overrides?: CallOverrides
    ): Promise<SharedStruct.ProjectStructOutput[]>;

    getDaoAddress(overrides?: CallOverrides): Promise<string>;

    getDaoIcon(overrides?: CallOverrides): Promise<string>;

    getDaoName(overrides?: CallOverrides): Promise<string>;

    getDaoPoolAddress(overrides?: CallOverrides): Promise<string>;

    getDaoProfile(overrides?: CallOverrides): Promise<string>;

    newProjectFactory(
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    projectsData(overrides?: CallOverrides): Promise<string>;

    removeCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setCHER(
      CHERAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProjectsData(
      projectsDataAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    chargeCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cheersDapp(overrides?: CallOverrides): Promise<BigNumber>;

    cher(overrides?: CallOverrides): Promise<BigNumber>;

    daoAddress(overrides?: CallOverrides): Promise<BigNumber>;

    daoIcon(overrides?: CallOverrides): Promise<BigNumber>;

    daoName(overrides?: CallOverrides): Promise<BigNumber>;

    daoProfile(overrides?: CallOverrides): Promise<BigNumber>;

    getAllChallengeProjects(overrides?: CallOverrides): Promise<BigNumber>;

    getDaoAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getDaoIcon(overrides?: CallOverrides): Promise<BigNumber>;

    getDaoName(overrides?: CallOverrides): Promise<BigNumber>;

    getDaoPoolAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getDaoProfile(overrides?: CallOverrides): Promise<BigNumber>;

    newProjectFactory(
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    projectsData(overrides?: CallOverrides): Promise<BigNumber>;

    removeCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCHER(
      CHERAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProjectsData(
      projectsDataAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    chargeCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cheersDapp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoIcon(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllChallengeProjects(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDaoAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDaoIcon(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDaoName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDaoPoolAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDaoProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newProjectFactory(
      _projectName: PromiseOrValue<string>,
      _projectContents: PromiseOrValue<string>,
      _projectReword: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    projectsData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeCheerProject(
      _cheerProjectPoolAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCHER(
      CHERAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProjectsData(
      projectsDataAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawCher(
      _cherAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
