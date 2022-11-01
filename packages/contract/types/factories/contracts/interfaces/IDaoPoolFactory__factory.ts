/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDaoPoolFactory,
  IDaoPoolFactoryInterface,
} from "../../../contracts/interfaces/IDaoPoolFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_daoName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_daoProfile",
        type: "string",
      },
      {
        internalType: "string",
        name: "_daoIcon",
        type: "string",
      },
    ],
    name: "newDaoPoolFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDaoPoolFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IDaoPoolFactoryInterface {
    return new utils.Interface(_abi) as IDaoPoolFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDaoPoolFactory {
    return new Contract(address, _abi, signerOrProvider) as IDaoPoolFactory;
  }
}
