import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))
      ) : (
        <p>Nenhum item adicionado!!</p>
      )}
    </div>
  );
}

export default TodoList;
