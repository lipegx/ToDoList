import React, { useState } from 'react';

function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja deletar esse item?')) {
      setTodos(prevTodos => prevTodos.filter(t => t.id !== todo.id));
    }
  };

  const toggleComplete = () => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.map(t =>
        t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
      );

      return updatedTodos.sort((a, b) => {
        if (a.isCompleted === b.isCompleted) {
          return a.order - b.order;
        }
        return a.isCompleted - b.isCompleted;
      });
    });
  };

  const handleEdit = () => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.map(t =>
        t.id === todo.id ? { ...t, text: editText } : t
      );

      return updatedTodos.sort((a, b) => {
        if (a.isCompleted === b.isCompleted) {
          return a.order - b.order;
        }
        return a.isCompleted - b.isCompleted;
      });
    });
    setIsEditing(false);
  };

  const EditView = () => {
    return (
      <div className="item">
        <input type="checkbox" checked={todo.isCompleted} onChange={toggleComplete} />
        <input
          type="text"
          value={editText}
          onChange={e => setEditText(e.target.value)}
          autoFocus
          onKeyPress={e => e.key === 'Enter' && handleEdit()}
        />
        <button className="buttonSave" onClick={handleEdit}><img className = "imgSave" src='../assets/images/save.png'/></button>
      </div>
    );
  };

  const DefaultView = () => {
    return (
      <div className="item" style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>
        <input type="checkbox"  checked={todo.isCompleted} onChange={toggleComplete} />
            <div className='textItem'>
            {todo.text}
            </div>
            <div className='buttonsOpt'>
                <button className="buttonEdit" onClick={() => setIsEditing(true)}>
                    <img className='imgEdit' src ="../assets/images/edit.png" />
                </button>
                <button className="buttonDelete" onClick={handleDelete}>
                    <img className='imgTrash' src ="../assets/images/trash.png" />
                </button>
            </div>
      </div>
    );
  };

  return isEditing ? EditView() : DefaultView();
}

export default TodoItem;
