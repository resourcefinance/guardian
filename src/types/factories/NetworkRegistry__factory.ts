/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NetworkRegistry,
  NetworkRegistryInterface,
} from "../NetworkRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address[]",
        name: "member",
        type: "address[]",
      },
    ],
    name: "MemberAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "MemberRemoval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorRemoval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newMember",
        type: "address",
      },
    ],
    name: "WalletDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
    ],
    name: "addMembers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_clients",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_guardians",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_coSigner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_required",
        type: "uint256",
      },
    ],
    name: "deployNewWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMembers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_operators",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_walletDeployer",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    ],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "members",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "operators",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612a1b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063a230c52411610066578063a230c5241461024a578063ac8a584a1461027a578063e28d490614610296578063f2fde38b146102c6576100f5565b8063715018a6146101e85780638da5cb5b146101f25780639870d7fe146102105780639eab52531461022c576100f5565b80635274ac3f116100d35780635274ac3f146101505780635daf08ca1461016c5780636d70f7ae1461019c5780636f4d469b146101cc576100f5565b80630b1ca49a146100fa57806327a099d81461011657806334fbfca914610134575b600080fd5b610114600480360381019061010f9190611f2f565b6102e2565b005b61011e610636565b60405161012b91906123cd565b60405180910390f35b61014e6004803603810190610149919061205d565b6106c4565b005b61016a60048036038101906101659190611fd2565b610974565b005b610186600480360381019061018191906120fc565b610e3c565b60405161019391906123b2565b60405180910390f35b6101b660048036038101906101b19190611f2f565b610e7b565b6040516101c39190612442565b60405180910390f35b6101e660048036038101906101e19190611f89565b610e9b565b005b6101f0611141565b005b6101fa6111c9565b60405161020791906123b2565b60405180910390f35b61022a60048036038101906102259190611f2f565b6111f3565b005b610234611483565b60405161024191906123cd565b60405180910390f35b610264600480360381019061025f9190611f2f565b611511565b6040516102719190612442565b60405180910390f35b610294600480360381019061028f9190611f2f565b611531565b005b6102b060048036038101906102ab91906120fc565b6118fb565b6040516102bd91906123b2565b60405180910390f35b6102e060048036038101906102db9190611f2f565b61193a565b005b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661036f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610366906124fd565b60405180910390fd5b81606560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f39061255d565b60405180910390fd5b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b60016068805490506104699190612623565b8110156105a6578373ffffffffffffffffffffffffffffffffffffffff166068828154811061049b5761049a612777565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561059357606860016068805490506104f69190612623565b8154811061050757610506612777565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166068828154811061054657610545612777565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506105a6565b808061059e906126d0565b915050610457565b5060688054806105b9576105b8612748565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558273ffffffffffffffffffffffffffffffffffffffff167f270bfc616dd36d5cb6b35aac93e6ef22b089c34e6f6ad6f0892797424840897b60405160405180910390a2505050565b606060678054806020026020016040519081016040528092919081815260200182805480156106ba57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610670575b5050505050905090565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610751576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610748906124fd565b60405180910390fd5b6000606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9b01c29878787876040518563ffffffff1660e01b81526004016107b494939291906123ef565b602060405180830381600087803b1580156107ce57600080fd5b505af11580156107e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108069190611f5c565b90508073ffffffffffffffffffffffffffffffffffffffff1663f2fde38b61082c6111c9565b6040518263ffffffff1660e01b815260040161084891906123b2565b600060405180830381600087803b15801561086257600080fd5b505af1158015610876573d6000803e3d6000fd5b505050506001606560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506068819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd45d993e8218db32a9aab497e5559fbbebbf9947f314ff03e4d5b5146a8928be8160405161096491906123b2565b60405180910390a1505050505050565b600060019054906101000a900460ff168061099a575060008054906101000a900460ff16155b6109d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d0906124bd565b60405180910390fd5b60008060019054906101000a900460ff161590508015610a29576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610a31611a32565b60005b8451811015610b865760656000868381518110610a5457610a53612777565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015610af85750600073ffffffffffffffffffffffffffffffffffffffff16858281518110610ad757610ad6612777565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b610b0157600080fd5b600160656000878481518110610b1a57610b19612777565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080610b7e906126d0565b915050610a34565b5060005b8351811015610cdc5760666000858381518110610baa57610ba9612777565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015610c4e5750600073ffffffffffffffffffffffffffffffffffffffff16848281518110610c2d57610c2c612777565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b610c5757600080fd5b600160666000868481518110610c7057610c6f612777565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080610cd4906126d0565b915050610b8a565b508360689080519060200190610cf3929190611dab565b508260679080519060200190610d0a929190611dab565b506067610d156111c9565b9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081606960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160666000610dc46111c9565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508015610e365760008060016101000a81548160ff0219169083151502179055505b50505050565b60688181548110610e4c57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60666020528060005260406000206000915054906101000a900460ff1681565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1f906124fd565b60405180910390fd5b60005b82518110156110fa5760656000848381518110610f4b57610f4a612777565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015610fef5750600073ffffffffffffffffffffffffffffffffffffffff16838281518110610fce57610fcd612777565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b610ff857600080fd5b60016065600085848151811061101157611010612777565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550606883828151811061107f5761107e612777565b5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080806110f2906126d0565b915050610f2b565b5081604051611109919061239b565b60405180910390207f2c6f2a4b43716eaee3ce4f118954c5b5d34c495438239eafa8cd38545ab8812e60405160405180910390a25050565b611149611b1b565b73ffffffffffffffffffffffffffffffffffffffff166111676111c9565b73ffffffffffffffffffffffffffffffffffffffff16146111bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b4906124dd565b60405180910390fd5b6111c76000611b23565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611280576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611277906124fd565b60405180910390fd5b81606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561130e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113059061249d565b60405180910390fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561137f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113769061247d565b60405180910390fd5b6001606660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506067849080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff167fe96a56aa17dd8ae64ac3a51347e8e8a03d52f1cb2acdf8ed49b20d55662ebecc60405160405180910390a250505050565b6060606880548060200260200160405190810160405280929190818152602001828054801561150757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116114bd575b5050505050905090565b60656020528060005260406000206000915054906101000a900460ff1681565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166115be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115b5906124fd565b60405180910390fd5b81606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661164b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116429061251d565b60405180910390fd5b6116536111c9565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156116c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b89061253d565b60405180910390fd5b6000606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b600160678054905061172e9190612623565b81101561186b578373ffffffffffffffffffffffffffffffffffffffff16606782815481106117605761175f612777565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561185857606760016067805490506117bb9190612623565b815481106117cc576117cb612777565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166067828154811061180b5761180a612777565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061186b565b8080611863906126d0565b91505061171c565b50606780548061187e5761187d612748565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558273ffffffffffffffffffffffffffffffffffffffff167f108286147377add4f5f7bcdd7b6104dc6bdac3443e499142a612d418aa0be15460405160405180910390a2505050565b6067818154811061190b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611942611b1b565b73ffffffffffffffffffffffffffffffffffffffff166119606111c9565b73ffffffffffffffffffffffffffffffffffffffff16146119b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ad906124dd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a1d9061245d565b60405180910390fd5b611a2f81611b23565b50565b600060019054906101000a900460ff1680611a58575060008054906101000a900460ff16155b611a97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a8e906124bd565b60405180910390fd5b60008060019054906101000a900460ff161590508015611ae7576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611aef611be9565b611af7611cc2565b8015611b185760008060016101000a81548160ff0219169083151502179055505b50565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060019054906101000a900460ff1680611c0f575060008054906101000a900460ff16155b611c4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c45906124bd565b60405180910390fd5b60008060019054906101000a900460ff161590508015611c9e576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8015611cbf5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611ce8575060008054906101000a900460ff16155b611d27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d1e906124bd565b60405180910390fd5b60008060019054906101000a900460ff161590508015611d77576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611d87611d82611b1b565b611b23565b8015611da85760008060016101000a81548160ff0219169083151502179055505b50565b828054828255906000526020600020908101928215611e24579160200282015b82811115611e235782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611dcb565b5b509050611e319190611e35565b5090565b5b80821115611e4e576000816000905550600101611e36565b5090565b6000611e65611e60846125a2565b61257d565b90508083825260208201905082856020860282011115611e8857611e876127da565b5b60005b85811015611eb85781611e9e8882611ec2565b845260208401935060208301925050600181019050611e8b565b5050509392505050565b600081359050611ed1816129b7565b92915050565b600081519050611ee6816129b7565b92915050565b600082601f830112611f0157611f006127d5565b5b8135611f11848260208601611e52565b91505092915050565b600081359050611f29816129ce565b92915050565b600060208284031215611f4557611f446127e4565b5b6000611f5384828501611ec2565b91505092915050565b600060208284031215611f7257611f716127e4565b5b6000611f8084828501611ed7565b91505092915050565b600060208284031215611f9f57611f9e6127e4565b5b600082013567ffffffffffffffff811115611fbd57611fbc6127df565b5b611fc984828501611eec565b91505092915050565b600080600060608486031215611feb57611fea6127e4565b5b600084013567ffffffffffffffff811115612009576120086127df565b5b61201586828701611eec565b935050602084013567ffffffffffffffff811115612036576120356127df565b5b61204286828701611eec565b925050604061205386828701611ec2565b9150509250925092565b60008060008060808587031215612077576120766127e4565b5b600085013567ffffffffffffffff811115612095576120946127df565b5b6120a187828801611eec565b945050602085013567ffffffffffffffff8111156120c2576120c16127df565b5b6120ce87828801611eec565b93505060406120df87828801611ec2565b92505060606120f087828801611f1a565b91505092959194509250565b600060208284031215612112576121116127e4565b5b600061212084828501611f1a565b91505092915050565b60006121358383612159565b60208301905092915050565b600061214d8383612177565b60208301905092915050565b61216281612657565b82525050565b61217181612657565b82525050565b61218081612657565b82525050565b6000612191826125de565b61219b81856125f6565b93506121a6836125ce565b8060005b838110156121d75781516121be8882612129565b97506121c9836125e9565b9250506001810190506121aa565b5085935050505092915050565b60006121ef826125de565b6121f98185612607565b9350612204836125ce565b8060005b8381101561223557815161221c8882612141565b9750612227836125e9565b925050600181019050612208565b5085935050505092915050565b61224b81612669565b82525050565b600061225e602683612612565b9150612269826127fa565b604082019050919050565b6000612281601883612612565b915061228c82612849565b602082019050919050565b60006122a4601783612612565b91506122af82612872565b602082019050919050565b60006122c7602e83612612565b91506122d28261289b565b604082019050919050565b60006122ea602083612612565b91506122f5826128ea565b602082019050919050565b600061230d601783612612565b915061231882612913565b602082019050919050565b6000612330601783612612565b915061233b8261293c565b602082019050919050565b6000612353601b83612612565b915061235e82612965565b602082019050919050565b6000612376601583612612565b91506123818261298e565b602082019050919050565b61239581612695565b82525050565b60006123a782846121e4565b915081905092915050565b60006020820190506123c76000830184612168565b92915050565b600060208201905081810360008301526123e78184612186565b905092915050565b600060808201905081810360008301526124098187612186565b9050818103602083015261241d8186612186565b905061242c6040830185612168565b612439606083018461238c565b95945050505050565b60006020820190506124576000830184612242565b92915050565b6000602082019050818103600083015261247681612251565b9050919050565b6000602082019050818103600083015261249681612274565b9050919050565b600060208201905081810360008301526124b681612297565b9050919050565b600060208201905081810360008301526124d6816122ba565b9050919050565b600060208201905081810360008301526124f6816122dd565b9050919050565b6000602082019050818103600083015261251681612300565b9050919050565b6000602082019050818103600083015261253681612323565b9050919050565b6000602082019050818103600083015261255681612346565b9050919050565b6000602082019050818103600083015261257681612369565b9050919050565b6000612587612598565b9050612593828261269f565b919050565b6000604051905090565b600067ffffffffffffffff8211156125bd576125bc6127a6565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061262e82612695565b915061263983612695565b92508282101561264c5761264b612719565b5b828203905092915050565b600061266282612675565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6126a8826127e9565b810181811067ffffffffffffffff821117156126c7576126c66127a6565b5b80604052505050565b60006126db82612695565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561270e5761270d612719565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f696e76616c6964206f70657261746f7220616464726573730000000000000000600082015250565b7f6f70657261746f7220616c726561647920657869737473000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f61646472657373206973206e6f74206f70657261746f72000000000000000000600082015250565b7f6f70657261746f7220646f6573206e6f74206578697374000000000000000000600082015250565b7f63616e27742072656d6f7665206f776e6572206f70657261746f720000000000600082015250565b7f6d656d62657220646f6573206e6f742065786973740000000000000000000000600082015250565b6129c081612657565b81146129cb57600080fd5b50565b6129d781612695565b81146129e257600080fd5b5056fea26469706673582212207c96410ea52141c67b6cc449507d0881b130bda8a498a44fa325bd8b4b40905f64736f6c63430008070033";

export class NetworkRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NetworkRegistry> {
    return super.deploy(overrides || {}) as Promise<NetworkRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NetworkRegistry {
    return super.attach(address) as NetworkRegistry;
  }
  connect(signer: Signer): NetworkRegistry__factory {
    return super.connect(signer) as NetworkRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NetworkRegistryInterface {
    return new utils.Interface(_abi) as NetworkRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NetworkRegistry {
    return new Contract(address, _abi, signerOrProvider) as NetworkRegistry;
  }
}