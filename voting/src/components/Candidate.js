import React from 'react';
import {NavLink} from 'react-router-dom';

const Candidate=()=>{


    return(

        <div>

        <div className='container shadow-lg bg-white rounded-5 p-3 mt-5 myback2'>

        <div className='row display-1 justify-content-center my-3'> <p className='text-center text-decoration-underline'>Candidate</p></div>
        <div className='row justify-content-center my-5 text-center'> 

        <NavLink to='/Candidate/Login' style={{cursor:"pointer"}}><button type='button' className='btn btn-lg btn-outline-dark border-4 border border-dark fw-bold' style={{width:"50%"}} > Candidate Login</button></NavLink>
        
        </div>

        <div className='row justify-content-center my-5 text-center'> 

        <NavLink to='/Candidate/Register' style={{cursor:"pointer"}}><button type='button' className='btn btn-lg btn-outline-dark border-4 border border-dark fw-bold' style={{width:"50%"}} > Candidate Register</button></NavLink>
        
        </div>




        </div>






        </div>




    )




};

export default Candidate;