import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  const isLogin = useSelector((state) => state.isLogin);
  const dataUser = useSelector((state) => state.userData);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {isLogin ? (
          <>
            <li>
              <Link to={`miacount/${dataUser.id}`}>
                {dataUser.username}
                <img src={dataUser.profileIMG} width="20" height="20" />
              </Link>
              <button>Cerrar Session</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="login">Iniciar Session</Link>
            </li>
            <li>
              <Link to="register">registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
