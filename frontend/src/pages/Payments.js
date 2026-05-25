import axios from "axios";

function Payments() {

  const getPayments = async () => {

    const response = await axios.get(
      "https://zomoto.azure-api.net/api/payments"
    );

    alert(response.data.message);
  };

  return (
    <div>

      <h1>Payments Page</h1>

      <button onClick={getPayments}>
        Get Payments
      </button>

    </div>
  );
}

export default Payments;
