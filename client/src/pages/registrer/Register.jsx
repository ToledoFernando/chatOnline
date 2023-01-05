import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/action";
import { useNavigate, Link } from "react-router-dom";
import "./Register.scss";
import { useEffect } from "react";

const initial = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
};

function Register() {
  const [datas, setDatas] = useState(initial);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);

  const handleChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(datas));
    setDatas(initial);
    navigate("/");
  };

  useEffect(() => {
    if (isLogin) return navigate("/");
  }, []);

  return (
    <div>
      <h1>Crear Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <label>Primer Nombre</label>
        <input
          type="text"
          onChange={handleChange}
          name="first_name"
          value={datas.first_name}
          placeholder="First name"
        />
        <label>Segundo Nombre</label>
        <input
          type="text"
          onChange={handleChange}
          name="last_name"
          value={datas.last_name}
          placeholder="Last name"
        />
        <label>Nombre de Usuario</label>
        <input
          type="text"
          onChange={handleChange}
          name="username"
          value={datas.username}
          placeholder="Username"
        />
        <label>Email</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={datas.email}
          placeholder="Email"
        />
        <label>Contraseña</label>
        <input
          value={datas.password}
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
        <button>Registrarse</button>
        <p>
          Ya tienes cuenta? <Link to="/login">Inicia sesion</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
