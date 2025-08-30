import React from "react";
import { setLocalStorage } from "../utils/localStorage";

const Header = () => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold">
        Hello <br /> <span className="text-3xl font-semibold">Admin 👋🏻</span>
      </h1>
      <button
        onClick={logOutUser}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
