/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Cheers, CheersInterface } from "../../contracts/Cheers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "daoPoolFactory",
    outputs: [
      {
        internalType: "contract IDaoPoolFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_userName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_userProfile",
        type: "string",
      },
      {
        internalType: "string",
        name: "_userIcon",
        type: "string",
      },
    ],
    name: "newUserPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "daoPoolFactoryAddress",
        type: "address",
      },
    ],
    name: "setDaoPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userPoolFactoryAddress",
        type: "address",
      },
    ],
    name: "setUserPoolFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "userPoolFactory",
    outputs: [
      {
        internalType: "contract IUserPoolFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061083d806100e46000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806321991798146100675780636de25e2214610083578063ba280f261461009f578063c0dbf8e3146100bb578063c8edbf8d146100d7578063f73ee1ef146100f5575b600080fd5b610081600480360381019061007c9190610512565b610113565b005b61009d60048036038101906100989190610617565b6101bb565b005b6100b960048036038101906100b49190610512565b61023f565b005b6100d560048036038101906100d09190610617565b6102e7565b005b6100df61036c565b6040516100ec91906106a3565b60405180910390f35b6100fd610392565b60405161010a91906106df565b60405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663219917988484846040518463ffffffff1660e01b815260040161017293929190610779565b6020604051808303816000875af1158015610191573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b591906107da565b50505050565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba280f268484846040518463ffffffff1660e01b815260040161029e93929190610779565b6020604051808303816000875af11580156102bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e191906107da565b50505050565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61041f826103d6565b810181811067ffffffffffffffff8211171561043e5761043d6103e7565b5b80604052505050565b60006104516103b8565b905061045d8282610416565b919050565b600067ffffffffffffffff82111561047d5761047c6103e7565b5b610486826103d6565b9050602081019050919050565b82818337600083830152505050565b60006104b56104b084610462565b610447565b9050828152602081018484840111156104d1576104d06103d1565b5b6104dc848285610493565b509392505050565b600082601f8301126104f9576104f86103cc565b5b81356105098482602086016104a2565b91505092915050565b60008060006060848603121561052b5761052a6103c2565b5b600084013567ffffffffffffffff811115610549576105486103c7565b5b610555868287016104e4565b935050602084013567ffffffffffffffff811115610576576105756103c7565b5b610582868287016104e4565b925050604084013567ffffffffffffffff8111156105a3576105a26103c7565b5b6105af868287016104e4565b9150509250925092565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105e4826105b9565b9050919050565b6105f4816105d9565b81146105ff57600080fd5b50565b600081359050610611816105eb565b92915050565b60006020828403121561062d5761062c6103c2565b5b600061063b84828501610602565b91505092915050565b6000819050919050565b600061066961066461065f846105b9565b610644565b6105b9565b9050919050565b600061067b8261064e565b9050919050565b600061068d82610670565b9050919050565b61069d81610682565b82525050565b60006020820190506106b86000830184610694565b92915050565b60006106c982610670565b9050919050565b6106d9816106be565b82525050565b60006020820190506106f460008301846106d0565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610734578082015181840152602081019050610719565b60008484015250505050565b600061074b826106fa565b6107558185610705565b9350610765818560208601610716565b61076e816103d6565b840191505092915050565b600060608201905081810360008301526107938186610740565b905081810360208301526107a78185610740565b905081810360408301526107bb8184610740565b9050949350505050565b6000815190506107d4816105eb565b92915050565b6000602082840312156107f0576107ef6103c2565b5b60006107fe848285016107c5565b9150509291505056fea2646970667358221220a023731af0bf2f38c02e73720a513a686502d04e506218365a2d526ff388d42d64736f6c63430008110033";

type CheersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CheersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Cheers__factory extends ContractFactory {
  constructor(...args: CheersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Cheers> {
    return super.deploy(overrides || {}) as Promise<Cheers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Cheers {
    return super.attach(address) as Cheers;
  }
  override connect(signer: Signer): Cheers__factory {
    return super.connect(signer) as Cheers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CheersInterface {
    return new utils.Interface(_abi) as CheersInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Cheers {
    return new Contract(address, _abi, signerOrProvider) as Cheers;
  }
}
