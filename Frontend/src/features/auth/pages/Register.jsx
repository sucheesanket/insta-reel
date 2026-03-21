import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        axios.post("http://localhost:3000/api/auth/register",{
            username,
            email,
            password,
        },{
            withCredentials:true
        })
        .then(res=>{
            console.log(res.data);
            
        })
        setUsername("")
        setEmail("")
        setPassword("")

        
    }

  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onInput={(e)=>{
                    setUsername(e.target.value)
                }}
                type="text"
                name='username' placeholder='Enter username' />
                <input 
                onInput={(e)=>{
                    setEmail(e.target.vslue)
                }}
                type="email" 
                name="email"
                placeholder='Enter email'  />

                <input 
                onInput={(e)=>{
                    setPassword(e.target.value)
                }}
                type="password"
                name='password'
                placeholder='enter password' />
                <button>Register</button>
            </form>
            <p>Already have an account? <Link className='toggleAuthForm'to="/login">
            Login</Link></p>
        </div>
    </main>
  )
}

export default Register
