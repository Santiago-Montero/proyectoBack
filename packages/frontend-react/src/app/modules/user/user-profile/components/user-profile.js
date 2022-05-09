import Order from '../../../order/components/order';
import './user-profile.css'

const UserProfile = ({user, orders, msg}) => {
    return(
        <>  
        <div className="profile box">
            <div className="profile-left">
                <div className="profile-img">
                    <img src={user.avatar}/>
                </div>
                <div className="profile-info">
                    <p>Username : {user.username}</p>
                    <p>Email : {user.email}</p>
                    <p>Phone : {user.phone}</p>
                </div>
            </div>
            <div className="profile-rigth box">
                <div className="profile-order">
                    <p>Orders</p>
                    { orders.length > 0 ? 
                        orders.map( order => <Order order={order} />)
                    :
                        <h3> Have 0 orders </h3>
                    }
                </div>
            </div>
            <div className="box">
                <div className="profile-msg">
                    <p>Messages</p>
                    { msg.length > 0 ? 
                        msg.map( message => {
                            return `You send this message : ${message.timestamp} ${message.message} \n`
                        })
                    :
                        <h3> Have 0 messages </h3>
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default UserProfile;