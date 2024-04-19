import React, { Component } from 'react';
import  {useState}  from "react";
import Corousel from 'react-elastic-carousel';
import ThankYou from './ThankYou';
import * as ReactDOM from 'react-dom/client';


import CourItem from './CourItem';

import axios from 'axios';
import { parsePath } from 'react-router-dom';

const Voter_Dash=(props)=> {


 const [Thank,setThank]=useState(false) 
const [contin,setcontin]=useState(false)
const [Candi_id,setCandi_id]=useState(0);
const [Candi_name,setCandi_name]=useState("")
const [choice,setchoice]=useState(0)

    
let breakPoint=[


{width:1,itemsToShow:1},
{width: 550,itemsToShow:2},
{width: 768,itemsToShow:3},
{width: 1200,itemsToShow:4}


];





let  items=[
  // {id:0 , url:"./images/nota.jpg" ,party:"NOTA" , motto:"NOTA" ,Cname:"NOTA" },
  // {id:1 , url:"./images/logo2.png" ,party:"A" , motto:"this is my motto" ,Cname:"u" },
  // {id:2 , url:"./images/logo1.png",party:"B" , motto:"this is my motto" ,Cname:"v"},
  // {id:3 , url:"./images/logo3.png",party:"C", motto:"this is my motto" ,Cname:"w"},
  // {id:4 , url:"./images/logo2.png",party:"D", motto:"this is my motto" ,Cname:"x" },
  // {id:5 , url:"./images/logo1.png",party:"E", motto:"this is my motto" ,Cname:"y" },
  // {id:6 , url:"./images/logo3.png",party:"F", motto:"this is my motto" ,Cname:"z" }





  ]
  items=props.items;
  console.log("daf")
console.log(props.items)
  const get_items=()=>{

    console.log(items)
    setcontin(true)



  }


  


  function do_vote(para){
    para=parseInt(para)
    console.log(para)
    
    // axios.post('http://localhost:5000/org', {
      
      //         chainaddress:props.address,
      //         connect:CircularJSON.stringify(props.connect),
      //         mode:4,
      //         choice:para,
      //     })
      //props.connect.methods.get_status().send({from: props.address[0]}).then(data=>console.log(data));
      props.connect.methods.do_vote(para).send({from: props.address[0]}).then((data)=>{console.log(data);
        // const thankpage = ReactDOM.createRoot(document.getElementById('thankpage'));
        alert ("your vote has been recorded");
        // thankpage.render(<React.StrictMode><ThankYou></ThankYou></React.StrictMode>)

        setThank(true);

    
    });
  }


  console.log(props.address[0])
  //props.connect.methods.get_Result().call({from:props.address[0]}).then(data=>console.log(data))
    


   
    return (
        <div className='container-fluid ' id='thankpage'>



      {(!contin) &&(!Thank) && 
        <div style={{fontSize:"30px"}} className='container bg-light shadow-lg rounded-5 my-5 myback2 text-center' >

        <p>Please use Your Vote Wisely</p>
        <button type='button' className='btn btn-success fw-bold mx-5' style={{width:"120px",fontSize:'25px'}} onClick={(e)=>{get_items()}}>continue</button>


        </div>
      }






        { (contin ) && (!Thank) &&



          <div>

        <div className='row p-3 bg-light my-3 display-6 fw-bold justify-content-center shadow-lg'>
            Select a candidate to vote

            

            


        </div>

        <div className='row p-3'>

        <div className='container-fluid' style={{width:"80%"}}>
        

        
        <Corousel breakPoints={breakPoint}>
        
       {items.map(item=><div className='container' key={item._id}>

        <div className="card" style={{width :"18rem"}}>


        <img src={"data:"+item.img.contentType+";base64,"+ btoa(String.fromCharCode.apply(null, new Uint8Array(item.img.data.data)))} alt="" style={{width:"18rem", height:"18rem"}} />

           <div className="card-body">
            <h5 className="card-title">{item.Fname}</h5>
            <p className="card-text">{item.Lname}</p>
           </div>




           <ul className="list-group list-group-flush">
    <li className="list-group-item"> <p className='fw-bold'> PartName : {item.Party}</p></li>
    <li className="list-group-item"><p className='fw-bold'> PartName : {item.Party}</p></li>
    <li className="list-group-item"><button type='button' className='btn btn-lg btn-outline-dark ' onClick={()=>{setchoice(items.indexOf(item));setCandi_name(item.Fname+" "+item.Lname)}}  > Select</button></li>
            </ul>


        </div>
        
        </div>)}


        </Corousel>


        </div>
</div>

<div className='row m-5 '>
  <div className='container bg-light fw-bold rounded-4 shadow-lg  '>
  <div className='row p-1 m-5 justify-content-center' style={{fontSize:"30px" , fontFamily:"monospace" }}>
            you have selected : {choice}
            

          </div>
          <div className='row p-1 m-5 justify-content-center' style={{fontSize:"30px" , fontFamily:"monospace" }}>
            
            Candidate Name : {Candi_name}

          </div>

  <div className='row p-1 m-5 justify-content-center'>

          <button type='submit' className='btn btn-lg btn-outline-success fw-bold' style={{width:'150px' , fontSize:"25px"}} onClick={()=>{do_vote(choice)}}>Submit</button>

  </div>        


  </div>
</div>

        
          

        
        
        
</div>
        
        }


{ (contin) && (Thank) && <div>




  
</div>





}


        
        
        </div>
        
    )
  
}

export default Voter_Dash;


