import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerify, setPasswordVerify] = useState('')

    const register = async (e) => {
        e.preventDefault()
        try {
            const objectData = {email, password, passwordVerify}
            await axios.post('http://localhost:1996/auth', objectData)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
        <form onSubmit={register}>
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
            <input
            type="password"
            placeholder="Verify your password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
            />
            <button type="submit">Register</button>
        </form>
        </div>
    )
}

export default Register
