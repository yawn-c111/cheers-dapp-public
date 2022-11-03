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
        name: "projectOwnerAddress",
        type: "address",
      },
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
        name: "projectOwnerAddress",
        type: "address",
      },
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
    name: "getAllProjectList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "projectOwnerAddress",
            type: "address",
          },
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
          {
            internalType: "uint256",
            name: "creationTime",
            type: "uint256",
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
            name: "projectOwnerAddress",
            type: "address",
          },
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
          {
            internalType: "uint256",
            name: "creationTime",
            type: "uint256",
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
  "0x608060405234801561001057600080fd5b506119b7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80635874a8121461005c57806358cedf5714610092578063a444a193146100c2578063c327dc3f146100f8578063c34b28f514610116575b600080fd5b610076600480360381019061007191906110cb565b610132565b60405161008997969594939291906111b9565b60405180910390f35b6100ac60048036038101906100a7919061123d565b610389565b6040516100b9919061143e565b60405180910390f35b6100dc60048036038101906100d79190611460565b6106e8565b6040516100ef97969594939291906111b9565b60405180910390f35b610100610932565b60405161010d919061143e565b60405180910390f35b610130600480360381019061012b91906115c2565b610c53565b005b6000602052816000526040600020818154811061014e57600080fd5b9060005260206000209060070201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030180546101e4906116d2565b80601f0160208091040260200160405190810160405280929190818152602001828054610210906116d2565b801561025d5780601f106102325761010080835404028352916020019161025d565b820191906000526020600020905b81548152906001019060200180831161024057829003601f168201915b505050505090806004018054610272906116d2565b80601f016020809104026020016040519081016040528092919081815260200182805461029e906116d2565b80156102eb5780601f106102c0576101008083540402835291602001916102eb565b820191906000526020600020905b8154815290600101906020018083116102ce57829003601f168201915b505050505090806005018054610300906116d2565b80601f016020809104026020016040519081016040528092919081815260200182805461032c906116d2565b80156103795780601f1061034e57610100808354040283529160200191610379565b820191906000526020600020905b81548152906001019060200180831161035c57829003601f168201915b5050505050908060060154905087565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156106dd57838290600052602060002090600702016040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160038201805461051e906116d2565b80601f016020809104026020016040519081016040528092919081815260200182805461054a906116d2565b80156105975780601f1061056c57610100808354040283529160200191610597565b820191906000526020600020905b81548152906001019060200180831161057a57829003601f168201915b505050505081526020016004820180546105b0906116d2565b80601f01602080910402602001604051908101604052809291908181526020018280546105dc906116d2565b80156106295780601f106105fe57610100808354040283529160200191610629565b820191906000526020600020905b81548152906001019060200180831161060c57829003601f168201915b50505050508152602001600582018054610642906116d2565b80601f016020809104026020016040519081016040528092919081815260200182805461066e906116d2565b80156106bb5780601f10610690576101008083540402835291602001916106bb565b820191906000526020600020905b81548152906001019060200180831161069e57829003601f168201915b50505050508152602001600682015481525050815260200190600101906103e9565b505050509050919050565b600181815481106106f857600080fd5b90600052602060002090600702016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600301805461078d906116d2565b80601f01602080910402602001604051908101604052809291908181526020018280546107b9906116d2565b80156108065780601f106107db57610100808354040283529160200191610806565b820191906000526020600020905b8154815290600101906020018083116107e957829003601f168201915b50505050509080600401805461081b906116d2565b80601f0160208091040260200160405190810160405280929190818152602001828054610847906116d2565b80156108945780601f1061086957610100808354040283529160200191610894565b820191906000526020600020905b81548152906001019060200180831161087757829003601f168201915b5050505050908060050180546108a9906116d2565b80601f01602080910402602001604051908101604052809291908181526020018280546108d5906116d2565b80156109225780601f106108f757610100808354040283529160200191610922565b820191906000526020600020905b81548152906001019060200180831161090557829003601f168201915b5050505050908060060154905087565b60606001805480602002602001604051908101604052809291908181526020016000905b82821015610c4a57838290600052602060002090600702016040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382018054610a8b906116d2565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab7906116d2565b8015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b50505050508152602001600482018054610b1d906116d2565b80601f0160208091040260200160405190810160405280929190818152602001828054610b49906116d2565b8015610b965780601f10610b6b57610100808354040283529160200191610b96565b820191906000526020600020905b815481529060010190602001808311610b7957829003601f168201915b50505050508152602001600582018054610baf906116d2565b80601f0160208091040260200160405190810160405280929190818152602001828054610bdb906116d2565b8015610c285780601f10610bfd57610100808354040283529160200191610c28565b820191906000526020600020905b815481529060010190602001808311610c0b57829003601f168201915b5050505050815260200160068201548152505081526020019060010190610956565b50505050905090565b60004290506000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060e001604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019081610e1e91906118af565b506080820151816004019081610e3491906118af565b5060a0820151816005019081610e4a91906118af565b5060c08201518160060155505060016040518060e001604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184815260200183815250908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019081610fe191906118af565b506080820151816004019081610ff791906118af565b5060a082015181600501908161100d91906118af565b5060c08201518160060155505050505050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061106282611037565b9050919050565b61107281611057565b811461107d57600080fd5b50565b60008135905061108f81611069565b92915050565b6000819050919050565b6110a881611095565b81146110b357600080fd5b50565b6000813590506110c58161109f565b92915050565b600080604083850312156110e2576110e161102d565b5b60006110f085828601611080565b9250506020611101858286016110b6565b9150509250929050565b61111481611057565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611154578082015181840152602081019050611139565b60008484015250505050565b6000601f19601f8301169050919050565b600061117c8261111a565b6111868185611125565b9350611196818560208601611136565b61119f81611160565b840191505092915050565b6111b381611095565b82525050565b600060e0820190506111ce600083018a61110b565b6111db602083018961110b565b6111e8604083018861110b565b81810360608301526111fa8187611171565b9050818103608083015261120e8186611171565b905081810360a08301526112228185611171565b905061123160c08301846111aa565b98975050505050505050565b6000602082840312156112535761125261102d565b5b600061126184828501611080565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61129f81611057565b82525050565b600082825260208201905092915050565b60006112c18261111a565b6112cb81856112a5565b93506112db818560208601611136565b6112e481611160565b840191505092915050565b6112f881611095565b82525050565b600060e0830160008301516113166000860182611296565b5060208301516113296020860182611296565b50604083015161133c6040860182611296565b506060830151848203606086015261135482826112b6565b9150506080830151848203608086015261136e82826112b6565b91505060a083015184820360a086015261138882826112b6565b91505060c083015161139d60c08601826112ef565b508091505092915050565b60006113b483836112fe565b905092915050565b6000602082019050919050565b60006113d48261126a565b6113de8185611275565b9350836020820285016113f085611286565b8060005b8581101561142c578484038952815161140d85826113a8565b9450611418836113bc565b925060208a019950506001810190506113f4565b50829750879550505050505092915050565b6000602082019050818103600083015261145881846113c9565b905092915050565b6000602082840312156114765761147561102d565b5b6000611484848285016110b6565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6114cf82611160565b810181811067ffffffffffffffff821117156114ee576114ed611497565b5b80604052505050565b6000611501611023565b905061150d82826114c6565b919050565b600067ffffffffffffffff82111561152d5761152c611497565b5b61153682611160565b9050602081019050919050565b82818337600083830152505050565b600061156561156084611512565b6114f7565b90508281526020810184848401111561158157611580611492565b5b61158c848285611543565b509392505050565b600082601f8301126115a9576115a861148d565b5b81356115b9848260208601611552565b91505092915050565b60008060008060008060c087890312156115df576115de61102d565b5b60006115ed89828a01611080565b96505060206115fe89828a01611080565b955050604061160f89828a01611080565b945050606087013567ffffffffffffffff8111156116305761162f611032565b5b61163c89828a01611594565b935050608087013567ffffffffffffffff81111561165d5761165c611032565b5b61166989828a01611594565b92505060a087013567ffffffffffffffff81111561168a57611689611032565b5b61169689828a01611594565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806116ea57607f821691505b6020821081036116fd576116fc6116a3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026117657fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611728565b61176f8683611728565b95508019841693508086168417925050509392505050565b6000819050919050565b60006117ac6117a76117a284611095565b611787565b611095565b9050919050565b6000819050919050565b6117c683611791565b6117da6117d2826117b3565b848454611735565b825550505050565b600090565b6117ef6117e2565b6117fa8184846117bd565b505050565b5b8181101561181e576118136000826117e7565b600181019050611800565b5050565b601f8211156118635761183481611703565b61183d84611718565b8101602085101561184c578190505b61186061185885611718565b8301826117ff565b50505b505050565b600082821c905092915050565b600061188660001984600802611868565b1980831691505092915050565b600061189f8383611875565b9150826002028217905092915050565b6118b88261111a565b67ffffffffffffffff8111156118d1576118d0611497565b5b6118db82546116d2565b6118e6828285611822565b600060209050601f8311600181146119195760008415611907578287015190505b6119118582611893565b865550611979565b601f19841661192786611703565b60005b8281101561194f5784890151825560018201915060208501945060208101905061192a565b8683101561196c5784890151611968601f891682611875565b8355505b6001600288020188555050505b50505050505056fea264697066735822122055864dc123afd5b7e1057291c332175d635b10c182ddc9615e6cb9239ef7de3e64736f6c63430008110033";

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
