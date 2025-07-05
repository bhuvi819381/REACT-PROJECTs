import { useState } from "react";

const Todo = ({ text }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-Very-Light-Gray dark:bg-Very-Dark-Blue flex items-center gap-4 border-b border-gray-300 p-4 text-black dark:border-gray-700 dark:text-white">
      <input
        type="checkbox"
        name=""
        id=""
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className=""
      />
      <p className={checked === true ? `line-through text-Dark-Grayish-Blue` : ``}>{text}</p>
    </div>
  );
};
export default Todo;
