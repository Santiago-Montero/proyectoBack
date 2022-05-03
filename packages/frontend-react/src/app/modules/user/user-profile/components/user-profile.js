
const UserProfile = ({user}) => {
    return(
        <>  
        <div className="profile">
            <h1> {user.username} </h1>
            <div className="profile-img">
                <img src={user.avatar}/>
            </div>
        </div>
        </>
    )
}

export default UserProfile;