import { useState } from "react";
import axios from 'axios';

const Login =()=>{
    const [emailId ,setEmailId]=useState("simran@gmail.com");
    const [password,setPassword]=useState("Simran@123");

   const handleClick= async()=>{
    try{
        const res = await axios.post("http://localhost:3000/login",{
            emailId,
            password,
        },{withCredentials:true});
    }catch(err){
        console.log(err)
    }

    };
    return (
        <div className="my-10 flex justify-center">
    <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title  justify-center">Login</h2>
    <div>
    <fieldset className="fieldset">
  <legend className="fieldset-legend ">Email ID:</legend>
  <input type="text" value={emailId} className="input" onChange={(e)=> setEmailId(e.target.value)} />
 
</fieldset>

    </div>
    <div>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Password:</legend>
  <input type="text"  value ={password} onChange ={(e)=>setPassword(e.target.value)} className="input" />
 
</fieldset>

    </div>

    <div className="card-actions justify-center">
      <button className="btn btn-primary my-2" onClick={handleClick}>Login</button>
    </div>
  </div>
</div>
        </div>
    )
}
export default Login;