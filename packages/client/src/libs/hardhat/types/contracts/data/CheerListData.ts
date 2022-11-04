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
} from "../../common";

export declare namespace SharedStruct {
  export type CheerStruct = {
    projectAddress: PromiseOrValue<string>;
    cheerPoolAddress: PromiseOrValue<string>;
    creationTime: PromiseOrValue<BigNumberish>;
    message: PromiseOrValue<string>;
    cher: PromiseOrValue<BigNumberish>;
  };

  export type CheerStructOutput = [
    string,
    string,
    BigNumber,
    string,
    BigNumber
  ] & {
    projectAddress: string;
    cheerPoolAddress: string;
    creationTime: BigNumber;
    message: string;
    cher: BigNumber;
  };
}

export interface CheerListDataInterface extends utils.Interface {
  functions: {
    "addCheerDataList(address,address,uint256,string,uint256)": FunctionFragment;
    "getMyPoolCheeerDataList(address)": FunctionFragment;
    "getMyProjectCheerList(address)": FunctionFragment;
    "myPoolCheerDataList(address,uint256)": FunctionFragment;
    "myProjectCheerList(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addCheerDataList"
      | "getMyPoolCheeerDataList"
      | "getMyProjectCheerList"
      | "myPoolCheerDataList"
      | "myProjectCheerList"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addCheerDataList",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMyPoolCheeerDataList",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMyProjectCheerList",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "myPoolCheerDataList",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "myProjectCheerList",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCheerDataList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMyPoolCheeerDataList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMyProjectCheerList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "myPoolCheerDataList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "myProjectCheerList",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CheerListData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CheerListDataInterface;

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
    addCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getMyPoolCheeerDataList(
      _cheerPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[SharedStruct.CheerStructOutput[]]>;

    getMyProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[SharedStruct.CheerStructOutput[]]>;

    myPoolCheerDataList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        projectAddress: string;
        cheerPoolAddress: string;
        creationTime: BigNumber;
        message: string;
        cher: BigNumber;
      }
    >;

    myProjectCheerList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        projectAddress: string;
        cheerPoolAddress: string;
        creationTime: BigNumber;
        message: string;
        cher: BigNumber;
      }
    >;
  };

  addCheerDataList(
    _projectPoolAddress: PromiseOrValue<string>,
    _cheerPoolAddres: PromiseOrValue<string>,
    _creationTime: PromiseOrValue<BigNumberish>,
    _message: PromiseOrValue<string>,
    _cher: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getMyPoolCheeerDataList(
    _cheerPoolAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<SharedStruct.CheerStructOutput[]>;

  getMyProjectCheerList(
    _projectPoolAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<SharedStruct.CheerStructOutput[]>;

  myPoolCheerDataList(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, string, BigNumber] & {
      projectAddress: string;
      cheerPoolAddress: string;
      creationTime: BigNumber;
      message: string;
      cher: BigNumber;
    }
  >;

  myProjectCheerList(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, string, BigNumber] & {
      projectAddress: string;
      cheerPoolAddress: string;
      creationTime: BigNumber;
      message: string;
      cher: BigNumber;
    }
  >;

  callStatic: {
    addCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getMyPoolCheeerDataList(
      _cheerPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<SharedStruct.CheerStructOutput[]>;

    getMyProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<SharedStruct.CheerStructOutput[]>;

    myPoolCheerDataList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        projectAddress: string;
        cheerPoolAddress: string;
        creationTime: BigNumber;
        message: string;
        cher: BigNumber;
      }
    >;

    myProjectCheerList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        projectAddress: string;
        cheerPoolAddress: string;
        creationTime: BigNumber;
        message: string;
        cher: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    addCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getMyPoolCheeerDataList(
      _cheerPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMyProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    myPoolCheerDataList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    myProjectCheerList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getMyPoolCheeerDataList(
      _cheerPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMyProjectCheerList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    myPoolCheerDataList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    myProjectCheerList(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}