import { useContext, useEffect, useState } from 'react'
import io from "socket.io-client";
import UserContext from '../../context/User.context'
import { saveMessage } from './messages.service';
import './messages.css'

let socket;
const CONNECTION_PORT = "https://your-box-api.herokuapp.com/";

const Messages = () => {
    const { user } = useContext(UserContext)
    const [loggedIn, setLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);
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
        { user && 
            <div className='msg'>  
                {!open ? 
                    <div> 
                        <button className="open" onClick={() => setOpen(!open)}>
                        {messageList.length > 0 ? <img src="https://i.imgur.com/H4r54ro.png"/> : <img src="https://i.imgur.com/oEOYYIx.png"/>  }
                                
                        </button> 
                    </div>
                :
                    <>
                        <div className="chatContainer">
                            <div className="messages">
                                {messageList.length > 0 && messageList.map((val, key) => {
                                    return (
                                        <div
                                        className="messageContainer"
                                        id={key}
                                        >   
                                            {val.author == user.username ?
                                                <div className='messageIndividualMy'> 
                                                    <div className="myMsg" id={key}>
                                                        <div className='pmsg'><b> You </b> {val.message} </div>
                                                    
                                                    </div>
                                                </div>
                                            :
                                                <div className='messageIndividualOther'>
                                                    <div className="otherMsg" id={key}>
                                                        <div className='pmsg'><b>{val.author} </b>{val.message}</div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    );
                                })}
                            </div>
                            <button className='close delete' onClick={() => setOpen(!open)}>  </button> 
        
                            <div className="messageInputs">
                                <input
                                value={message}
                                type="text"
                                placeholder="Message..."
                                className='input is-primary'
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                                />
                                <button className="button is-link" onClick={sendMessage}>Send</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        }
        </>
        
        
    )
}


export default Messages;