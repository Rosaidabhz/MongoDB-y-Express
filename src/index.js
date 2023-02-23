const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const  moviesRoutes = require("./routes/movies");
const actorRoutes = require("./routes/actor")
const movie_castRoutes = require("./routes/movie_cast")
const directorRoutes = require("./routes/director")
const genresRoutes = require("./routes/genres")

const app = express();
const port = process.env.PORT || 9000;

//MIDDLEWARE
app.use(express.json());
app.use("/api", moviesRoutes);
app.use("/api", actorRoutes);
app.use("/api", movie_castRoutes);
app.use("/api", directorRoutes);
app.use("/api", genresRoutes);
//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });

//MongoDB CONECTION
mongoose
    .connect(process.env.MONGODB_URI).then(() =>  console.log("Connected to MongoDB Atlas")).catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port', port));