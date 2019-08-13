require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const passport = require("passport");

const users = require("./routes/api/Users");
//const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here bodyparser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
//express
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
// database

const db= require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://oscar:oscar91@ds263107.mlab.com:63107/heroku_q91pb1gz"
)


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});