const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Connect to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`Connected to MongoDB 🔥`))
  .catch((err) => console.error(`Error connecting to MongoDB`, err.message));

// Configure port number
const PORT = process.env.PORT || 4000;

// Instantiate express
const app = express();

// Enable cross-origin access through the CORS middleware
app.use(cors());

// Set body parser middleware
app.use(bodyParser.json());

// Initialize routes middleware
app.use("/api", require("./api/routes/users.routes"));

// Start listening
app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`));
