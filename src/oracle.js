import web3 from "./web3";

const address = "0xB3Aa3f9659660CE88B6607Bf85Fa2d82F95FDD94";

const abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes4",
        name: "symbol",
        type: "bytes4"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256"
      }
    ],
    name: "setStock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes4",
        name: "symbol",
        type: "bytes4"
      }
    ],
    name: "getStockPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes4",
        name: "symbol",
        type: "bytes4"
      }
    ],
    name: "getStockVolume",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(abi, address);
