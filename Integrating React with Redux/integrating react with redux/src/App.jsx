import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './Redux/actions';

const TodoList = ({ todos, addTodo, updateTodo, deleteTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    addTodo({
      title: newTodo,
      status: false,
      id: Date.now().toString(),
    });
    setNewTodo('');
  };

  const handleToggleTodo = (id, status) => {
    updateTodo(id, !status);
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="App">
        <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.status}
              onChange={() => handleToggleTodo(todo.id, todo.status)}
            />
            <span>{todo.title}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  updateTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
