import React, { useState } from 'react';
import TodoList from './TodoList.js';
import './style.css';

  function App() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [orderCount, setOrderCount] = useState(0); 
  
    const handleAddTodo = () => {
      if (!input) return;
      const newTodo = {
        id: Date.now(),
        text: input,
        isCompleted: false,
        order: orderCount
      };
      setTodos([newTodo, ...todos]);
      setInput('');
      setOrderCount(prevOrder => prevOrder + 1);
    };

  return (
    <div className="app">
        <div className='background'>
            <img className='logo' src='../assets/images/logo.png' />
            <div className='inputAdd'> 
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Insira uma nova task..."
                />
                <button className='buttonAdd' onClick={handleAddTodo}> <img className = "imgAdd" src='../assets/images/add.png' /> </button>
            </div>
            <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
