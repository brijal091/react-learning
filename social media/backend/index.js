require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const connectToMongo = require('./db');
const authRoute = require("./routes/auth");

connectToMongo();

const app = express();
const PORT = 8800;

// middlewares and their use 
app.use(express.json()); // it's a body parser, when you make post request it's just gonna password it.
app.use(helmet()); // Secure header manager
app.use(morgan("common")); //Logger to debugging and better logging

// app.get('/',(req, res) => {
//     res.send('Welcome to the Home Page')
// })

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("Backend App is running on: ", PORT);
});
