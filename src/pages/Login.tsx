import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const changePasswordVisibility = () => {
    setVisiblePassword(true);
    setTimeout(() => {
      setVisiblePassword(false);
    }, 3000);
  };

  const SignIn = () => {
    const { loading, error, data } = useQuery(LOGIN_MUTATION);
    console.log(loading, error, data);
  };
  return (
    <main className="flex-1 flex flex-col bg-black text-white px-4">
      <section className="flex justify-center flex-col items-center text-center mb-6">
        <h1 className="pt-10 pb-6 text-2xl font-bold uppercase">
          Welcome back
        </h1>
        <p className="text-sm text-middle-gray">
          Hello again! Sign in to continue exploring and collecting
        </p>
      </section>
      <form className="flex-1 flex flex-col  h-full" onSubmit={SignIn}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="login" className="text-xs text-middle-gray pl-3">
              Email or Username
            </label>
            <input
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              id="login"
              className=" bg-transparent border-b border-middle-gray outline-none pt-1 pb-2 pl-3 pr-10"
            />
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-xs text-middle-gray pl-3">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={visiblePassword ? "text" : "password"}
              id="password"
              className=" bg-transparent border-b border-middle-gray outline-none pt-1 pb-2 pl-3 pr-10"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2"
              type="button"
              onClick={changePasswordVisibility}
            >
              <svg
                width="25"
                height="18"
                viewBox="0 0 25 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
        <div className="flex flex-col gap-2 mt-auto">
          <button
            className="uppercase bg-white text-black py-3 px-4"
            type="submit"
          >
            Sign In
          </button>
          <Link
            to={"/reset-password"}
            className="text-center uppercase py-3 px-4 text-middle-gray"
          >
            Reset Password
          </Link>
        </div>
      </form>
    </main>
  );
};
