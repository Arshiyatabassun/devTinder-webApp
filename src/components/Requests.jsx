import { BASE_URL } from "../utils/constants";
import axios from "axios";
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = ()=>{
const requests = useSelector((store)=>store.requests)
console.log(requests)
    const dispatch =useDispatch();
    const getRequests =async ()=>{
        try{
            const res = await axios.get(BASE_URL +"/user/requests/recieved",{
                withCredentials:true
            })
            dispatch(addRequests(res?.data?.data))
            console.log(res)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        getRequests()
    },[])

    if(!requests) return;
    if(requests.length === 0) return <> <h1>NO Connection Requests found</h1></>
    return(
        <div className=" text-center my-10">
        <h1 className="text-bold text-3xl">Connections Requests</h1>
        {/* //show the detaills of connections */}
        {requests.map((request)=>{
  const { _id,firstName,lastName,age,gender,photoUrl,about}=request.fromUserId;
        
        return (
            <div key={_id} className=" flex m-4 p-4 rounded-lg bg-base-300  w-2/3 mx-auto">
              
              <div> <img alt="photo"className="w-20 h-20 rounded-full" src={photoUrl}/></div> 
            <div className=" text-left mx-4">
            <h2 className="  font-bold text-xl">{firstName + " "+ lastName}</h2>
            { age && gender && <p>{age + ", " + gender}</p>}
            <p>{about}</p>
            
                </div>
            
              <div>
              <button className="btn btn-outline btn-primary mx-2">Rejected</button>
       <button className="btn btn-outline btn-secondary mx-2">Accept</button> 
              </div>
              </div>
               )
            })}
               
             
            
          
          
        </div>
    )
}

export default Requests;