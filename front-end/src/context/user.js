import React, { useState} from 'react'
import { createContext } from 'react'

// Create a name , email and password context to be used in the app

export const NameContext = createContext()
export const EmailContext = createContext()
export const PasswordContext = createContext()


// Create a provider component to wrap the app

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <NameContext.Provider value={[name, setName]}>
        <EmailContext.Provider value={[email, setEmail]}>
        <PasswordContext.Provider value={[password, setPassword]}>
            {children}
        </PasswordContext.Provider>
        </EmailContext.Provider>
        </NameContext.Provider>
    )
    }


