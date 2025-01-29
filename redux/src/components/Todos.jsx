import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const data = useSelector((store) => store.todo.todos);
  if (!data.length > 0) return;

  return (
    <div className="todos">
      {data &&
        data.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} /> 
        ))}
    </div>
  );
};

export default Todos;
