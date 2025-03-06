import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios"
import { addFeed } from "../utils/feedSlice";
import {useEffect} from "react";
import UserCard from "./UserCard";


const Feed = ()=>{
    const feed = useSelector((store)=>store.feed);
    console.log(feed)
    const dispatch =useDispatch();  
    const getFeed = async()=>{
        if(feed) return 
        try{
            const res = await axios.get(BASE_URL + "/feed",{withCredentials:true})
            console.log(res)
            dispatch(addFeed(res?.data))
            
        }
    catch(err){
        console.log(err.message)
    }
    }
    useEffect(()=>{
   getFeed();
    },[]);

    return (feed && (     
    <div className="flex justify-center my-2">
        <UserCard  user={feed[0]} />
    </div>
    )
 );
}

export default Feed;