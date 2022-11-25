/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TicketsT, TicketsTInterface } from "../../contracts/TicketsT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ticketInitialPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalTickets",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_ticketContract",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "_ticketsTokenUri",
        type: "string[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "uint256",
        name: "recieved",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256",
      },
    ],
    name: "ticketEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "attendees",
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
    inputs: [],
    name: "buyTicket",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTicketPrice",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "soldTickets",
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
    inputs: [],
    name: "ticketsAvailable",
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
  "0x60806040523480156200001157600080fd5b506040516200128b3803806200128b833981810160405281019062000037919062000653565b620000576200004b620000c960201b60201c565b620000d160201b60201c565b836002819055508260018190555081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060059080519060200190620000be92919062000195565b505050505062000749565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054828255906000526020600020908101928215620001e9579160200282015b82811115620001e8578251829080519060200190620001d7929190620001fc565b5091602001919060010190620001b6565b5b509050620001f891906200028d565b5090565b8280546200020a9062000713565b90600052602060002090601f0160209004810192826200022e57600085556200027a565b82601f106200024957805160ff19168380011785556200027a565b828001600101855582156200027a579182015b82811115620002795782518255916020019190600101906200025c565b5b509050620002899190620002b5565b5090565b5b80821115620002b15760008181620002a79190620002d4565b506001016200028e565b5090565b5b80821115620002d0576000816000905550600101620002b6565b5090565b508054620002e29062000713565b6000825580601f10620002f6575062000317565b601f016020900490600052602060002090810190620003169190620002b5565b5b50565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b62000343816200032e565b81146200034f57600080fd5b50565b600081519050620003638162000338565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003968262000369565b9050919050565b620003a88162000389565b8114620003b457600080fd5b50565b600081519050620003c8816200039d565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200041e82620003d3565b810181811067ffffffffffffffff8211171562000440576200043f620003e4565b5b80604052505050565b6000620004556200031a565b905062000463828262000413565b919050565b600067ffffffffffffffff821115620004865762000485620003e4565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff821115620004bf57620004be620003e4565b5b620004ca82620003d3565b9050602081019050919050565b60005b83811015620004f7578082015181840152602081019050620004da565b8381111562000507576000848401525b50505050565b6000620005246200051e84620004a1565b62000449565b9050828152602081018484840111156200054357620005426200049c565b5b62000550848285620004d7565b509392505050565b600082601f83011262000570576200056f620003ce565b5b8151620005828482602086016200050d565b91505092915050565b6000620005a26200059c8462000468565b62000449565b90508083825260208201905060208402830185811115620005c857620005c762000497565b5b835b818110156200061657805167ffffffffffffffff811115620005f157620005f0620003ce565b5b80860162000600898262000558565b85526020850194505050602081019050620005ca565b5050509392505050565b600082601f830112620006385762000637620003ce565b5b81516200064a8482602086016200058b565b91505092915050565b6000806000806080858703121562000670576200066f62000324565b5b6000620006808782880162000352565b9450506020620006938782880162000352565b9350506040620006a687828801620003b7565b925050606085015167ffffffffffffffff811115620006ca57620006c962000329565b5b620006d88782880162000620565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200072c57607f821691505b60208210811415620007435762000742620006e4565b5b50919050565b610b3280620007596000396000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b1461012a578063a31aa84b14610155578063edca914c14610180578063f2fde38b1461018a5761007b565b80631825323414610080578063396dc854146100ab578063715018a6146100e857806387bb7ae0146100ff575b600080fd5b34801561008c57600080fd5b506100956101b3565b6040516100a291906105fb565b60405180910390f35b3480156100b757600080fd5b506100d260048036038101906100cd9190610679565b6101ca565b6040516100df91906105fb565b60405180910390f35b3480156100f457600080fd5b506100fd6101e2565b005b34801561010b57600080fd5b506101146101f6565b60405161012191906105fb565b60405180910390f35b34801561013657600080fd5b5061013f610200565b60405161014c91906106b5565b60405180910390f35b34801561016157600080fd5b5061016a610229565b60405161017791906105fb565b60405180910390f35b61018861022f565b005b34801561019657600080fd5b506101b160048036038101906101ac9190610679565b610414565b005b60006003546001546101c591906106ff565b905090565b60046020528060005260406000206000915090505481565b6101ea610498565b6101f46000610516565b565b6000600254905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60035481565b600254341015610274576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026b90610790565b60405180910390fd5b600061027e6101b3565b116102be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b5906107fc565b60405180910390fd5b60016003546102cd919061081c565b600381905550600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166303543fea336003546005600160035461032691906106ff565b8154811061033757610336610872565b5b906000526020600020016040518463ffffffff1660e01b815260040161035f93929190610997565b600060405180830381600087803b15801561037957600080fd5b505af115801561038d573d6000803e3d6000fd5b50505050600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fe87c71c384b3fcb26744a2bd98998ed1e229eb1f791bc41918c8636f26d8ad143460035460405161040a9291906109d5565b60405180910390a1565b61041c610498565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561048c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048390610a70565b60405180910390fd5b61049581610516565b50565b6104a06105da565b73ffffffffffffffffffffffffffffffffffffffff166104be610200565b73ffffffffffffffffffffffffffffffffffffffff1614610514576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050b90610adc565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b6105f5816105e2565b82525050565b600060208201905061061060008301846105ec565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106468261061b565b9050919050565b6106568161063b565b811461066157600080fd5b50565b6000813590506106738161064d565b92915050565b60006020828403121561068f5761068e610616565b5b600061069d84828501610664565b91505092915050565b6106af8161063b565b82525050565b60006020820190506106ca60008301846106a6565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061070a826105e2565b9150610715836105e2565b925082821015610728576107276106d0565b5b828203905092915050565b600082825260208201905092915050565b7f6c6f776572207468616e2063757272656e742070726963650000000000000000600082015250565b600061077a601883610733565b915061078582610744565b602082019050919050565b600060208201905081810360008301526107a98161076d565b9050919050565b7f736f6c64206f7574000000000000000000000000000000000000000000000000600082015250565b60006107e6600883610733565b91506107f1826107b0565b602082019050919050565b60006020820190508181036000830152610815816107d9565b9050919050565b6000610827826105e2565b9150610832836105e2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610867576108666106d0565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806108e857607f821691505b602082108114156108fc576108fb6108a1565b5b50919050565b60008190508160005260206000209050919050565b60008154610924816108d0565b61092e8186610733565b94506001821660008114610949576001811461095b5761098e565b60ff198316865260208601935061098e565b61096485610902565b60005b8381101561098657815481890152600182019150602081019050610967565b808801955050505b50505092915050565b60006060820190506109ac60008301866106a6565b6109b960208301856105ec565b81810360408301526109cb8184610917565b9050949350505050565b60006040820190506109ea60008301856105ec565b6109f760208301846105ec565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610a5a602683610733565b9150610a65826109fe565b604082019050919050565b60006020820190508181036000830152610a8981610a4d565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610ac6602083610733565b9150610ad182610a90565b602082019050919050565b60006020820190508181036000830152610af581610ab9565b905091905056fea2646970667358221220121aa3b40bcf725778f1cba40d686b1eab07ee2171ce6ac07ca6b91fe9d33f2f64736f6c63430008090033";

type TicketsTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TicketsTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TicketsT__factory extends ContractFactory {
  constructor(...args: TicketsTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ticketInitialPrice: PromiseOrValue<BigNumberish>,
    _totalTickets: PromiseOrValue<BigNumberish>,
    _ticketContract: PromiseOrValue<string>,
    _ticketsTokenUri: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TicketsT> {
    return super.deploy(
      _ticketInitialPrice,
      _totalTickets,
      _ticketContract,
      _ticketsTokenUri,
      overrides || {}
    ) as Promise<TicketsT>;
  }
  override getDeployTransaction(
    _ticketInitialPrice: PromiseOrValue<BigNumberish>,
    _totalTickets: PromiseOrValue<BigNumberish>,
    _ticketContract: PromiseOrValue<string>,
    _ticketsTokenUri: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _ticketInitialPrice,
      _totalTickets,
      _ticketContract,
      _ticketsTokenUri,
      overrides || {}
    );
  }
  override attach(address: string): TicketsT {
    return super.attach(address) as TicketsT;
  }
  override connect(signer: Signer): TicketsT__factory {
    return super.connect(signer) as TicketsT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TicketsTInterface {
    return new utils.Interface(_abi) as TicketsTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TicketsT {
    return new Contract(address, _abi, signerOrProvider) as TicketsT;
  }
}
