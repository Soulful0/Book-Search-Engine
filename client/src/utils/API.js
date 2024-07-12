import { gql } from "@apollo/client";
import client from "../App";

// Define your queries and mutations
const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

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

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
