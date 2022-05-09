import { useContext, useEffect, useState } from "react";
import UserContext from "../../../../context/User.context";
import { getOrders } from "../../../cart/order.service";
import { getMessages } from "../../../messages/messages.service";
import UserProfile from "../components/user-profile";

const UserPageProfile = () => {
    const { user } = useContext(UserContext)
    const [ orders, setOrders ] = useState([])
    const [ messages, setMessages] = useState([])
    useEffect(() =>{
        getOrders(user?.username).then(order =>{
            setOrders(order)
        }).catch((error)=> {
            console.log('Error: ' + error)
        })
    },[user])

    useEffect(() =>{
        getMessages(user?.username).then(msg =>{
            setMessages(msg)
        }).catch((error)=> {
            console.log('Error: ' + error)
        })
    },[user])

    return(
        <>
            <div className="">
                { user ? <UserProfile  user={user} orders={orders} msg={messages}/> : <h2> Log in please ! </h2>}
            </div>
        </>
    )
}

export default UserPageProfile;