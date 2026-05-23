const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

/* AUTH SERVICE */
app.post("/api/login", async (req, res) => {
  try {
    const response = await axios.post(
      "http://host.docker.internal:5003/login",
      req.body
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({
      message: "Auth Service Error"
    });
  }
});

/* ORDER SERVICE */
app.get("/api/orders", async (req, res) => {
  try {

    const response = await axios.get(
      "http://host.docker.internal:5001/orders"
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({
      message: "Order Service Error"
    });
  }
});

/* PAYMENT SERVICE */
app.get("/api/payments", async (req, res) => {
  try {

    const response = await axios.get(
      "http://host.docker.internal:5002/payments"
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({
      message: "Payment Service Error"
    });
  }
});

app.listen(5000, () => {
  console.log("API Gateway Running");
});
