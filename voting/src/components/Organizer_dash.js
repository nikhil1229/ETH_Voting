

import React, { useState } from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom/client';
import Candidate_Register from './Candidate_Register';


 const Organizer_dash=(props)=> {

  const [winner,setwinner]=useState("")
  const [votes,setvotes]=useState(0)
  const [candi,setcandi]=useState("")
    

 
     function get_Result(){

      props.chaininstance.methods.get_Result().call().then((res)=>{

          console.log(res[0]);
          setwinner(res[1]);
           setvotes(res[0]);

          // let x=document.getElementById("winner");
          // x.innerHTML="winner : "+res.data.winner+" votes: "+res.data.votes;

          let x=document.getElementById("winner");
          x.innerHTML='';
            let div1=document.createElement('div');
            let p1=document.createElement('p');
            p1.innerHTML='Winner : '+res[1];
            let p2=document.createElement('p');
            p2.innerHTML='votes : '+res[0];




            div1.appendChild(p1);
            div1.appendChild(p2);
            x.appendChild(div1);

          

        }).then((data)=>{alert("the results are calculated ...");})

        

    }



    function start_voting(){

        console.log("started");

      //  axios.post('http://localhost:5000/org', {
      //       chainaddress:props.chainaddress,
      //       chainkey:props.chainkey,
      //       mode:1,
            
      //   })
      props.chaininstance.methods.start_voting().send({from:props.chainaddress}).then((data)=>{console.log(data);alert("the voting started");});

        

    }


   function end_voting(){

    //  axios.post('http://localhost:5000/org', {
    //         chainaddress:props.chainaddress,
    //         chainkey:props.chainkey,
    //         mode:2,
            
    //     })
    props.chaininstance.methods.end_voting().send({from:props.chainaddress}).then((data)=>{console.log(data);alert("the voting ended");});

        

    }

    const addcandi_div=()=>{
      let adder=ReactDOM.createRoot(document.getElementById('add_div'));
      adder.render(<React.StrictMode> <Candidate_Register chainaddress={props.chainaddress} chaininstance={props.chaininstance}></Candidate_Register></React.StrictMode>)
    }



    // async function add_candidate(para){
    //   console.log(para);
    //   console.log(props.chainaddress);
    //   await props.chaininstance.methods.addCandidates(para).send({from:props.chainaddress}).then(data=>console.log(data));
    //   await props.chaininstance.methods.get_candidates_list().call().then(data=>console.log(data));
    //   alert("Added "+para+" Successfully");
    // }


 




  return (
    <div>

    <div className='container my-3'>


    <div className='row  p-5 d-flex justify-content-center text-center '><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width:"250px", wordWrap:"break-word"}} onClick={()=>{start_voting()}}>Start Voting</button></div>
    
    <div className='row  p-5 d-flex justify-content-center text-center '><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width:"250px", wordWrap:"break-word"}} onClick={()=>{end_voting()}}>End Voting</button></div>

    <div>
    <div className='row  p-5 d-flex justify-content-center text-center '><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width:"250px", wordWrap:"break-word"}} onClick={()=>{addcandi_div()}}>Add Candidate</button></div>
    <div className='row  p-5 d-flex justify-content-center ' id="add_div"> </div>
    </div>
    <div className='row  p-5 d-flex justify-content-center text-center '><button type='button' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width:"250px", wordWrap:"break-word"}} onClick={()=>{get_Result()}}>Get Result</button></div>
    <div id='winner' className='row p-1 d-flex justify-content-center text-center bg-info display-3' ></div>
    
    
    </div>







    </div>
  );
}




export default Organizer_dash;
