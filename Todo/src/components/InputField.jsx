import { useState } from "react";

const InputField = ({onAddTodo}) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (value.trim() === '') return;

    const saved= localStorage.setItem('text', value)
    console.log(saved);
    const getSaved = localStorage.getItem('text');
    console.log(getSaved);

    onAddTodo(getSaved.trim());
    setValue('');
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center justify-center gap-6 rounded-md bg-white outline-none"
    >
      <div className="border-Very-Dark-Blue ml-6 h-[25px] w-[26px] rounded-full border"></div>
      <input
        type="text"
        name=""
        id="inputText"
        placeholder="Create a new todo.."
        className="h-[64px] w-full text-[1rem] tracking-[0.1em] outline-0"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
};
export default InputField;
