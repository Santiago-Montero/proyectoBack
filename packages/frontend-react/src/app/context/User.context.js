import React, { useState } from 'react'
import { getUser } from '../modules/auth/auth.service'

const UserContext = React.createContext()


export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState()

    const login = (user) => {
        getUser(user.username).then((res) => 
        {
            setUser(res)
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
                login,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext