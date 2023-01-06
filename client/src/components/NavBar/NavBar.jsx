import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/action";
import "./NavBar.scss";

function NavBar() {
  const isLogin = useSelector((state) => state.isLogin);
  const dataUser = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    window.location.reload();
    navigate("/");
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {isLogin ? (
          <>
            <li>
              <Link to="chats">Chats</Link>
            </li>
            <li>
              <Link to={`miacount/${dataUser.id}`}>
                {dataUser.username}
                <img src={dataUser.profileIMG} width="20" height="20" />
              </Link>
              <button onClick={logout}>Cerrar Session</button>
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
