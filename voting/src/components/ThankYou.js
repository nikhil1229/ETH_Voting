import React from 'react'
import {NavLink} from 'react-router-dom';

const ThankYou=()=> {
  return (
    <div>
    <div className='container mt-5 rounded-5 shadow-lg myback2 '>

    <div className='display-1 text-center' > Thank You</div>


    <div className='row justify-content-center my-5 text-center'> 

         <NavLink to='/' style={{cursor:"pointer"}}><button type='button' className='btn btn-lg btn-outline-dark border-4 border border-dark fw-bold ' style={{width:"50%"}} >continue</button>
        </NavLink>
        </div>

    

    </div>
    
    
    </div>
  )
}

export default ThankYou