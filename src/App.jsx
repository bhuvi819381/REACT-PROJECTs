import React, { useState } from "react";

// The main App component
function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);
  // State to hold the current value of the input field
  const [input, setInput] = useState("");

  // Function to handle form submission (adding a new todo)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (input.trim() === "") return; // Ignore empty input
    setTodos([
      ...todos,
      { text: input, completed: false }, // Add new todo object
    ]);
    setInput(""); // Clear input field
  };

  // Function to toggle completion status of a todo
  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">React Todo App</h1>
        {/* Form to add new todo */}
        <form onSubmit={handleSubmit} className="flex mb-4">
          <input
            className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo..."
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            type="submit"
          >
            Add
          </button>
        </form>
        {/* List of todos */}
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between mb-2 p-2 border-b"
            >
              <span
                className={`flex-1 cursor-pointer ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
                onClick={() => toggleTodo(index)}
              >
                {todo.text}
              </span>
              <button
                className="ml-2 text-red-500 hover:text-red-700"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
