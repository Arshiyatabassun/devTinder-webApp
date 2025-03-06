import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections =()=>{
    const connections = useSelector((store)=>store.connections)
    console.log(connections)
const dispatch =useDispatch();
    const fetchConnections = async ()=>{
        try{
            const res = await axios.get(BASE_URL + "/user/connections" ,{
                withCredentials:true,
            })
            dispatch(addConnection(res?.data?.data))
            console.log(res.data)
        }catch(err){
            console.log(err.message)
        }
       
    }
    useEffect(()=>{
        fetchConnections();
    },[])

    if(!connections) return ;
    if(connections.length === 0) return <>
    <h1>No connections found</h1>
    </>
    return(
        <div className="flex justify-center my-10">
        <h1 className="text-bold">Connection</h1>
        {/* //show the detaills of connections */}
        {connections.map((connection)=>{
  const {firstName,lastName,age,gender,photoUrl,about}=connection;
        
        return (
            <div>
              
              <div> <img alt="photo"className="w-20 h-20" src={photoUrl}/> </div>
            <div>
            <h2>{firstName + " "+ lastName}</h2>
            { age && gender && <p>{age + ", " + gender}</p>}
            <p>{about}</p>
            </div>
            </div>
           
            )})}
        </div>
    )
}
export default Connections;