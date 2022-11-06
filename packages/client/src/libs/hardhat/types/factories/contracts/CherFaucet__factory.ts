/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../common';
import type { CherFaucet, CherFaucetInterface } from '../../contracts/CherFaucet';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CHER_CONTRACT_ADDRESS',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cher',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'cherAmount',
        type: 'uint256',
      },
    ],
    name: 'exchange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'faucet',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFaucetBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'CHERAddress',
        type: 'address',
      },
    ],
    name: 'setCHER',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'ownerAddress',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040527338d4172dde4e50a8cdd8b39abc572443d18ad72d6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156100c557600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061141d806101166000396000f3fe6080604052600436106100865760003560e01c80635e001c34116100595780635e001c341461011f5780638da5cb5b14610148578063de5f72fd14610173578063f1f959a61461017d578063f6acee23146101a857610086565b806313af40351461008b57806322fb6ca6146100b45780633ccfd60b146100df57806353556559146100f6575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610c85565b6101d3565b005b3480156100c057600080fd5b506100c9610271565b6040516100d69190610cc1565b60405180910390f35b3480156100eb57600080fd5b506100f4610295565b005b34801561010257600080fd5b5061011d60048036038101906101189190610d12565b6104ba565b005b34801561012b57600080fd5b5061014660048036038101906101419190610c85565b61083e565b005b34801561015457600080fd5b5061015d61091c565b60405161016a9190610cc1565b60405180910390f35b61017b610942565b005b34801561018957600080fd5b50610192610b59565b60405161019f9190610d4e565b60405180910390f35b3480156101b457600080fd5b506101bd610bfc565b6040516101ca9190610dc8565b60405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461022d57600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146102ef57600080fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161034c9190610cc1565b602060405180830381865afa158015610369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038d9190610df8565b9050600081116103d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c990610e82565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610431929190610ea2565b6020604051808303816000875af1158015610450573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104749190610f03565b9050806104b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ad90610f7c565b60405180910390fd5b5050565b3273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610528576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051f90610fe8565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401610587929190611008565b602060405180830381865afa1580156105a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c89190610df8565b90508181101561060d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610604906110a3565b60405180910390fd5b60006103e88361061d9190611121565b905060008111610662576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106599061119e565b60405180910390fd5b804710156106a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069c9061120a565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b81526004016107069392919061122a565b6020604051808303816000875af1158015610725573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107499190610f03565b90508061078b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078290610f7c565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16836040516107b190611292565b60006040518083038185875af1925050503d80600081146107ee576040519150601f19603f3d011682016040523d82523d6000602084013e6107f3565b606091505b5050905080610837576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082e906112f3565b60405180910390fd5b5050505050565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461089857600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000341015610986576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097d90611385565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109e39190610cc1565b602060405180830381865afa158015610a00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a249190610df8565b1015610a65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5c90610e82565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336103e834610ab491906113a5565b6040518363ffffffff1660e01b8152600401610ad1929190610ea2565b6020604051808303816000875af1158015610af0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b149190610f03565b905080610b56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4d90610f7c565b60405180910390fd5b50565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610bb69190610cc1565b602060405180830381865afa158015610bd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf79190610df8565b905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c5282610c27565b9050919050565b610c6281610c47565b8114610c6d57600080fd5b50565b600081359050610c7f81610c59565b92915050565b600060208284031215610c9b57610c9a610c22565b5b6000610ca984828501610c70565b91505092915050565b610cbb81610c47565b82525050565b6000602082019050610cd66000830184610cb2565b92915050565b6000819050919050565b610cef81610cdc565b8114610cfa57600080fd5b50565b600081359050610d0c81610ce6565b92915050565b600060208284031215610d2857610d27610c22565b5b6000610d3684828501610cfd565b91505092915050565b610d4881610cdc565b82525050565b6000602082019050610d636000830184610d3f565b92915050565b6000819050919050565b6000610d8e610d89610d8484610c27565b610d69565b610c27565b9050919050565b6000610da082610d73565b9050919050565b6000610db282610d95565b9050919050565b610dc281610da7565b82525050565b6000602082019050610ddd6000830184610db9565b92915050565b600081519050610df281610ce6565b92915050565b600060208284031215610e0e57610e0d610c22565b5b6000610e1c84828501610de3565b91505092915050565b600082825260208201905092915050565b7f4e6f204348455200000000000000000000000000000000000000000000000000600082015250565b6000610e6c600783610e25565b9150610e7782610e36565b602082019050919050565b60006020820190508181036000830152610e9b81610e5f565b9050919050565b6000604082019050610eb76000830185610cb2565b610ec46020830184610d3f565b9392505050565b60008115159050919050565b610ee081610ecb565b8114610eeb57600080fd5b50565b600081519050610efd81610ed7565b92915050565b600060208284031215610f1957610f18610c22565b5b6000610f2784828501610eee565b91505092915050565b7f4348455220636f756c64206e6f742062652073656e742e000000000000000000600082015250565b6000610f66601783610e25565b9150610f7182610f30565b602082019050919050565b60006020820190508181036000830152610f9581610f59565b9050919050565b7f454f41206f6e6c79000000000000000000000000000000000000000000000000600082015250565b6000610fd2600883610e25565b9150610fdd82610f9c565b602082019050919050565b6000602082019050818103600083015261100181610fc5565b9050919050565b600060408201905061101d6000830185610cb2565b61102a6020830184610cb2565b9392505050565b7f4348455220616c6c6f77616e636520697320726571756972656420746f20726560008201527f6365697665204e617469766520746f6b656e0000000000000000000000000000602082015250565b600061108d603283610e25565b915061109882611031565b604082019050919050565b600060208201905081810360008301526110bc81611080565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061112c82610cdc565b915061113783610cdc565b925082611147576111466110c3565b5b828204905092915050565b7f4e656564206d6f7265204368657220616c6c6f77616e63650000000000000000600082015250565b6000611188601883610e25565b915061119382611152565b602082019050919050565b600060208201905081810360008301526111b78161117b565b9050919050565b7f4e6f204e617469766520746f6b656e0000000000000000000000000000000000600082015250565b60006111f4600f83610e25565b91506111ff826111be565b602082019050919050565b60006020820190508181036000830152611223816111e7565b9050919050565b600060608201905061123f6000830186610cb2565b61124c6020830185610cb2565b6112596040830184610d3f565b949350505050565b600081905092915050565b50565b600061127c600083611261565b91506112878261126c565b600082019050919050565b600061129d8261126f565b9150819050919050565b7f4e617469766520746f6b656e20636f756c64206e6f742062652073656e742e00600082015250565b60006112dd601f83610e25565b91506112e8826112a7565b602082019050919050565b6000602082019050818103600083015261130c816112d0565b9050919050565b7f4e617469766520746f6b656e2061726520726571756972656420746f2072656360008201527f6569766520434845520000000000000000000000000000000000000000000000602082015250565b600061136f602983610e25565b915061137a82611313565b604082019050919050565b6000602082019050818103600083015261139e81611362565b9050919050565b60006113b082610cdc565b91506113bb83610cdc565b92508282026113c981610cdc565b915082820484148315176113e0576113df6110f2565b5b509291505056fea264697066735822122068f08dd1d66acc8145fde13598dae36acc8e632c3815b2de136d8ebc98c0279964736f6c63430008110033';

type CherFaucetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: CherFaucetConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class CherFaucet__factory extends ContractFactory {
  constructor(...args: CherFaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<CherFaucet> {
    return super.deploy(overrides || {}) as Promise<CherFaucet>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CherFaucet {
    return super.attach(address) as CherFaucet;
  }
  override connect(signer: Signer): CherFaucet__factory {
    return super.connect(signer) as CherFaucet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CherFaucetInterface {
    return new utils.Interface(_abi) as CherFaucetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CherFaucet {
    return new Contract(address, _abi, signerOrProvider) as CherFaucet;
  }
}
