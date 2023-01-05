import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_LOCATIONS = gql`
  query GetLanguages {
    languages {
      id
      name
    }
  }
`;

export const Signup = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(loading, error, data);
  return (
    <div className="bg-black text-white mb-auto">
      <section className="flex justify-center flex-col items-center text-center mb-6">
        <h1 className="pt-10 pb-6 text-2xl font-bold uppercase">
          Welcome back
        </h1>
        <p className="text-sm text-middle-gray">
          Hello again! Sign in to continue exploring and collecting
        </p>
      </section>
      <form className="flex flex-col px-4">
        <label htmlFor="login" className="text-xs text-middle-gray pl-3">
          Email or Username
        </label>
        <input
          type="text"
          id="login"
          className="mb-10 bg-transparent border-b border-middle-gray outline-none pt-1 pb-2 pl-3 pr-10"
        />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </form>
    </div>
  );
};
