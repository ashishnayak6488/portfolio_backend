const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();

// const username = process.env.DB_USERNAME
// const password = process.env.DB_PASSWORD
const mongoDb_url = process.env.MONGODB_URI

// mongoDb_url=`mongodb+srv://${username}:${password}@portfolio.qt83hac.mongodb.net/?retryWrites=true&w=majority`

const connection = () => {

  mongoose.connect(mongoDb_url);

  const connection = mongoose.connection;

  connection.on("error", () => {
    console.log("Error While Connecting DB");
  });

  connection.on("connected", () => {
    console.log("DB Connected Successfully");
  });
};

module.exports = connection;
