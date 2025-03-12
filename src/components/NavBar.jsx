import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useState } from "react";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  const [showToast, setShowToast] = useState("");
  // console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async (e) => {
    e.preventDefault();  // clear the data in redux store
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        return navigate("/login");
      },1000);
     
    } catch (err) {
      console.log(err.message);
      //error page redirect err page
    }
  };
  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            🚀DevTinder
          </Link>
        </div>
        {user && (
          <div className="flex gap-2">
            <p>Welcome ,{user.firstName}</p>
            <div className="dropdown dropdown-end mx-6 flex item-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-20 rounded-full">
                  <img alt="photoUrl" src={user.photoUrl} />
                </div>
              </div>
              <div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 my-12 w-52 p-2 shadow"
              >
                
                  <Link to="/profile">
                    Profile
                  </Link>
                
                <Link to="/connections">Connections</Link>
                <Link to="/requests">Requests</Link>
              <Link to="/logout" onClick={handleLogout}>
              Logout    </Link>
              </ul>
             
            </div>
            <div className="toast toast-top toast-center">
              {showToast && (
                <div className="alert alert-success">
                  <span> Loggedout Successfully</span>
                </div>
              )}
              </div>
              
            </div>
            
          </div>
          
        )}
      
      </div>
      
    </>
    
  );
};

export default NavBar;
