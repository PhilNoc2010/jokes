const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.port

require ("./config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require("./routes/joke.routes")
AllMyJokeRoutes(app)

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
