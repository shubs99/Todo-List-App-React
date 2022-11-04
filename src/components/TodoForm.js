import React from 'react'

const TodoForm = ({handleSubmit,todo,editId,setTodo}) => {
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="go">
          {editId ? "Edit" : "Go"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm
