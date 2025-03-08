import { useState } from "react";
import {useDispatch} from "react-redux";
import axios from 'axios';
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login =()=>{
    const [emailId ,setEmailId]=useState();
    const [password,setPassword]=useState();
    const [error,setError] =useState("")
    const dispatch =useDispatch();
    const navigate =useNavigate();

   const handleLogin= async()=>{
    try{
        const res = await axios.post(BASE_URL + "/login",{
            emailId,
            password,
        },{withCredentials:true});
        // console.log(res.data)
        dispatch(addUser(res.data));
         return navigate("/")
    }catch(err){
        // console.log(err)
        setError(err?.response?.data || "somting went wrong")
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
 <p className="text-red-500">{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary my-2" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
        </div>
    )
}
export default Login;