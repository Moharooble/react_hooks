import React from "react";
import Todos from "../components/Todos";
import TodoForm from "../components/TodoForm";
import { useSelector } from "react-redux";
import Login from "../components/Login";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    return <Login />;
  }
  return (
    <div className="home">
      <TodoForm />
      <Todos />
    </div>
  );
};

export default Home;
