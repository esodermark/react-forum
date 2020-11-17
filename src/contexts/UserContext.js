import React, { createContext, useState, useEffect } from 'react'
import ApiClient from '../api-client'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const setUserContext = async () => {
        const userInfo = await ApiClient.GetUserInfo()
        setUser(userInfo)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) { setUserContext() }
    }, [])

    return (
        <UserContext.Provider value={{user, setUserContext}}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider