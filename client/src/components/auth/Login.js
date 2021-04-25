import React, { useContext, useState } from 'react'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { getLoggedIn } = useContext(AuthContext);

    const login = async (e) => {
        e.preventDefault()
        try {
            const loginData = {email, password}
            await axios.post('http://localhost:1996/auth/login', loginData)
            getLoggedIn()
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
        <form onSubmit={login}>
            <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
            <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default Login
