import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    signup(auth: { email: $email, password: $password }) {
      user {
        id
        email
        role
      }
      access_token
    }
  }
`;

export function SignUp(): ReturnType<React.FC> {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changePasswordVisibility = (): void => {
    setVisiblePassword(true);
    setTimeout(() => {
      setVisiblePassword(false);
    }, 3000);
  };

  const [signup] = useMutation(REGISTER_MUTATION);
  const SignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    await signup({
      variables: {
        email,
        password,
      },
    });
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <main className="flex flex-1 flex-col bg-black px-4 text-white xl:items-center">
      <section className="mb-6 flex flex-col items-center justify-center text-center xl:max-w-xl">
        <h1 className="pt-10 pb-6 text-2xl font-bold uppercase">Register now</h1>
        <p className="text-middle-gray text-sm">
          Register before 4:00PM CEST, February 1, 2022 to be eligible to bid on Lamborghini's first NFT auction in
          their history!
        </p>
      </section>
      <form className="flex h-full flex-1  flex-col xl:max-w-xl" onSubmit={SignIn}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-middle-gray pl-3 text-xs">
              Username
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                type="text"
                id="username"
                className=" border-middle-gray border-b bg-transparent pt-1 pb-2 pl-3 pr-10 outline-none"
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-middle-gray pl-3 text-xs">
              Email
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                id="email"
                className=" border-middle-gray border-b bg-transparent pt-1 pb-2 pl-3 pr-10 outline-none"
              />
            </label>
          </div>
          <div className="relative flex flex-col">
            <label htmlFor="password" className="text-middle-gray pl-3 text-xs">
              Password
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={visiblePassword ? "text" : "password"}
                id="password"
                className=" border-middle-gray  border-b bg-transparent pt-1 pb-2 pl-3 pr-10 outline-none"
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
          <div className="flex gap-3 px-3">
            {/* <input
              onChange={(e) => setPassword(e.target.value)}
              type="checkbox"
              id="password"
              className="appearance-none checked:bg-blue-500"
            /> */}

            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="form-checkbox h-6 w-6 rounded-sm border-none text-black !ring-0 !ring-offset-0 checked:invert"
              />
              I agree to Privacy Policy and Terms of Use
            </label>
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <button className="bg-white py-3 px-4 uppercase text-black" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
}
