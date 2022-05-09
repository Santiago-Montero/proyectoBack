import React, { useState } from 'react'
import { getUser } from '../modules/auth/auth.service'

const UserContext = React.createContext()


export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState()
    const [ isAdmin, setIsAdmin] = useState(false)
    
    const login = (user) => {
        getUser(user.username).then((res) => 
        {
            setUser(res)
            if(res.admin) setIsAdmin(true)
            else setIsAdmin(false)
        }) 
        .catch(err => ('Error: ', err))
    }

    const logout = () => {
        setUser()
    }


    return (
        <UserContext.Provider 
            value={{
                user,
                isAdmin,
                login,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext