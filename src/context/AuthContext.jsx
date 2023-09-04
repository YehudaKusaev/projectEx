import axios from "axios";
import { createContext, useState } from "react";


export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    

    const login = async (email, password) => {
        try {
            const {data} = await axios.post('http://localhost:3300/auth/login',
            {
                email, 
                password
            });

            setUser(data.user)
            localStorage.setItem('token',data.token)


            return  {
                success: true,
                message: data.message
            }


        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }


    const logout = async () => {
        try {
            const {data} = await axios.post('http://localhost:3300/auth/logout',
            {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
            });

            localStorage.removeItem('token')
            setUser(null)


            return  {
                success: true,
                message: 'logout out successfully'
            }


        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
    
    const register = async (values) => {
        
        const {firstName, lastName, email ,password} = values

        try {
            const {data} = await axios.post('http://localhost:3300/auth/register',
            {
                firstName, 
                lastName, 
                email ,
                password,
                phone_number: '',
                address: ''
            });

            setUser(data.user)


            return  {
                success: true,
                message: data.message
            }


        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
  
    const value = {
        user,
        login,
        register,
        logout,
        loading,
        error
    }
    
    
    return <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>;
}