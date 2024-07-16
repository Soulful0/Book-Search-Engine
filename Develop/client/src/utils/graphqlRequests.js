import AuthService from "./auth";

const makeGraphQLRequest = async (query, variables = {}) => {
  const token = AuthService.getAuthHeader();

  const response = await fetch("/graphql", {
    // Adjust the URL if needed
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(
      result.errors ? result.errors[0].message : "Network response was not ok"
    );
  }

  return result.data;
};

export default makeGraphQLRequest;
