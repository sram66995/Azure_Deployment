const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/payments", (req, res) => {
  res.json({
    message: "Payment Service Working"
  });
});

app.listen(5002, () => {
  console.log("Payment Service Running");
});
