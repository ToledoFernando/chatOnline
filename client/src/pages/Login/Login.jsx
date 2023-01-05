import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../redux/action";
import "./Login.scss";

const initial = {
  email: "",
  password: "",
};

function Login() {
  const [data, setData] = useState(initial);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.isLogin);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(data));
    setData(initial);
    navigate("/");
  };

  useEffect(() => {
    if (isLogin) return navigate("/");
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
        <br />
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={data.password}
        />
        <br />
        <button>Login</button>
        <p>
          No tiene cuenta? <Link to="/register">Registrate</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
