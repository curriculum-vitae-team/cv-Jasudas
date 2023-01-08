import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);
  return (
    <header className="bg-black border-b border-middle-gray ">
      <div className="h-10  flex justify-end items-center px-5">
        <button onClick={() => setOpenHeader((previous) => !previous)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-middle-gray"
            fill="red"
          >
            <path
              d="M19 1L1 19"
              className="stroke-middle-gray"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fill="middle-gray"
              className="stroke-middle-gray"
              d="M1 1L19 19"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {openHeader && (
        <nav className="flex justify-center text-middle-gray ">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `px-4 py-3 flex-1 flex justify-center items-center border-b-2 border-transparent ${
                isActive ? " text-white border-white" : ""
              } `
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-4 py-3 flex-1 flex justify-center items-center border-b-2 border-transparent ${
                isActive ? " text-white border-white" : ""
              } `
            }
          >
            Log In
          </NavLink>
        </nav>
      )}
    </header>
  );
};
