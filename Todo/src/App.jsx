import { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";


const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <Header />
    
    
    <main className="w-[540px] mx-auto mt-[2rem]">
      <InputField onAddTodo={addTodo} />
      <TodoList todos={todos}/>
    </main>
    </>
  );
};
export default App;
