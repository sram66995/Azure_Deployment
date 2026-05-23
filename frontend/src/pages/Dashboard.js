import { Link } from "react-router-dom";

function Dashboard() {

  return (
    <div>

      <h1>Dashboard</h1>

      <Link to="/orders">
        <button>Orders</button>
      </Link>

      <br /><br />

      <Link to="/payments">
        <button>Payments</button>
      </Link>

    </div>
  );
}

export default Dashboard;
