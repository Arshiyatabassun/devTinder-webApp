import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from 'axios';
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const ProfileEdit =({user})=>{
const [firstName,setFirstName]=useState(user.firstName);
const [lastName,setLastName]=useState(user.lastName);
const [photoUrl,setPhotoUrl]=useState(user.photoUrl);
const [age,setAge]=useState(user.age || "");
const [gender,setGender]=useState(user.gender || "");
const [about,setAbout]=useState(user.about || "");

const [error,setError]= useState("");
const dispatch =useDispatch();
const [showToast,setShowToast]=useState(false)


    const saveProfile =async()=>{
        //clear Errors-clear existing errors
        // setError("");
        try{

            const res =await axios.patch(BASE_URL + '/profile/edit',{firstName,lastName,age,gender,photoUrl,about},{withCredentials:true})
            dispatch(addUser(res?.data?.data))
            setShowToast(true)
            setTimeout(()=>{
              setShowToast(false)
            },2000)
            
            console.log(res.data)
            
        }catch(err){
            setError(err?.response?.data)
        }
        
    }
    return (
        <div className="flex justify-center mx-10">
        <div className="my-10 flex justify-center">
        <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
        <h2 className="card-title  justify-center">Profile Edit</h2>
        <div>
        <fieldset className="fieldset">
        <legend className="fieldset-legend ">First Name:</legend>
        <input type="text" value={firstName} className="input" onChange={(e)=> setFirstName(e.target.value)} />
        
        </fieldset>
        
        </div>
        <div>
        <fieldset className="fieldset">
        <legend className="fieldset-legend">Last Name:</legend>
        <input type="text"  value ={lastName} onChange ={(e)=>setLastName(e.target.value)} className="input" />
        
        </fieldset>
        
        </div>
        <div>
        <fieldset className="fieldset">
        <legend className="fieldset-legend ">Photo URL:</legend>
        <input type="text" value={photoUrl} className="input" onChange={(e)=> setPhotoUrl(e.target.value)} />
        
        </fieldset>
        
        </div>
       

        <div>
        <fieldset className="fieldset">
        <legend className="fieldset-legend ">Gender:</legend>
        <input type="text" value={gender} className="input" onChange={(e)=>setGender(e.target.value)} />
        
        </fieldset>
       {/* <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">gender:</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>male</a></li>
    <li><a>female</a></li>
    <li><a>others</a></li>
  </ul>
  <input type="text" value={gender} className="input" onChange={(e)=>setGender(e.target.value)} />
        
</div> */}
        
        </div>
        
        <div>
        <fieldset className="fieldset">
        <legend className="fieldset-legend ">Age:</legend>
        <input type="text" value={age} className="input" onChange={(e)=> setAge(e.target.value)} />
        
        </fieldset>
        
        </div>
        <div>
        <fieldset className="fieldset">
        <legend className="fieldset-legend ">About:</legend>
        <input type="text" value={about} className="input" onChange={(e)=> setAbout(e.target.value)} />
        
        </fieldset>
        
        </div>
      

        <p className="text-red-500">{error}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary my-2" onClick={saveProfile} >Save Edit</button>
        </div>
        <div className="toast toast-top toast-center">
 
   { showToast &&
    <div className="alert alert-success">
    <span> Profile saved Successfully</span>
  </div>
   }
</div>
        </div>
        </div>      
            </div>
            <UserCard user={{firstName,lastName,photoUrl,gender,age,about}} />
            </div>
    )
}

export default ProfileEdit;


