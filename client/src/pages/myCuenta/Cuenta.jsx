import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import sinFoto from "../../img/sinFoto.png";
import "./Cuenta.scss";

function Cuenta() {
  const user = useSelector((state) => state.userData);
  const isLogin = useSelector((state) => state.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) navigate("/");
  }, []);
  console.log(user);
  return (
    <div className="myCuenta">
      <h1>Bienvenido {user.username}</h1>
      <p>Datos del usuario</p>
      <label>Foto de perfil</label>
      <br />
      <img
        src={user.profileIMG == "none" ? sinFoto : user.profileIMG}
        alt="imagen de perfil"
        width="40"
        height="40"
      />
      <br />
      <label>Nombre</label>
      <p>{user.first_name}</p>
      <label>Apellido</label>
      <p>{user.last_name}</p>
      <label>Nombre de usuario</label>
      <p>@{user.username}</p>
      <label>Email</label>
      <p>{user.email}</p>
      <label>Estado de la cuenta</label>
      <p>
        <b>{user.verify ? "Verificado" : "No verificado"}</b>
      </p>
    </div>
  );
}

export default Cuenta;
