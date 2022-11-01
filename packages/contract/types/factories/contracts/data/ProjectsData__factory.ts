/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ProjectsData,
  ProjectsDataInterface,
} from "../../../contracts/data/ProjectsData";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_projectOwnerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_projectPoolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_belongDaoAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_projectName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_projectContents",
        type: "string",
      },
      {
        internalType: "string",
        name: "_projectReword",
        type: "string",
      },
    ],
    name: "addProjects",
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
    name: "allProjectsList",
    outputs: [
      {
        internalType: "address",
        name: "projectAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "belongDaoAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "projectName",
        type: "string",
      },
      {
        internalType: "string",
        name: "projectContents",
        type: "string",
      },
      {
        internalType: "string",
        name: "projectReword",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "eachProjectsList",
    outputs: [
      {
        internalType: "address",
        name: "projectAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "belongDaoAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "projectName",
        type: "string",
      },
      {
        internalType: "string",
        name: "projectContents",
        type: "string",
      },
      {
        internalType: "string",
        name: "projectReword",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllProjectList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "projectAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "belongDaoAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "projectName",
            type: "string",
          },
          {
            internalType: "string",
            name: "projectContents",
            type: "string",
          },
          {
            internalType: "string",
            name: "projectReword",
            type: "string",
          },
        ],
        internalType: "struct SharedStruct.Project[]",
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
        internalType: "address",
        name: "_projectOwnerAddress",
        type: "address",
      },
    ],
    name: "getEachProjectList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "projectAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "belongDaoAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "projectName",
            type: "string",
          },
          {
            internalType: "string",
            name: "projectContents",
            type: "string",
          },
          {
            internalType: "string",
            name: "projectReword",
            type: "string",
          },
        ],
        internalType: "struct SharedStruct.Project[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061174f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80635874a8121461005c57806358cedf5714610090578063a444a193146100c0578063c327dc3f146100f4578063c34b28f514610112575b600080fd5b61007660048036038101906100719190610ec3565b61012e565b604051610087959493929190610fa2565b60405180910390f35b6100aa60048036038101906100a5919061100a565b610359565b6040516100b791906111d6565b60405180910390f35b6100da60048036038101906100d591906111f8565b610658565b6040516100eb959493929190610fa2565b60405180910390f35b6100fc610876565b60405161010991906111d6565b60405180910390f35b61012c6004803603810190610127919061135a565b610b37565b005b6000602052816000526040600020818154811061014a57600080fd5b9060005260206000209060050201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020180546101ba9061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546101e69061146a565b80156102335780601f1061020857610100808354040283529160200191610233565b820191906000526020600020905b81548152906001019060200180831161021657829003601f168201915b5050505050908060030180546102489061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546102749061146a565b80156102c15780601f10610296576101008083540402835291602001916102c1565b820191906000526020600020905b8154815290600101906020018083116102a457829003601f168201915b5050505050908060040180546102d69061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546103029061146a565b801561034f5780601f106103245761010080835404028352916020019161034f565b820191906000526020600020905b81548152906001019060200180831161033257829003601f168201915b5050505050905085565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561064d57838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546104989061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546104c49061146a565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b5050505050815260200160038201805461052a9061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546105569061146a565b80156105a35780601f10610578576101008083540402835291602001916105a3565b820191906000526020600020905b81548152906001019060200180831161058657829003601f168201915b505050505081526020016004820180546105bc9061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546105e89061146a565b80156106355780601f1061060a57610100808354040283529160200191610635565b820191906000526020600020905b81548152906001019060200180831161061857829003601f168201915b505050505081525050815260200190600101906103b9565b505050509050919050565b6001818154811061066857600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020180546106d79061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546107039061146a565b80156107505780601f1061072557610100808354040283529160200191610750565b820191906000526020600020905b81548152906001019060200180831161073357829003601f168201915b5050505050908060030180546107659061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546107919061146a565b80156107de5780601f106107b3576101008083540402835291602001916107de565b820191906000526020600020905b8154815290600101906020018083116107c157829003601f168201915b5050505050908060040180546107f39061146a565b80601f016020809104026020016040519081016040528092919081815260200182805461081f9061146a565b801561086c5780601f106108415761010080835404028352916020019161086c565b820191906000526020600020905b81548152906001019060200180831161084f57829003601f168201915b5050505050905085565b60606001805480602002602001604051908101604052809291908181526020016000905b82821015610b2e57838290600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546109799061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546109a59061146a565b80156109f25780601f106109c7576101008083540402835291602001916109f2565b820191906000526020600020905b8154815290600101906020018083116109d557829003601f168201915b50505050508152602001600382018054610a0b9061146a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a379061146a565b8015610a845780601f10610a5957610100808354040283529160200191610a84565b820191906000526020600020905b815481529060010190602001808311610a6757829003601f168201915b50505050508152602001600482018054610a9d9061146a565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac99061146a565b8015610b165780601f10610aeb57610100808354040283529160200191610b16565b820191906000526020600020905b815481529060010190602001808311610af957829003601f168201915b5050505050815250508152602001906001019061089a565b50505050905090565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019081610c949190611647565b506060820151816003019081610caa9190611647565b506080820151816004019081610cc09190611647565b50505060016040518060a001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019081610de49190611647565b506060820151816003019081610dfa9190611647565b506080820151816004019081610e109190611647565b505050505050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e5a82610e2f565b9050919050565b610e6a81610e4f565b8114610e7557600080fd5b50565b600081359050610e8781610e61565b92915050565b6000819050919050565b610ea081610e8d565b8114610eab57600080fd5b50565b600081359050610ebd81610e97565b92915050565b60008060408385031215610eda57610ed9610e25565b5b6000610ee885828601610e78565b9250506020610ef985828601610eae565b9150509250929050565b610f0c81610e4f565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f4c578082015181840152602081019050610f31565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f7482610f12565b610f7e8185610f1d565b9350610f8e818560208601610f2e565b610f9781610f58565b840191505092915050565b600060a082019050610fb76000830188610f03565b610fc46020830187610f03565b8181036040830152610fd68186610f69565b90508181036060830152610fea8185610f69565b90508181036080830152610ffe8184610f69565b90509695505050505050565b6000602082840312156110205761101f610e25565b5b600061102e84828501610e78565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61106c81610e4f565b82525050565b600082825260208201905092915050565b600061108e82610f12565b6110988185611072565b93506110a8818560208601610f2e565b6110b181610f58565b840191505092915050565b600060a0830160008301516110d46000860182611063565b5060208301516110e76020860182611063565b50604083015184820360408601526110ff8282611083565b915050606083015184820360608601526111198282611083565b915050608083015184820360808601526111338282611083565b9150508091505092915050565b600061114c83836110bc565b905092915050565b6000602082019050919050565b600061116c82611037565b6111768185611042565b93508360208202850161118885611053565b8060005b858110156111c457848403895281516111a58582611140565b94506111b083611154565b925060208a0199505060018101905061118c565b50829750879550505050505092915050565b600060208201905081810360008301526111f08184611161565b905092915050565b60006020828403121561120e5761120d610e25565b5b600061121c84828501610eae565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61126782610f58565b810181811067ffffffffffffffff821117156112865761128561122f565b5b80604052505050565b6000611299610e1b565b90506112a5828261125e565b919050565b600067ffffffffffffffff8211156112c5576112c461122f565b5b6112ce82610f58565b9050602081019050919050565b82818337600083830152505050565b60006112fd6112f8846112aa565b61128f565b9050828152602081018484840111156113195761131861122a565b5b6113248482856112db565b509392505050565b600082601f83011261134157611340611225565b5b81356113518482602086016112ea565b91505092915050565b60008060008060008060c0878903121561137757611376610e25565b5b600061138589828a01610e78565b965050602061139689828a01610e78565b95505060406113a789828a01610e78565b945050606087013567ffffffffffffffff8111156113c8576113c7610e2a565b5b6113d489828a0161132c565b935050608087013567ffffffffffffffff8111156113f5576113f4610e2a565b5b61140189828a0161132c565b92505060a087013567ffffffffffffffff81111561142257611421610e2a565b5b61142e89828a0161132c565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061148257607f821691505b6020821081036114955761149461143b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026114fd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826114c0565b61150786836114c0565b95508019841693508086168417925050509392505050565b6000819050919050565b600061154461153f61153a84610e8d565b61151f565b610e8d565b9050919050565b6000819050919050565b61155e83611529565b61157261156a8261154b565b8484546114cd565b825550505050565b600090565b61158761157a565b611592818484611555565b505050565b5b818110156115b6576115ab60008261157f565b600181019050611598565b5050565b601f8211156115fb576115cc8161149b565b6115d5846114b0565b810160208510156115e4578190505b6115f86115f0856114b0565b830182611597565b50505b505050565b600082821c905092915050565b600061161e60001984600802611600565b1980831691505092915050565b6000611637838361160d565b9150826002028217905092915050565b61165082610f12565b67ffffffffffffffff8111156116695761166861122f565b5b611673825461146a565b61167e8282856115ba565b600060209050601f8311600181146116b1576000841561169f578287015190505b6116a9858261162b565b865550611711565b601f1984166116bf8661149b565b60005b828110156116e7578489015182556001820191506020850194506020810190506116c2565b868310156117045784890151611700601f89168261160d565b8355505b6001600288020188555050505b50505050505056fea26469706673582212208d4d62aa8aab3cac0e3d71e0f229a0df2e4572b5e424eb305ae4ef460b22531364736f6c63430008110033";

type ProjectsDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProjectsDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProjectsData__factory extends ContractFactory {
  constructor(...args: ProjectsDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProjectsData> {
    return super.deploy(overrides || {}) as Promise<ProjectsData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProjectsData {
    return super.attach(address) as ProjectsData;
  }
  override connect(signer: Signer): ProjectsData__factory {
    return super.connect(signer) as ProjectsData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProjectsDataInterface {
    return new utils.Interface(_abi) as ProjectsDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProjectsData {
    return new Contract(address, _abi, signerOrProvider) as ProjectsData;
  }
}
