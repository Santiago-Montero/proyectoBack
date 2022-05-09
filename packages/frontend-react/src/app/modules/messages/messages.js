import { useContext, useEffect, useState } from 'react'
import io from "socket.io-client";
import UserContext from '../../context/User.context'
import { saveMessage } from './messages.service';

let socket;
const CONNECTION_PORT = "http://localhost:8080";

const Messages = () => {
    const { user } = useContext(UserContext)
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
  
    // After Login
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    
    
    useEffect(() => {
        if(user){
            socket.emit("join_room", 'yourBoxChat');
            setLoggedIn(true)
            setUserName(user.username)
        }
    }, [user]);

    useEffect(() => {
      socket = io(CONNECTION_PORT);
    }, [CONNECTION_PORT]);
  
    useEffect(() => {
      socket.on("receive_message", (data) => {
        setMessageList([...messageList, data]);
      });
    });

    const sendMessage = async () => {
        let messageContent = {
          room: 'yourBoxChat',
          content: {
            author: userName,
            message: message,
          },
        };
        try{
            await socket.emit("send_message", messageContent);
            setMessageList([...messageList, messageContent.content]);
            setMessage("");
            const messageBody = {
                username : userName,
                message: message,
            }
            saveMessage(messageBody).then().catch(err => console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <div className="chatContainer">
                <div className="messages">
                    {messageList.length > 0 && messageList.map((val, key) => {
                        return (
                            <div
                            className="messageContainer"
                            id={key}
                            >
                                <div className="messageIndividual" id={key}>
                                    {val.author}: {val.message}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="messageInputs">
                    <input
                    type="text"
                    placeholder="Message..."
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    )
}


export default Messages;