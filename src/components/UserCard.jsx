import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeFeed } from "../utils/feedSlice";


const UserCard =({user})=>{
  const dispatch=useDispatch();
    console.log(user)
    const {_id,firstName, lastName ,age ,about,gender ,photoUrl ,skills}= user;

    const handleSendRequest = async(status,userId)=>{
      try{
 //if werea doing POST call it is commulsory to added an {} object
 const res = await axios.post(BASE_URL + "/request/send"+ status +"/" + userId,{},{withCredentials:true})
 console.log(res.data)
 dispatch(removeFeed(userId))
      }catch(err){
        console.log(err.message)
      }
     

    }
    return (
        <div className="card bg-base-200 w-96 shadow-sm">
  <figure>
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="photo" /> */}
    <img
      src={user.photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName +", "+lastName}</h2>
    {age && gender && <p>{age + ", "+ gender}</p>}
    <p>{about}</p>
    <p>{skills}</p>
    <div className="card-actions justify-end my-4">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick ={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
    )
}

export default UserCard;