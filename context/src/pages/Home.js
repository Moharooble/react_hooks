import React from 'react'
import TodoForm from '../components/TodoForm'
import Todos from '../components/Todos'
import { UseAuthContext } from '../context/AuthContext'
import Login from '../components/Login'
import Header from '../components/header'

const Home = () => {
  const {user} = UseAuthContext()
  if(!user){ return <Login />}
  return (
    <div>
      
        <Header />
        <TodoForm />
        <Todos />
      
    </div>
  )
}

export default Home
