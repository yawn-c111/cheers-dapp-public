/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ProjectPool,
  ProjectPoolInterface,
} from "../../contracts/ProjectPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ownerPoolAddress",
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
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "cheersDapp",
    outputs: [
      {
        internalType: "contract ICheers",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cher",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCheers",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cheerPoolAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "cher",
            type: "uint256",
          },
        ],
        internalType: "struct SharedStruct.Cheer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalCher",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cher",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_cheerMessage",
        type: "string",
      },
    ],
    name: "mintCheer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolListData",
    outputs: [
      {
        internalType: "contract IPoolListData",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projectContents",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projectName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projectReword",
    outputs: [
      {
        internalType: "string",
        name: "",
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
        name: "CHERAddress",
        type: "address",
      },
    ],
    name: "setCHER",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolListDataAddress",
        type: "address",
      },
    ],
    name: "setPoolListData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCher",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040527338d4172dde4e50a8cdd8b39abc572443d18ad72d600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156200006657600080fd5b506040516200240d3803806200240d83398181016040528101906200008c9190620004b0565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260069081620002889190620007e0565b5081600790816200029a9190620007e0565b508060089081620002ac9190620007e0565b505050505050620008c7565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002f982620002cc565b9050919050565b6200030b81620002ec565b81146200031757600080fd5b50565b6000815190506200032b8162000300565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000386826200033b565b810181811067ffffffffffffffff82111715620003a857620003a76200034c565b5b80604052505050565b6000620003bd620002b8565b9050620003cb82826200037b565b919050565b600067ffffffffffffffff821115620003ee57620003ed6200034c565b5b620003f9826200033b565b9050602081019050919050565b60005b838110156200042657808201518184015260208101905062000409565b60008484015250505050565b6000620004496200044384620003d0565b620003b1565b90508281526020810184848401111562000468576200046762000336565b5b6200047584828562000406565b509392505050565b600082601f83011262000495576200049462000331565b5b8151620004a784826020860162000432565b91505092915050565b600080600080600060a08688031215620004cf57620004ce620002c2565b5b6000620004df888289016200031a565b9550506020620004f2888289016200031a565b945050604086015167ffffffffffffffff811115620005165762000515620002c7565b5b62000524888289016200047d565b935050606086015167ffffffffffffffff811115620005485762000547620002c7565b5b62000556888289016200047d565b925050608086015167ffffffffffffffff8111156200057a5762000579620002c7565b5b62000588888289016200047d565b9150509295509295909350565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005e857607f821691505b602082108103620005fe57620005fd620005a0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006687fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000629565b62000674868362000629565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620006c1620006bb620006b5846200068c565b62000696565b6200068c565b9050919050565b6000819050919050565b620006dd83620006a0565b620006f5620006ec82620006c8565b84845462000636565b825550505050565b600090565b6200070c620006fd565b62000719818484620006d2565b505050565b5b8181101562000741576200073560008262000702565b6001810190506200071f565b5050565b601f82111562000790576200075a8162000604565b620007658462000619565b8101602085101562000775578190505b6200078d620007848562000619565b8301826200071e565b50505b505050565b600082821c905092915050565b6000620007b56000198460080262000795565b1980831691505092915050565b6000620007d08383620007a2565b9150826002028217905092915050565b620007eb8262000595565b67ffffffffffffffff8111156200080757620008066200034c565b5b620008138254620005cf565b6200082082828562000745565b600060209050601f83116001811462000858576000841562000843578287015190505b6200084f8582620007c2565b865550620008bf565b601f198416620008688662000604565b60005b8281101562000892578489015182556001820191506020850194506020810190506200086b565b86831015620008b25784890151620008ae601f891682620007a2565b8355505b6001600288020188555050505b505050505050565b611b3680620008d76000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80635e001c34116100715780635e001c341461016b57806365550ba41461018757806371b3423d146101a357806373531cfe146101c15780639a33e300146101df578063f6acee23146101fd576100b4565b806316e66f43146100b95780631a314956146100d55780631b5feff5146100f35780631d90fb1f14610111578063250a12d91461012f57806332b04e2b1461014d575b600080fd5b6100d360048036038101906100ce9190610f2c565b61021b565b005b6100dd6102a0565b6040516100ea9190610fe9565b60405180910390f35b6100fb61032e565b60405161010891906111a2565b60405180910390f35b610119610489565b6040516101269190611223565b60405180910390f35b6101376104af565b604051610144919061124d565b60405180910390f35b610155610551565b6040516101629190610fe9565b60405180910390f35b61018560048036038101906101809190610f2c565b6105df565b005b6101a1600480360381019061019c91906113c9565b610663565b005b6101ab6107e8565b6040516101b89190611446565b60405180910390f35b6101c961080e565b6040516101d6919061124d565b60405180910390f35b6101e7610814565b6040516101f49190610fe9565b60405180910390f35b6102056108a2565b6040516102129190611482565b60405180910390f35b80600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600780546102ad906114cc565b80601f01602080910402602001604051908101604052809291908181526020018280546102d9906114cc565b80156103265780601f106102fb57610100808354040283529160200191610326565b820191906000526020600020905b81548152906001019060200180831161030957829003601f168201915b505050505081565b6060600a805480602002602001604051908101604052809291908181526020016000905b8282101561048057838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820180546103e5906114cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610411906114cc565b801561045e5780601f106104335761010080835404028352916020019161045e565b820191906000526020600020905b81548152906001019060200180831161044157829003601f168201915b5050505050815260200160038201548152505081526020019060010190610352565b50505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161050b919061150c565b602060405180830381865afa158015610528573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054c919061153c565b905090565b6008805461055e906114cc565b80601f016020809104026020016040519081016040528092919081815260200182805461058a906114cc565b80156105d75780601f106105ac576101008083540402835291602001916105d7565b820191906000526020600020905b8154815290600101906020018083116105ba57829003601f168201915b505050505081565b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631599a352336040518263ffffffff1660e01b81526004016106fb919061150c565b602060405180830381865afa158015610718573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073c919061157e565b6040518263ffffffff1660e01b8152600401610758919061150c565b602060405180830381865afa158015610775573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610799919061153c565b10156107da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d1906115f7565b60405180910390fd5b6107e482826108c6565b5050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b5481565b60068054610821906114cc565b80601f016020809104026020016040519081016040528092919081815260200182805461084d906114cc565b801561089a5780601f1061086f5761010080835404028352916020019161089a565b820191906000526020600020905b81548152906001019060200180831161087d57829003601f168201915b505050505081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631599a352336040518263ffffffff1660e01b815260040161095d919061150c565b602060405180830381865afa15801561097a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099e919061157e565b30856040518463ffffffff1660e01b81526004016109be93929190611617565b6020604051808303816000875af11580156109dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a019190611686565b50600a6040518060800160405280600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631599a352336040518263ffffffff1660e01b8152600401610a6a919061150c565b602060405180830381865afa158015610a87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aab919061157e565b73ffffffffffffffffffffffffffffffffffffffff16815260200142815260200183815260200184815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002019081610b659190611855565b50606082015181600301555050610b7b82610b7f565b5050565b80600b6000828254610b919190611956565b9250508190555060006064604683610ba9919061198a565b610bb391906119fb565b905060006064601984610bc6919061198a565b610bd091906119fb565b90506000818385610be19190611a2c565b610beb9190611a2c565b905060005b600a80549050811015610d315760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600a8381548110610c4d57610c4c611a60565b5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600b54600a8581548110610c9657610c95611a60565b5b90600052602060002090600402016003015488610cb3919061198a565b610cbd91906119fb565b6040518363ffffffff1660e01b8152600401610cda929190611a8f565b6020604051808303816000875af1158015610cf9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1d9190611686565b508080610d2990611ab8565b915050610bf0565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b8152600401610daf929190611a8f565b6020604051808303816000875af1158015610dce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df29190611686565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b8152600401610e70929190611a8f565b6020604051808303816000875af1158015610e8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb39190611686565b5050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ef982610ece565b9050919050565b610f0981610eee565b8114610f1457600080fd5b50565b600081359050610f2681610f00565b92915050565b600060208284031215610f4257610f41610ec4565b5b6000610f5084828501610f17565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f93578082015181840152602081019050610f78565b60008484015250505050565b6000601f19601f8301169050919050565b6000610fbb82610f59565b610fc58185610f64565b9350610fd5818560208601610f75565b610fde81610f9f565b840191505092915050565b600060208201905081810360008301526110038184610fb0565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61104081610eee565b82525050565b6000819050919050565b61105981611046565b82525050565b600082825260208201905092915050565b600061107b82610f59565b611085818561105f565b9350611095818560208601610f75565b61109e81610f9f565b840191505092915050565b60006080830160008301516110c16000860182611037565b5060208301516110d46020860182611050565b50604083015184820360408601526110ec8282611070565b91505060608301516111016060860182611050565b508091505092915050565b600061111883836110a9565b905092915050565b6000602082019050919050565b60006111388261100b565b6111428185611016565b93508360208202850161115485611027565b8060005b858110156111905784840389528151611171858261110c565b945061117c83611120565b925060208a01995050600181019050611158565b50829750879550505050505092915050565b600060208201905081810360008301526111bc818461112d565b905092915050565b6000819050919050565b60006111e96111e46111df84610ece565b6111c4565b610ece565b9050919050565b60006111fb826111ce565b9050919050565b600061120d826111f0565b9050919050565b61121d81611202565b82525050565b60006020820190506112386000830184611214565b92915050565b61124781611046565b82525050565b6000602082019050611262600083018461123e565b92915050565b61127181611046565b811461127c57600080fd5b50565b60008135905061128e81611268565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6112d682610f9f565b810181811067ffffffffffffffff821117156112f5576112f461129e565b5b80604052505050565b6000611308610eba565b905061131482826112cd565b919050565b600067ffffffffffffffff8211156113345761133361129e565b5b61133d82610f9f565b9050602081019050919050565b82818337600083830152505050565b600061136c61136784611319565b6112fe565b90508281526020810184848401111561138857611387611299565b5b61139384828561134a565b509392505050565b600082601f8301126113b0576113af611294565b5b81356113c0848260208601611359565b91505092915050565b600080604083850312156113e0576113df610ec4565b5b60006113ee8582860161127f565b925050602083013567ffffffffffffffff81111561140f5761140e610ec9565b5b61141b8582860161139b565b9150509250929050565b6000611430826111f0565b9050919050565b61144081611425565b82525050565b600060208201905061145b6000830184611437565b92915050565b600061146c826111f0565b9050919050565b61147c81611461565b82525050565b60006020820190506114976000830184611473565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806114e457607f821691505b6020821081036114f7576114f661149d565b5b50919050565b61150681610eee565b82525050565b600060208201905061152160008301846114fd565b92915050565b60008151905061153681611268565b92915050565b60006020828403121561155257611551610ec4565b5b600061156084828501611527565b91505092915050565b60008151905061157881610f00565b92915050565b60006020828403121561159457611593610ec4565b5b60006115a284828501611569565b91505092915050565b7f4e6f7420656e6f75676800000000000000000000000000000000000000000000600082015250565b60006115e1600a83610f64565b91506115ec826115ab565b602082019050919050565b60006020820190508181036000830152611610816115d4565b9050919050565b600060608201905061162c60008301866114fd565b61163960208301856114fd565b611646604083018461123e565b949350505050565b60008115159050919050565b6116638161164e565b811461166e57600080fd5b50565b6000815190506116808161165a565b92915050565b60006020828403121561169c5761169b610ec4565b5b60006116aa84828501611671565b91505092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026117157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826116d8565b61171f86836116d8565b95508019841693508086168417925050509392505050565b600061175261174d61174884611046565b6111c4565b611046565b9050919050565b6000819050919050565b61176c83611737565b61178061177882611759565b8484546116e5565b825550505050565b600090565b611795611788565b6117a0818484611763565b505050565b5b818110156117c4576117b960008261178d565b6001810190506117a6565b5050565b601f821115611809576117da816116b3565b6117e3846116c8565b810160208510156117f2578190505b6118066117fe856116c8565b8301826117a5565b50505b505050565b600082821c905092915050565b600061182c6000198460080261180e565b1980831691505092915050565b6000611845838361181b565b9150826002028217905092915050565b61185e82610f59565b67ffffffffffffffff8111156118775761187661129e565b5b61188182546114cc565b61188c8282856117c8565b600060209050601f8311600181146118bf57600084156118ad578287015190505b6118b78582611839565b86555061191f565b601f1984166118cd866116b3565b60005b828110156118f5578489015182556001820191506020850194506020810190506118d0565b86831015611912578489015161190e601f89168261181b565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061196182611046565b915061196c83611046565b925082820190508082111561198457611983611927565b5b92915050565b600061199582611046565b91506119a083611046565b92508282026119ae81611046565b915082820484148315176119c5576119c4611927565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611a0682611046565b9150611a1183611046565b925082611a2157611a206119cc565b5b828204905092915050565b6000611a3782611046565b9150611a4283611046565b9250828203905081811115611a5a57611a59611927565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000604082019050611aa460008301856114fd565b611ab1602083018461123e565b9392505050565b6000611ac382611046565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611af557611af4611927565b5b60018201905091905056fea2646970667358221220b267e8f0334ea483f695e4cd92ffe0fcef08b7bcf04d791945f792f5cee3103e64736f6c63430008110033";

type ProjectPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProjectPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProjectPool__factory extends ContractFactory {
  constructor(...args: ProjectPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ownerPoolAddress: PromiseOrValue<string>,
    _belongDaoAddress: PromiseOrValue<string>,
    _projectName: PromiseOrValue<string>,
    _projectContents: PromiseOrValue<string>,
    _projectReword: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProjectPool> {
    return super.deploy(
      _ownerPoolAddress,
      _belongDaoAddress,
      _projectName,
      _projectContents,
      _projectReword,
      overrides || {}
    ) as Promise<ProjectPool>;
  }
  override getDeployTransaction(
    _ownerPoolAddress: PromiseOrValue<string>,
    _belongDaoAddress: PromiseOrValue<string>,
    _projectName: PromiseOrValue<string>,
    _projectContents: PromiseOrValue<string>,
    _projectReword: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _ownerPoolAddress,
      _belongDaoAddress,
      _projectName,
      _projectContents,
      _projectReword,
      overrides || {}
    );
  }
  override attach(address: string): ProjectPool {
    return super.attach(address) as ProjectPool;
  }
  override connect(signer: Signer): ProjectPool__factory {
    return super.connect(signer) as ProjectPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProjectPoolInterface {
    return new utils.Interface(_abi) as ProjectPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProjectPool {
    return new Contract(address, _abi, signerOrProvider) as ProjectPool;
  }
}
