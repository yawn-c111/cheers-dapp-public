/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DaosData,
  DaosDataInterface,
} from "../../../contracts/data/DaosData";

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
        name: "_daoAddress",
        type: "address",
      },
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
    name: "addDaos",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "daos",
    outputs: [
      {
        internalType: "address",
        name: "daoAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "daoName",
        type: "string",
      },
      {
        internalType: "string",
        name: "daoProfile",
        type: "string",
      },
      {
        internalType: "string",
        name: "daoIcon",
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
  {
    inputs: [],
    name: "getAllDaoList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "daoAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "daoName",
            type: "string",
          },
          {
            internalType: "string",
            name: "daoProfile",
            type: "string",
          },
          {
            internalType: "string",
            name: "daoIcon",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "creationTime",
            type: "uint256",
          },
        ],
        internalType: "struct SharedStruct.Dao[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ee9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806302c256f6146100465780636721b7c014610062578063ccbbd26014610080575b600080fd5b610060600480360381019061005b91906107e2565b6100b4565b005b61006a6101b7565b6040516100779190610a8a565b60405180910390f35b61009a60048036038101906100959190610ad8565b61042c565b6040516100ab959493929190610b6d565b60405180910390f35b60006040518060a001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815260200142815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816101789190610de1565b50604082015181600201908161018e9190610de1565b5060608201518160030190816101a49190610de1565b5060808201518160040155505050505050565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561042357838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461026490610c04565b80601f016020809104026020016040519081016040528092919081815260200182805461029090610c04565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b505050505081526020016002820180546102f690610c04565b80601f016020809104026020016040519081016040528092919081815260200182805461032290610c04565b801561036f5780601f106103445761010080835404028352916020019161036f565b820191906000526020600020905b81548152906001019060200180831161035257829003601f168201915b5050505050815260200160038201805461038890610c04565b80601f01602080910402602001604051908101604052809291908181526020018280546103b490610c04565b80156104015780601f106103d657610100808354040283529160200191610401565b820191906000526020600020905b8154815290600101906020018083116103e457829003601f168201915b50505050508152602001600482015481525050815260200190600101906101db565b50505050905090565b6000818154811061043c57600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461048590610c04565b80601f01602080910402602001604051908101604052809291908181526020018280546104b190610c04565b80156104fe5780601f106104d3576101008083540402835291602001916104fe565b820191906000526020600020905b8154815290600101906020018083116104e157829003601f168201915b50505050509080600201805461051390610c04565b80601f016020809104026020016040519081016040528092919081815260200182805461053f90610c04565b801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b5050505050908060030180546105a190610c04565b80601f01602080910402602001604051908101604052809291908181526020018280546105cd90610c04565b801561061a5780601f106105ef5761010080835404028352916020019161061a565b820191906000526020600020905b8154815290600101906020018083116105fd57829003601f168201915b5050505050908060040154905085565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106698261063e565b9050919050565b6106798161065e565b811461068457600080fd5b50565b60008135905061069681610670565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106ef826106a6565b810181811067ffffffffffffffff8211171561070e5761070d6106b7565b5b80604052505050565b600061072161062a565b905061072d82826106e6565b919050565b600067ffffffffffffffff82111561074d5761074c6106b7565b5b610756826106a6565b9050602081019050919050565b82818337600083830152505050565b600061078561078084610732565b610717565b9050828152602081018484840111156107a1576107a06106a1565b5b6107ac848285610763565b509392505050565b600082601f8301126107c9576107c861069c565b5b81356107d9848260208601610772565b91505092915050565b600080600080608085870312156107fc576107fb610634565b5b600061080a87828801610687565b945050602085013567ffffffffffffffff81111561082b5761082a610639565b5b610837878288016107b4565b935050604085013567ffffffffffffffff81111561085857610857610639565b5b610864878288016107b4565b925050606085013567ffffffffffffffff81111561088557610884610639565b5b610891878288016107b4565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6108d28161065e565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156109125780820151818401526020810190506108f7565b60008484015250505050565b6000610929826108d8565b61093381856108e3565b93506109438185602086016108f4565b61094c816106a6565b840191505092915050565b6000819050919050565b61096a81610957565b82525050565b600060a08301600083015161098860008601826108c9565b50602083015184820360208601526109a0828261091e565b915050604083015184820360408601526109ba828261091e565b915050606083015184820360608601526109d4828261091e565b91505060808301516109e96080860182610961565b508091505092915050565b6000610a008383610970565b905092915050565b6000602082019050919050565b6000610a208261089d565b610a2a81856108a8565b935083602082028501610a3c856108b9565b8060005b85811015610a785784840389528151610a5985826109f4565b9450610a6483610a08565b925060208a01995050600181019050610a40565b50829750879550505050505092915050565b60006020820190508181036000830152610aa48184610a15565b905092915050565b610ab581610957565b8114610ac057600080fd5b50565b600081359050610ad281610aac565b92915050565b600060208284031215610aee57610aed610634565b5b6000610afc84828501610ac3565b91505092915050565b610b0e8161065e565b82525050565b600082825260208201905092915050565b6000610b30826108d8565b610b3a8185610b14565b9350610b4a8185602086016108f4565b610b53816106a6565b840191505092915050565b610b6781610957565b82525050565b600060a082019050610b826000830188610b05565b8181036020830152610b948187610b25565b90508181036040830152610ba88186610b25565b90508181036060830152610bbc8185610b25565b9050610bcb6080830184610b5e565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c1c57607f821691505b602082108103610c2f57610c2e610bd5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610c5a565b610ca18683610c5a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610cde610cd9610cd484610957565b610cb9565b610957565b9050919050565b6000819050919050565b610cf883610cc3565b610d0c610d0482610ce5565b848454610c67565b825550505050565b600090565b610d21610d14565b610d2c818484610cef565b505050565b5b81811015610d5057610d45600082610d19565b600181019050610d32565b5050565b601f821115610d9557610d6681610c35565b610d6f84610c4a565b81016020851015610d7e578190505b610d92610d8a85610c4a565b830182610d31565b50505b505050565b600082821c905092915050565b6000610db860001984600802610d9a565b1980831691505092915050565b6000610dd18383610da7565b9150826002028217905092915050565b610dea826108d8565b67ffffffffffffffff811115610e0357610e026106b7565b5b610e0d8254610c04565b610e18828285610d54565b600060209050601f831160018114610e4b5760008415610e39578287015190505b610e438582610dc5565b865550610eab565b601f198416610e5986610c35565b60005b82811015610e8157848901518255600182019150602085019450602081019050610e5c565b86831015610e9e5784890151610e9a601f891682610da7565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220560cd700238e0e5b23a8de4b930a8c13d7937bab831502b3d59cd5df0e79192364736f6c63430008110033";

type DaosDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DaosDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DaosData__factory extends ContractFactory {
  constructor(...args: DaosDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DaosData> {
    return super.deploy(overrides || {}) as Promise<DaosData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DaosData {
    return super.attach(address) as DaosData;
  }
  override connect(signer: Signer): DaosData__factory {
    return super.connect(signer) as DaosData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DaosDataInterface {
    return new utils.Interface(_abi) as DaosDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DaosData {
    return new Contract(address, _abi, signerOrProvider) as DaosData;
  }
}
