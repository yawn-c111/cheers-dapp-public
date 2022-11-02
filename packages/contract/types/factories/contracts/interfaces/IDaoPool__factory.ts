/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDaoPool,
  IDaoPoolInterface,
} from "../../../contracts/interfaces/IDaoPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "projectPoolAddress",
        type: "address",
      },
    ],
    name: "addCheerProject",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "projectPoolAddress",
        type: "address",
      },
    ],
    name: "removeCheerProject",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDaoPool__factory {
  static readonly abi = _abi;
  static createInterface(): IDaoPoolInterface {
    return new utils.Interface(_abi) as IDaoPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDaoPool {
    return new Contract(address, _abi, signerOrProvider) as IDaoPool;
  }
}