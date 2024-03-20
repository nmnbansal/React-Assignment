import { useState } from 'react';
import { useTodoContext } from './TodoContext';

function TodoForm() {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };
    addTodo(newTodo);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
