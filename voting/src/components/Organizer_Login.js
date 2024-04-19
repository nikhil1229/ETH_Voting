
import React, { useState } from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom/client';
import Organizer_dash from './Organizer_dash';
import Getweb3 from './Getweb3'
const votingABI=require('./Votingcon.json');
const Organizer_Login=()=>{



    const [chainaddress,setchainaddress]=useState("");
    const [chaininstance,setinstance]=useState();
    



    async function orgdash(){

        try{
            console.log('hello')
            const web3=await Getweb3();
            const wallet_addresses=await web3.eth.requestAccounts();
            const walletbalance=await web3.eth.getBalance(wallet_addresses[0]);
            console.log(walletbalance);
            const walletbalance_inEth=Math.round(web3.utils.fromWei(walletbalance)*1000)/1000;
            console.log(walletbalance_inEth);
            //document.getElementById("connet_wallet").innerHTML='connected';
            //setclicked("disabled");
            const net_id=    await web3.eth.net.getId();
            console.log('injected web3 detected',wallet_addresses,net_id);
            const deployednetwork=await votingABI.networks[net_id];
            const instance=new web3.eth.Contract(
                votingABI.abi,deployednetwork.address
            );
    
                await setchainaddress(wallet_addresses[0]);
                await setinstance(instance);
    
    
    
    
                const thank = ReactDOM.createRoot(document.getElementById('orglog'));
        
                thank.render(<React.StrictMode><Organizer_dash   chainaddress={wallet_addresses[0]} chaininstance={instance}   /></React.StrictMode>);
            }catch(error){
                console.log(error);
            }
    
        

        
         





    }





return(

<div >


<div className="container bg-white my-5 p-3 rounded-5 myback2" id="orglog">


<div >
    <form action="">

    


         

         <div className='row my-3 p-3 justify-content-center'>
    <button className="btn btn-success " type="button" onClick={()=>{orgdash()}} style={{width:"120px",fontSize:"25px"}}>Connect</button>
    </div>


    </form>


</div>




</div>







</div>










);







};

export default Organizer_Login;