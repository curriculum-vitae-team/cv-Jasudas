import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-black border-b border-middle-gray ">
      <div className="h-10 flex justify-end items-center px-5">
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
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill="middle-gray"
            className="stroke-middle-gray"
            d="M1 1L19 19"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
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
    </div>
  );
};
