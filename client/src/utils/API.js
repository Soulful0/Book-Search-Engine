import client from "../App"; // Correct import path to get the client
import { GET_ME } from "./queries";
import { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK } from "./mutations";

// Helper functions to execute the GraphQL operations
export const getMe = async () => {
  try {
    const { data } = await client.query({
      query: GET_ME,
    });
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong");
  }
};

export const createUser = async (userData) => {
  try {
    const { data } = await client.mutate({
      mutation: ADD_USER,
      variables: userData,
    });
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong");
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_USER,
      variables: userData,
    });
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong");
  }
};

export const saveBook = async (bookData) => {
  try {
    const { data } = await client.mutate({
      mutation: SAVE_BOOK,
      variables: { bookData },
    });
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong");
  }
};

export const deleteBook = async (bookId) => {
  try {
    const { data } = await client.mutate({
      mutation: REMOVE_BOOK,
      variables: { bookId },
    });
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong");
  }
};

// Make a search to Google Books API
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
