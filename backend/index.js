const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')
const todos = require("./routes/todos")
const signUp = require("./routes/signUp")
const signin = require("./routes/signIn")

require("dotenv").config();
const app = express()

app.use(cors());
app.use(express.json())

app.use("/api/todos", todos)
app.use("/api/signUp", signUp)
app.use("/api/signin", signin)

app.get("/", (req, res) => {
    res.send("Welcome to ToDos API")
});

const url = "mongodb://localhost:27017";
const port = 5000;

app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
})

mongoose
  .connect(url)
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
