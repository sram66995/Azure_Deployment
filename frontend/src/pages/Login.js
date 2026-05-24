import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const login = async () => {

    try {

      const response = await axios.post(
        "https://zomoto.azure-api.net/login",
        {
          username: "admin",
          password: "admin"
        }
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (error) {

      alert("Login Failed");
    }
  };

  return (
    <div>

      <h1>Login Page</h1>

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;
