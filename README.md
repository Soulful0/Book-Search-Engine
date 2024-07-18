# Book Search Engine

This project is a book search engine built with the MERN stack (MongoDB, Express, React, Node.js) and Apollo Server for handling GraphQL queries and mutations.

## Project Structure

The project is divided into two main parts:

Client: This is the front-end of the application built with React and Apollo Client.
Server: This is the back-end of the application built with Node.js, Express, and Apollo Server for handling GraphQL.

## Installation and Setup

### Prerequisites

Node.js (v14 or higher)
npm or yarn

### Installing Dependencies

Navigate to the project root directory and install the dependencies for both client and server.

### Install server dependencies:

cd server
npm install

### Install client dependencies:

cd ../client
npm install

## Starting the Client

Navigate to the client directory and start the client:

cd ../client
npm start

## Using the Application

### Login

To obtain a token for authenticated requests, you can use the following login mutation in Apollo Playground or any GraphQL client:
mutation {
login(email: "testuser@example.com", password: "password123") {
token
user {
\_id
username
email
}
}
}

# Conclusion

This project demonstrates how to build a full-stack application with React, GraphQL, and Apollo Server, providing a functional book search and save functionality using the Google Books API.
