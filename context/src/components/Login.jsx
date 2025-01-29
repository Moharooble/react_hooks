import React, { useState } from 'react'
import { UseAuthContext } from '../context/AuthContext'

const Login = () => {
    const [username,setUsername] = useState('')
    const {dispatch} = UseAuthContext()
    const handleClick = () => {
        localStorage.setItem('user', JSON.stringify(username))
        dispatch({type: "LOGIN", payload: username})

    }
  return (
    <div>
      
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleClick}>login</button>
    </div>
  )
}

export default Login
