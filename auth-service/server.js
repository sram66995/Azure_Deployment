const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    res.json({
      message: "Login Success",
      token: "sample-jwt-token"
    });
  } else {
    res.status(401).json({
      message: "Invalid Credentials"
    });
  }
});

app.listen(5003, () => {
  console.log("Auth Service Running");
});
