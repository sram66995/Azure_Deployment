const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/orders", (req, res) => {
  res.json({
    message: "Orders API Working",
    orders: [
      {
        id: 1,
        item: "Pizza",
        price: 500
      },
      {
        id: 2,
        item: "Burger",
        price: 300
      }
    ]
  });
});

app.listen(5001, () => {
  console.log("Order Service Running");
});
