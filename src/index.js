const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const  moviesRoutes = require("./routes/movies");


const app = express();
const port = process.env.PORT || 9000;

//MIDDLEWARE
app.use(express.json());
app.use("/api", moviesRoutes);

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });

//MongoDB CONECTION
mongoose
    .connect(process.env.MONGODB_URI).then(() =>  console.log("Connected to MongoDB Atlas")).catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port', port));