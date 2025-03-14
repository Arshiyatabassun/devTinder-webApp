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
            console.log(res.data.data)
        }catch(err){
            console.log(err.message)
        }
       
    }
    useEffect(()=>{
        fetchConnections();
    },[])

    if(!connections) return ;
    if(connections.length === 0) return <>
    <h1 className="mx-auto my-10 justify-center flex text-2xl">No connections found</h1>
    </>
    return(
        <div className="text-center my-10">
        <h1 className="text-bold text-white text-3xl ">Connections</h1>
        {/* //show the detaills of connections */}
        {connections.map((connection)=>{
  const { _id,firstName,lastName,age,gender,photoUrl,about}=connection;
        
        return (
            <div key={_id} className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
              
              <div> <img alt="photo"className="w-20 h-20 rounded-full" src={photoUrl}/> </div>
            <div className="text-left mx-4">
            <h2 className="font-bold text-xl">{firstName + "  "+ lastName}</h2>
            { age && gender && <p>{age + ", " + gender}</p>}
            <p>{about}</p>
            </div>
            </div>
           
            )})}
        </div>
    )
}
export default Connections;