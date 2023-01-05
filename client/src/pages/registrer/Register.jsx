import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/action";
import "./Register.scss";

const initial = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
};

function Register() {
  const [datas, setDatas] = useState(initial);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(getUser(datas));
    setDatas(initial);
  };

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
      </form>
    </div>
  );
}

export default Register;
