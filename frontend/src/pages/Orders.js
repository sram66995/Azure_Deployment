import axios from "axios";
import { useState } from "react";

function Orders() {

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {

    const response = await axios.get(
      "http://localhost:5000/api/orders"
    );

    setOrders(response.data.orders);
  };

  return (
    <div>

      <h1>Orders Page</h1>

      <button onClick={getOrders}>
        Get Orders
      </button>

      {
        orders.map((order) => (
          <div key={order.id}>
            <h3>{order.item}</h3>
            <p>{order.price}</p>
          </div>
        ))
      }

    </div>
  );
}

export default Orders;
