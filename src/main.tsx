import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri:
    import.meta.env.VITE_MODE === "development"
      ? "http://localhost:3000/api/graphql"
      : import.meta.env.VITE_BACKEND_URL,
  headers: {
    ...(import.meta.env.VITE_MODE === "development"
      ? { "Access-Control-Allow-Origin": "*" }
      : {}),
    // Authorization: `Bearer ${import.meta.env.VITE_JWT}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  // </React.StrictMode>
);
