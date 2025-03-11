import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeFeed } from "../utils/feedSlice";


const UserCard =({user})=>{
  console.log(user)
  const {_id,firstName, lastName ,age ,about,gender,photoUrl}= user;
  const dispatch=useDispatch();

    const handleSendRequest = async(status,userId) =>{
      
      try{
 //if werea doing POST call it is commulsory to added an {} object
 const res = await axios.post(BASE_URL + "/request/send/"+ status +"/" + userId,{},{withCredentials:true})
 console.log(res.data)
 dispatch(removeFeed(userId))
      }catch(err){
        console.log(err.message)
      }
     

    }
    return (
        <div className="card  rounded-2xl mx-20 bg-base-200 w-90 my-6 shadow-2xl  text-base-200  bg-blue-50" >
 
  <figure>
    <img
      alt="photoUrl" 
      src={user.photoUrl} />
  </figure>
 
  <div className="card-body">
    <h2 className="card-title font-serif">{firstName +"  "+lastName}</h2>
    {age && gender && <h2>{age + ", "+ gender}</h2>}
    <span>{about}</span>
    {/* <p>{skills}</p> */}
  
    <div className="card-actions justify-end my-4">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick ={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
   </div>
   </div>
    )
}

export default UserCard;