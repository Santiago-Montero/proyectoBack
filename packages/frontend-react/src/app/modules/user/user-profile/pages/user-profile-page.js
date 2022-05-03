import { useContext } from "react";
import UserContext from "../../../../context/User.context";
import UserProfile from "../components/user-profile";

const UserPageProfile = () => {
    const { user } = useContext(UserContext)
    return(
        <>
            <div className="box">
                { user ? <UserProfile  user={user} /> : <h2> Log in please ! </h2>}
            </div>
        </>
    )
}

export default UserPageProfile;