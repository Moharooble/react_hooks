import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../futures/auth'

const Login = () => {
    const [username,setUsername] = useState('')
    const dispatch = useDispatch()
    const handleClick = () => {
        localStorage.setItem('user', JSON.stringify(username))
        dispatch(login(username))
        

    }
  return (
    <div className='todo-login'>
      
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleClick}>login</button>
    </div>
  )
}

export default Login
