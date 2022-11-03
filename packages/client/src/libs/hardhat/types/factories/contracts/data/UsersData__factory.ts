/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UsersData,
  UsersDataInterface,
} from "../../../contracts/data/UsersData";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
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
    name: "addUsers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllUserList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "userName",
            type: "string",
          },
          {
            internalType: "string",
            name: "userProfile",
            type: "string",
          },
          {
            internalType: "string",
            name: "userIcon",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "creationTime",
            type: "uint256",
          },
        ],
        internalType: "struct SharedStruct.User[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "userName",
        type: "string",
      },
      {
        internalType: "string",
        name: "userProfile",
        type: "string",
      },
      {
        internalType: "string",
        name: "userIcon",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "creationTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ee9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632ce058f614610046578063365b98b2146100625780635849606d14610096575b600080fd5b610060600480360381019061005b91906107e2565b6100b4565b005b61007c600480360381019061007791906108d3565b6101b7565b60405161008d95949392919061099d565b60405180910390f35b61009e6103b5565b6040516100ab9190610bb3565b60405180910390f35b60006040518060a001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815260200142815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816101789190610de1565b50604082015181600201908161018e9190610de1565b5060608201518160030190816101a49190610de1565b5060808201518160040155505050505050565b600081815481106101c757600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461021090610c04565b80601f016020809104026020016040519081016040528092919081815260200182805461023c90610c04565b80156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b50505050509080600201805461029e90610c04565b80601f01602080910402602001604051908101604052809291908181526020018280546102ca90610c04565b80156103175780601f106102ec57610100808354040283529160200191610317565b820191906000526020600020905b8154815290600101906020018083116102fa57829003601f168201915b50505050509080600301805461032c90610c04565b80601f016020809104026020016040519081016040528092919081815260200182805461035890610c04565b80156103a55780601f1061037a576101008083540402835291602001916103a5565b820191906000526020600020905b81548152906001019060200180831161038857829003601f168201915b5050505050908060040154905085565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561062157838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461046290610c04565b80601f016020809104026020016040519081016040528092919081815260200182805461048e90610c04565b80156104db5780601f106104b0576101008083540402835291602001916104db565b820191906000526020600020905b8154815290600101906020018083116104be57829003601f168201915b505050505081526020016002820180546104f490610c04565b80601f016020809104026020016040519081016040528092919081815260200182805461052090610c04565b801561056d5780601f106105425761010080835404028352916020019161056d565b820191906000526020600020905b81548152906001019060200180831161055057829003601f168201915b5050505050815260200160038201805461058690610c04565b80601f01602080910402602001604051908101604052809291908181526020018280546105b290610c04565b80156105ff5780601f106105d4576101008083540402835291602001916105ff565b820191906000526020600020905b8154815290600101906020018083116105e257829003601f168201915b50505050508152602001600482015481525050815260200190600101906103d9565b50505050905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106698261063e565b9050919050565b6106798161065e565b811461068457600080fd5b50565b60008135905061069681610670565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106ef826106a6565b810181811067ffffffffffffffff8211171561070e5761070d6106b7565b5b80604052505050565b600061072161062a565b905061072d82826106e6565b919050565b600067ffffffffffffffff82111561074d5761074c6106b7565b5b610756826106a6565b9050602081019050919050565b82818337600083830152505050565b600061078561078084610732565b610717565b9050828152602081018484840111156107a1576107a06106a1565b5b6107ac848285610763565b509392505050565b600082601f8301126107c9576107c861069c565b5b81356107d9848260208601610772565b91505092915050565b600080600080608085870312156107fc576107fb610634565b5b600061080a87828801610687565b945050602085013567ffffffffffffffff81111561082b5761082a610639565b5b610837878288016107b4565b935050604085013567ffffffffffffffff81111561085857610857610639565b5b610864878288016107b4565b925050606085013567ffffffffffffffff81111561088557610884610639565b5b610891878288016107b4565b91505092959194509250565b6000819050919050565b6108b08161089d565b81146108bb57600080fd5b50565b6000813590506108cd816108a7565b92915050565b6000602082840312156108e9576108e8610634565b5b60006108f7848285016108be565b91505092915050565b6109098161065e565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561094957808201518184015260208101905061092e565b60008484015250505050565b60006109608261090f565b61096a818561091a565b935061097a81856020860161092b565b610983816106a6565b840191505092915050565b6109978161089d565b82525050565b600060a0820190506109b26000830188610900565b81810360208301526109c48187610955565b905081810360408301526109d88186610955565b905081810360608301526109ec8185610955565b90506109fb608083018461098e565b9695505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610a3a8161065e565b82525050565b600082825260208201905092915050565b6000610a5c8261090f565b610a668185610a40565b9350610a7681856020860161092b565b610a7f816106a6565b840191505092915050565b610a938161089d565b82525050565b600060a083016000830151610ab16000860182610a31565b5060208301518482036020860152610ac98282610a51565b91505060408301518482036040860152610ae38282610a51565b91505060608301518482036060860152610afd8282610a51565b9150506080830151610b126080860182610a8a565b508091505092915050565b6000610b298383610a99565b905092915050565b6000602082019050919050565b6000610b4982610a05565b610b538185610a10565b935083602082028501610b6585610a21565b8060005b85811015610ba15784840389528151610b828582610b1d565b9450610b8d83610b31565b925060208a01995050600181019050610b69565b50829750879550505050505092915050565b60006020820190508181036000830152610bcd8184610b3e565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c1c57607f821691505b602082108103610c2f57610c2e610bd5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610c5a565b610ca18683610c5a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610cde610cd9610cd48461089d565b610cb9565b61089d565b9050919050565b6000819050919050565b610cf883610cc3565b610d0c610d0482610ce5565b848454610c67565b825550505050565b600090565b610d21610d14565b610d2c818484610cef565b505050565b5b81811015610d5057610d45600082610d19565b600181019050610d32565b5050565b601f821115610d9557610d6681610c35565b610d6f84610c4a565b81016020851015610d7e578190505b610d92610d8a85610c4a565b830182610d31565b50505b505050565b600082821c905092915050565b6000610db860001984600802610d9a565b1980831691505092915050565b6000610dd18383610da7565b9150826002028217905092915050565b610dea8261090f565b67ffffffffffffffff811115610e0357610e026106b7565b5b610e0d8254610c04565b610e18828285610d54565b600060209050601f831160018114610e4b5760008415610e39578287015190505b610e438582610dc5565b865550610eab565b601f198416610e5986610c35565b60005b82811015610e8157848901518255600182019150602085019450602081019050610e5c565b86831015610e9e5784890151610e9a601f891682610da7565b8355505b6001600288020188555050505b50505050505056fea264697066735822122003bcb4de6cba02e32a9d7140aceca81458c5b0f6d2137b11a8b84714e50955ad64736f6c63430008110033";

type UsersDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UsersDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UsersData__factory extends ContractFactory {
  constructor(...args: UsersDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UsersData> {
    return super.deploy(overrides || {}) as Promise<UsersData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UsersData {
    return super.attach(address) as UsersData;
  }
  override connect(signer: Signer): UsersData__factory {
    return super.connect(signer) as UsersData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UsersDataInterface {
    return new utils.Interface(_abi) as UsersDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UsersData {
    return new Contract(address, _abi, signerOrProvider) as UsersData;
  }
}
