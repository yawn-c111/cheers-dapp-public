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
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../common';

export declare namespace SharedStruct {
  export type CheerStruct = {
    projectAddress: PromiseOrValue<string>;
    cheerPoolAddress: PromiseOrValue<string>;
    creationTime: PromiseOrValue<BigNumberish>;
    message: PromiseOrValue<string>;
    cher: PromiseOrValue<BigNumberish>;
  };

  export type CheerStructOutput = [string, string, BigNumber, string, BigNumber] & {
    projectAddress: string;
    cheerPoolAddress: string;
    creationTime: BigNumber;
    message: string;
    cher: BigNumber;
  };
}

export interface ICheerListDataInterface extends utils.Interface {
  functions: {
    'addCheerDataList(address,address,uint256,string,uint256)': FunctionFragment;
    'getMyPoolCheerDataList(address)': FunctionFragment;
    'getMyProjectCheerDataList(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'addCheerDataList' | 'getMyPoolCheerDataList' | 'getMyProjectCheerDataList',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addCheerDataList',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'getMyPoolCheerDataList', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getMyProjectCheerDataList', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'addCheerDataList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMyPoolCheerDataList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMyProjectCheerDataList', data: BytesLike): Result;

  events: {};
}

export interface ICheerListData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICheerListDataInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
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
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getMyPoolCheerDataList(
      _cheerPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[SharedStruct.CheerStructOutput[]]>;

    getMyProjectCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[SharedStruct.CheerStructOutput[]]>;
  };

  addCheerDataList(
    _projectPoolAddress: PromiseOrValue<string>,
    _cheerPoolAddres: PromiseOrValue<string>,
    _creationTime: PromiseOrValue<BigNumberish>,
    _message: PromiseOrValue<string>,
    _cher: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getMyPoolCheerDataList(
    _cheerPoolAddress: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<SharedStruct.CheerStructOutput[]>;

  getMyProjectCheerDataList(
    _projectPoolAddress: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<SharedStruct.CheerStructOutput[]>;

  callStatic: {
    addCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    getMyPoolCheerDataList(
      _cheerPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<SharedStruct.CheerStructOutput[]>;

    getMyProjectCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<SharedStruct.CheerStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    addCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getMyPoolCheerDataList(_cheerPoolAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getMyProjectCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      _cheerPoolAddres: PromiseOrValue<string>,
      _creationTime: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      _cher: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getMyPoolCheerDataList(
      _cheerPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getMyProjectCheerDataList(
      _projectPoolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
