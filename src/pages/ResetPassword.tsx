import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GET_LOCATIONS = gql`
  query GetLanguages {
    languages {
      id
      name
    }
  }
`;

export function ResetPassword(): ReturnType<React.FC> {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(loading, error, data);

  const changePasswordVisibility = (): void => {
    setVisiblePassword(true);
    // const passwordVisibilityTimeOut = setTimeout(() => {
    //   setVisiblePassword(false);
    // }, 3000);
  };
  useEffect(
    () => () => {
      // clearTimeout(passwordVisibilityTimeOut);
    },
    []
  );

  return (
    <div className="mb-auto bg-black text-white">
      <section className="mb-6 flex flex-col items-center justify-center text-center">
        <h1 className="pt-10 pb-6 text-2xl font-bold uppercase">Welcome back</h1>
        <p className="text-middle-gray text-sm">Hello again! Sign in to continue exploring and collecting</p>
      </section>
      <form className="flex flex-col px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="login" className="text-middle-gray pl-3 text-xs">
              Email or Username
              <input
                type="text"
                id="login"
                className=" border-middle-gray border-b bg-transparent pt-1 pb-2 pl-3 pr-10 outline-none"
              />
            </label>
          </div>

          <div className="relative flex flex-col">
            <label htmlFor="password" className="text-middle-gray pl-3 text-xs">
              Password
              <input
                type={visiblePassword ? "text" : "password"}
                id="password"
                className=" border-middle-gray border-b bg-transparent pt-1 pb-2 pl-3 pr-10 outline-none"
              />
            </label>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2"
              type="button"
              onClick={changePasswordVisibility}
            >
              <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.29639 9C1.29639 9 5.29639 1 12.2964 1C19.2964 1 23.2964 9 23.2964 9C23.2964 9 19.2964 17 12.2964 17C5.29639 17 1.29639 9 1.29639 9Z"
                  stroke="#828282"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.2964 12C13.9532 12 15.2964 10.6569 15.2964 9C15.2964 7.34315 13.9532 6 12.2964 6C10.6395 6 9.29639 7.34315 9.29639 9C9.29639 10.6569 10.6395 12 12.2964 12Z"
                  stroke="#828282"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <button type="button" className="bg-white py-3 px-4 uppercase text-black">
            Sign In
          </button>
          <Link to="/reset-password" className="text-middle-gray py-3 px-4 uppercase">
            Reset Password
          </Link>
        </div>
      </form>
    </div>
  );
}
