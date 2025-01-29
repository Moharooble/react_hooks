import { useDispatch } from 'react-redux';
import { actionCompeleted, deleted } from '../futures/todoSlise';

const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(actionCompeleted(index));
  };
  return (
    <div className="todo">
      <h4>{todo.text}</h4>
      <div className="actions">
        <span onClick={handleComplete} className={todo.completed ? 'completed' : 'progress'}>
          {!todo.completed ? 'Progress' : 'Completed'}
        </span>
        <span onClick={() =>dispatch(deleted(index))}>Delete</span>
      </div>
    </div>
  );
};

export default Todo;
