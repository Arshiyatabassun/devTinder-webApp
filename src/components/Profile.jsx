import { useSelector } from "react-redux";
import ProfileEdit from "./ProfileEdit";

const Profile =()=>{
    const user =useSelector((store)=>store.user)
    return (user && ( //it will only ne call when the user is present
       <>
     <ProfileEdit user={user} />
        </>
    )
)
}
export default Profile;