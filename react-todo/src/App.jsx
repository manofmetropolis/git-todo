import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  function deleteTodo(id) {
    console.log(id)
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(filteredTodos);
  }

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <p>{todos.length}</p>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            id={todo.id}
          />
        ))}
      </ul>
      {/* End Todo List */}
      {/* TodoForm */}
      <TodoForm />
      {/* End TodoForm */}
    </div>
  )
}

export default App