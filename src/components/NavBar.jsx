import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const NavBar= ()=>{
const user=useSelector(store=>store.user)
// console.log(user);
const navigate = useNavigate()
const dispatch =useDispatch();
const handleLogout =async()=>{
  try{
    await axios.post(BASE_URL + "/logout",{},{withCredentials:true})
    dispatch(removeUser()) // clear the data in redux store
    return navigate("/login")
  }catch(err){
    console.log(err.message)
    //error page redirect err page

  
   
    
  }
  
}   
return (
        <>
            <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">👩‍💻DevTinder</Link>
  </div>
  {user && (
  <div className="flex gap-2">
    <p>Welcome, {user.firstName}</p>
    <div className="dropdown dropdown-end mx-6 flex justify-center">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        
        <div className="w-10 rounded-full">
          
          <img
            alt="user photoUrl"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to ="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <Link to="/connections">Connections</Link>
        <Link to="/requests">Requests</Link>
        <Link to ="/logout" onClick={handleLogout}>Logout</Link>
      </ul>
    </div>
  </div>
  )}

</div>
        </>
    )
 }

 export default NavBar;
