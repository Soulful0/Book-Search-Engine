const mongoose = require("mongoose");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const createTestUser = async () => {
  try {
    // Connect to the database
    await mongoose.connect("mongodb://localhost:27017/bookSearchDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Create a new test user
    const testUser = new User({
      username: "testuser",
      email: "testuser@example.com",
      password: "password123",
    });

    await testUser.save();

    // Generate a token for the test user
    const token = signToken(testUser);
    console.log("Test token:", token);

    // Close the database connection
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

createTestUser();
