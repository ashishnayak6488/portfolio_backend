const express = require("express");
const connection = require("./config/dbConfig");
const dotenv = require("dotenv");
const cors = require("cors");

const portfolioRoute = require("./routers/portfolioRouter");

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://portfolio-frontend-mauve-psi.vercel.app/",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use("/api/portfolio", portfolioRoute);

app.get("/test", (req, res) => {
  res.send("Welcome to my portfolio");
});

const port = process.env.PORT || 5000;

const path = require("path");

// // Always serve static files
// app.use(express.static(path.join(__dirname, "client/build")));

// // Move this route to the end
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

connection();

app.listen(port, console.log(`Server Running on Port ${port}`));
