import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return; // Prevent adding empty todos
    onAddTodo(todoText); // Pass the new todo to the parent
    setTodoText(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
