
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const Body =()=>{
    return(
        <>
       <Navbar />
       <Outlet/>
        </>
    )
}
export default Body;