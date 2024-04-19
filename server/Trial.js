const { json } = require('body-parser');
const obj=require( './Voting_block.js');

obj.set_User("0x9bbE232372824326cF5203461Eee4EC39ba2dff1","953628f0f78fbed57fbb0884bc293c855b359eba21efffa30f23a3c4d150bbca").then(()=>{


  console.log("end");
  obj.get_Result().then(data=>console.log(JSON.parse(data)));
  setTimeout((function() { 
    return process.exit(0);
    }), 1000);
});


// obj.addCandidates("Raj").then(()=>{
//     console.log("end");
//     setTimeout((function() { 
//       return process.exit(0);
//       }), 1000);
//   });