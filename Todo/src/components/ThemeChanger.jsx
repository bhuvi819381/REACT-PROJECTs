import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button onClick={toggleTheme}>
      <img
        src={
          theme === "dark" ? "/images/icon-sun.svg" : "/images/icon-moon.svg"
        }
        alt="theme icon"
        className="h-6 w-6"
      />
    </button>
  );
};

export default ThemeChanger;
