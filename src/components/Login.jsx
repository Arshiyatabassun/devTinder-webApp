import { use, useState } from "react";
import {useDispatch} from "react-redux";
import axios from 'axios';
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login =()=>{
  

  
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]= useState("");
  const [emailId ,setEmailId]=useState("");
    const [password,setPassword]=useState("");
    const [isLoginForm,setIsLoginForm]=useState(false)
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

    const handleSignUp =async()=>{
      try{
const res = await axios.post(BASE_URL + "/signup" , {firstName,lastName,emailId,password} ,{withCredentials:true})

console.log(res.data)
dispatch(addUser(res?.data));
return navigate("/profile")
      }catch(err){
        setError(err?.response?.data || "somting went wrong")
      }
    }
    return (
        <div className="my-10 flex justify-center">
    <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title  justify-center">{isLoginForm ? "Login" :"SignUp"}</h2>
    <div>
    {!isLoginForm && <>
    <div> 
   <fieldset className="fieldset">
  <legend className="fieldset-legend ">First Name:</legend>
  <input type="text" value={firstName} className="input" onChange={(e)=> setFirstName(e.target.value)} />
 
</fieldset>

    </div>
    <div>

    <fieldset className="fieldset">
  <legend className="fieldset-legend ">Last Name:</legend>
  <input type="text" value={lastName} className="input" onChange={(e)=> setLastName(e.target.value)} />
 
</fieldset>
    </div>
</>
    }
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
    </div>
   

 <p className="text-red-500">{error}</p>
 
    <div className="card-actions justify-center">
      <button className="btn btn-primary my-2" onClick={isLoginForm ? handleLogin : handleSignUp}>{isLoginForm ? "Login" : "SignUp"}</button>
    </div>
    <p className="m-auto cursor-pointer py-2" onClick={()=>setIsLoginForm((value)=>!value)}>{isLoginForm ? "New User? SignUp Here" : "Existing User?Login Here"}</p>
  
</div>
        </div>
        </div>
    )
}
export default Login;