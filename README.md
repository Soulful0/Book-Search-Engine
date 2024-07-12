# Book Search Engine

This is a MERN stack application that allows users to search for books using the Google Books API and save their favorite books. The application uses GraphQL with Apollo Client and Apollo Server.

## Table of Contents

    •	Installation
    •	Usage
    •	Deployment
    •	Screenshots
    •	Technologies Used
    •	License

# Installation

## Prerequisites

    •	Node.js
    •	npm

## Setup

     1.	Clone the repository: git@github.com:Soulful0/Book-Search-Engine.git

     2.	Install dependencies for both client and server:

cd client
npm install
cd ../server
npm install

     3. Create a .env file in the server directory with the following content:

mongodb+srv://joshgingold336:BDl4khsOKX9nakng@booksearchcluster.csjxy8c.mongodb.net/?retryWrites=true&w=majority&appName=BookSearchCluster

## Usage

    1.	Start the server:

cd server
npm start

    2.	Start the client:

cd client
npm start

    3.	Open your browser and go to http://localhost:3000.

# Deployment

## Render Setup

    1.  Create a Render Account:

• Sign up at Render.

    2. Create a New Static Site:

• From the Render dashboard, click the “New” button and select “Static Site”.
• Fill in the details as follows:
• Name: Book-Search-Engine
• Branch: main
• Root Directory: client
• Build Command: npm install && npm run build
• Publish Directory: dist

    3. Create a New Web Service:

• From the Render dashboard, click the “New” button and select “Web Service”.
• Fill in the details as follows:
• Name: Book-Search-Engine-Server
• Branch: main
• Root Directory: server
• Build Command: npm install
• Start Command: node server.js

    4. Add Environment Variables:

• Navigate to the Environment tab in your Render service settings for the Web Service.
• Add the following environment variable:
• Key: MONGODB_URI
• Value: mongodb+srv://joshgingold336:BDl4khsOKX9nakng@booksearchcluster.csjxy8c.mongodb.net/?retryWrites=true&w=majority&appName=BookSearchCluster

# Technologies Used

    •	MongoDB
    •	Express.js
    •	React
    •	Node.js
    •	GraphQL
    •	Apollo Client
    •	Apollo Server

# License

This project is licensed under the MIT License.
