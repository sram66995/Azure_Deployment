const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

/* HOME ROUTE */
app.get("/", (req, res) => {
  res.send("API Gateway Running Successfully");
});

/* AUTH SERVICE */
app.post("/api/login", async (req, res) => {
  try {

    const response = await axios.post(
      "http://auth-service:5003/login",
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
      "http://order-service:5001/orders"
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
      "http://payment-service:5002/payments"
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