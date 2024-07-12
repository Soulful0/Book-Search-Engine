import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// Create Apollo Client
const client = new ApolloClient({
  uri: "/graphql", // Make sure this matches your server's GraphQL endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
