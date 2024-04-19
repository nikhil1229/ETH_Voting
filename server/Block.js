var Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');



var SmartContractAddress = "0xc4330abE326C79D488ee1679B00c0B29f6b474B8";
var ABI=require("./build/contracts/Demo.json");
var SmartContractABI =ABI["abi"];
var address = "0x6e719366F51826130D84fcF5EE1BAc69e0a6CC11"
var privatekey = "d8608a9d54f7ed3a321e9dfff32f2f900d3a3fce9989b4afaf5c4b303c01e059";
var rpcurl = "HTTP://127.0.0.1:7545";

 module.exports={sendData: async function (para){

  console.log("in function");
  var provider = new Provider(privatekey, rpcurl);
  var web3 = new Web3(provider)
  var myContract = new web3.eth.Contract(SmartContractABI, SmartContractAddress);
  var oldvalue = await myContract.methods.readData().call();
  console.log("oldvalue", oldvalue); 


  var receipt = await myContract.methods.updateData(para).send({ from: address });
  

  var newvalue = await myContract.methods.readData().call();
  console.log("newvalue", newvalue);

  console.log("done with all things");

}

// sendData(900).then(()=>{
//   console.log("end");
//   setTimeout((function() { 
//     return process.exit(0);
//     }), 1000);
  
// })

 }
