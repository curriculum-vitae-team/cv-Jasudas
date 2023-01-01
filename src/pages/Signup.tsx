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
    <>
      <section>
        <h1>Welcome back</h1>
        <p>Hello again! Sign in to continue exploring and collecting</p>
      </section>
      <form className="flex flex-col">
        <label htmlFor="login">Email or Username</label>
        <input type="text" id="login" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </form>
    </>
  );
};
