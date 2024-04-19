import React from "react";


const Candidate_Login=()=>{

return(
    <div style={{fontSize:"30px"}}>


<div className='container bg-light shadow-lg rounded-5 my-5 myback2 '>

<div className='row p-3 my-3 display-3'>
    <p className="fw-bold text-center ">Candidate Login </p>
</div>
<form action="">
<div className='row p-3 my-3'>
<div className='form-group'>
    <label htmlFor="Clogin_aadhar" className='form-label fw-bold'>Aadhar:</label>
    <input type="text" id="Clogin_aadhar" className='form-control form-control-lg border border-3 border-dark' placeholder='Enter your Aadhar Number ' required pattern="[0-9]{12}"/>
</div></div>


<div className='row p-3 my-3'>
<div className='form-group'>
    <label htmlFor="Clogin_mobile" className='form-label fw-bold'>Mobile Number:</label>
    <input type="tel" id="Clogin_mobile" className='form-control form-control-lg border border-3 border-dark' placeholder='Enter your Mobile Number'/>
</div></div>

<div className='opt-verification'></div>

<div className='row p-3 my-3 justify-content-center '>
    <button type='submit' className='btn btn-success fw-bold' style={{width:"120px",fontSize:'25px'}}>Submit</button>
</div>

</form>





</div>








</div>


)




};

export default Candidate_Login;