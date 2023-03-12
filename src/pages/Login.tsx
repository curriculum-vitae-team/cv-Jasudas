import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../components/BreadCrumbs/BreadCrumbs";

const LOGIN_QUERY = gql`
  query LoginMutation($email: String!, $password: String!) {
    login(auth: { email: $email, password: $password }) {
      user {
        id
        email
        role
      }
      access_token
    }
  }
`;

export const Login = () => {
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data } = useQuery(LOGIN_QUERY, {
    variables: {
      email: email,
      password: password,
    },
  });

  const changePasswordVisibility = () => {
    setVisiblePassword(true);
    setTimeout(() => {
      setVisiblePassword(false);
    }, 3000);
  };

  const SignIn = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(loading, error, data);
    if (!error && data) {
      // document.cookie = `userToken=${
      //   data.login.access_token
      // }; expires=${new Date(new Date().getTime() + 60000).toUTCString()}`;
      localStorage.setItem("access_token", data.login.access_token);
      navigate("/dashboard");
    }
  };

  return (
    <main className="flex-1 flex flex-col bg-black text-white px-4 lg:items-center">
      <Breadcrumbs items={[{label:"login", to:"home"}]}/>
      <section className="flex justify-center flex-col items-center text-center mb-6 lg:max-w-xl ">
        <h1 className="pt-10 pb-6 text-2xl font-bold uppercase">
          Welcome back
        </h1>
        <p className="text-sm text-middle-gray">
          Hello again! Sign in to continue exploring and collecting
        </p>
      </section>
      <form
        className="flex-1 flex flex-col  h-full  lg:max-w-xl "
        onSubmit={SignIn}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="login" className="text-xs text-middle-gray pl-3">
              Email or Username
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
