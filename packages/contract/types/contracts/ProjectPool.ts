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
  export type CheerStruct = {
    cheerPoolAddress: PromiseOrValue<string>;
    timestamp: PromiseOrValue<BigNumberish>;
    message: PromiseOrValue<string>;
    cher: PromiseOrValue<BigNumberish>;
  };

  export type CheerStructOutput = [string, BigNumber, string, BigNumber] & {
    cheerPoolAddress: string;
    timestamp: BigNumber;
    message: string;
    cher: BigNumber;
  };
}

export interface ProjectPoolInterface extends utils.Interface {
  functions: {
    "cheersDapp()": FunctionFragment;
    "cher()": FunctionFragment;
    "getAllCheers()": FunctionFragment;
    "getTotalCher()": FunctionFragment;
    "mintCheer(uint256,string)": FunctionFragment;
    "poolListData()": FunctionFragment;
    "projectContents()": FunctionFragment;
    "projectName()": FunctionFragment;
    "projectReword()": FunctionFragment;
    "setCHER(address)": FunctionFragment;
    "setPoolListData(address)": FunctionFragment;
    "totalCher()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cheersDapp"
      | "cher"
      | "getAllCheers"
      | "getTotalCher"
      | "mintCheer"
      | "poolListData"
      | "projectContents"
      | "projectName"
      | "projectReword"
      | "setCHER"
      | "setPoolListData"
      | "totalCher"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cheersDapp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cher", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllCheers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalCher",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintCheer",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "poolListData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "projectContents",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "projectName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "projectReword",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCHER",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolListData",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "totalCher", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cheersDapp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cher", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllCheers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalCher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintCheer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolListData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectContents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectReword",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCHER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPoolListData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalCher", data: BytesLike): Result;

  events: {};
}

export interface ProjectPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProjectPoolInterface;

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
    cheersDapp(overrides?: CallOverrides): Promise<[string]>;

    cher(overrides?: CallOverrides): Promise<[string]>;

    getAllCheers(
      overrides?: CallOverrides
    ): Promise<[SharedStruct.CheerStructOutput[]]>;

    getTotalCher(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintCheer(
      _cher: PromiseOrValue<BigNumberish>,
      _cheerMessage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    poolListData(overrides?: CallOverrides): Promise<[string]>;

    projectContents(overrides?: CallOverrides): Promise<[string]>;

    projectName(overrides?: CallOverrides): Promise<[string]>;

    projectReword(overrides?: CallOverrides): Promise<[string]>;

    setCHER(
      CHERAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPoolListData(
      poolListDataAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalCher(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  cheersDapp(overrides?: CallOverrides): Promise<string>;

  cher(overrides?: CallOverrides): Promise<string>;

  getAllCheers(
    overrides?: CallOverrides
  ): Promise<SharedStruct.CheerStructOutput[]>;

  getTotalCher(overrides?: CallOverrides): Promise<BigNumber>;

  mintCheer(
    _cher: PromiseOrValue<BigNumberish>,
    _cheerMessage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  poolListData(overrides?: CallOverrides): Promise<string>;

  projectContents(overrides?: CallOverrides): Promise<string>;

  projectName(overrides?: CallOverrides): Promise<string>;

  projectReword(overrides?: CallOverrides): Promise<string>;

  setCHER(
    CHERAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPoolListData(
    poolListDataAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalCher(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cheersDapp(overrides?: CallOverrides): Promise<string>;

    cher(overrides?: CallOverrides): Promise<string>;

    getAllCheers(
      overrides?: CallOverrides
    ): Promise<SharedStruct.CheerStructOutput[]>;

    getTotalCher(overrides?: CallOverrides): Promise<BigNumber>;

    mintCheer(
      _cher: PromiseOrValue<BigNumberish>,
      _cheerMessage: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    poolListData(overrides?: CallOverrides): Promise<string>;

    projectContents(overrides?: CallOverrides): Promise<string>;

    projectName(overrides?: CallOverrides): Promise<string>;

    projectReword(overrides?: CallOverrides): Promise<string>;

    setCHER(
      CHERAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolListData(
      poolListDataAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalCher(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    cheersDapp(overrides?: CallOverrides): Promise<BigNumber>;

    cher(overrides?: CallOverrides): Promise<BigNumber>;

    getAllCheers(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalCher(overrides?: CallOverrides): Promise<BigNumber>;

    mintCheer(
      _cher: PromiseOrValue<BigNumberish>,
      _cheerMessage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    poolListData(overrides?: CallOverrides): Promise<BigNumber>;

    projectContents(overrides?: CallOverrides): Promise<BigNumber>;

    projectName(overrides?: CallOverrides): Promise<BigNumber>;

    projectReword(overrides?: CallOverrides): Promise<BigNumber>;

    setCHER(
      CHERAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPoolListData(
      poolListDataAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalCher(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cheersDapp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllCheers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalCher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintCheer(
      _cher: PromiseOrValue<BigNumberish>,
      _cheerMessage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    poolListData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projectContents(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projectName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projectReword(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCHER(
      CHERAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPoolListData(
      poolListDataAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalCher(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
