import { useTodoContext } from './TodoContext';
import TodoItem from './TodoItem';


function TodoList() {
  const { todos } = useTodoContext();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
