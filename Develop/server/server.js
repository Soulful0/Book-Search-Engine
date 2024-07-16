const { ApolloServer } = require("apollo-server-express");
// const { typeDefs, resolvers } = require('./schema');
const { verifyToken } = require("./utils/auth");

//
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create the Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Extract token from headers
    const token = req.headers.authorization
      ? req.headers.authorization.split(" ").pop().trim()
      : null;

    // Verify token and get user data
    const user = token ? verifyToken(token) : null;

    return { user };
  },
});

server.applyMiddleware({ app, path: "/graphql" });

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
