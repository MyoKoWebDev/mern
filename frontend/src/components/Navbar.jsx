import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState("dark"); // Default theme

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className=" max-w-[1140px] mx-auto py-3">
      <div className="flex items-center justify-between">
        <Link
          to={"/"}
          className="bg-gradient-to-r from-blue-400 via-red-500 to-green-500 bg-clip-text text-4xl tracking-tight text-transparent"
        >
          Product .
        </Link>

        <div className="flex items-center gap-x-3">
          <Link className="btn" to={"/create"}>
            <FiPlus size={30} />
          </Link>
          <button className="btn" onClick={toggleTheme}>
            {theme == "light" ? <FiMoon size={30} /> : <CiLight size={30} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
