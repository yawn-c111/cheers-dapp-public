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
  export type UserStruct = {
    userAddress: PromiseOrValue<string>;
    userName: PromiseOrValue<string>;
    userProfile: PromiseOrValue<string>;
    userIcon: PromiseOrValue<string>;
    creationTime: PromiseOrValue<BigNumberish>;
  };

  export type UserStructOutput = [string, string, string, string, BigNumber] & {
    userAddress: string;
    userName: string;
    userProfile: string;
    userIcon: string;
    creationTime: BigNumber;
  };
}

export interface UsersDataInterface extends utils.Interface {
  functions: {
    'addUsers(address,string,string,string)': FunctionFragment;
    'getAllUserList()': FunctionFragment;
    'users(uint256)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'addUsers' | 'getAllUserList' | 'users'): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addUsers',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'getAllUserList', values?: undefined): string;
  encodeFunctionData(functionFragment: 'users', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'addUsers', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAllUserList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'users', data: BytesLike): Result;

  events: {};
}

export interface UsersData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UsersDataInterface;

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
    addUsers(
      _userAddress: PromiseOrValue<string>,
      _userName: PromiseOrValue<string>,
      _userProfile: PromiseOrValue<string>,
      _userIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getAllUserList(overrides?: CallOverrides): Promise<[SharedStruct.UserStructOutput[]]>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, string, BigNumber] & {
        userAddress: string;
        userName: string;
        userProfile: string;
        userIcon: string;
        creationTime: BigNumber;
      }
    >;
  };

  addUsers(
    _userAddress: PromiseOrValue<string>,
    _userName: PromiseOrValue<string>,
    _userProfile: PromiseOrValue<string>,
    _userIcon: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getAllUserList(overrides?: CallOverrides): Promise<SharedStruct.UserStructOutput[]>;

  users(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, string, string, BigNumber] & {
      userAddress: string;
      userName: string;
      userProfile: string;
      userIcon: string;
      creationTime: BigNumber;
    }
  >;

  callStatic: {
    addUsers(
      _userAddress: PromiseOrValue<string>,
      _userName: PromiseOrValue<string>,
      _userProfile: PromiseOrValue<string>,
      _userIcon: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    getAllUserList(overrides?: CallOverrides): Promise<SharedStruct.UserStructOutput[]>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, string, BigNumber] & {
        userAddress: string;
        userName: string;
        userProfile: string;
        userIcon: string;
        creationTime: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    addUsers(
      _userAddress: PromiseOrValue<string>,
      _userName: PromiseOrValue<string>,
      _userProfile: PromiseOrValue<string>,
      _userIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getAllUserList(overrides?: CallOverrides): Promise<BigNumber>;

    users(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addUsers(
      _userAddress: PromiseOrValue<string>,
      _userName: PromiseOrValue<string>,
      _userProfile: PromiseOrValue<string>,
      _userIcon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getAllUserList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    users(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
