import SearchUser from "../../components/searchUser/SearchUser";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Chats() {
  const isLogin = useSelector((state) => state.isLogin);
  const userData = useSelector((state) => state.userData);
  const [Chats, setChats] = useState([]);
  const [total, setTotal] = useState([]);
  const navigate = useNavigate();

  const deleteChat = (e) => {
    let xd = total.filter(
      (usuario) => usuario.id != e.id && usuario.con != userData.username
    );
    localStorage.setItem("userChats", JSON.stringify(xd));
    xd = xd.filter((usuario) => usuario.con == userData.username);
    setChats(xd);
  };

  useEffect(() => {
    if (!isLogin) return navigate("/");
    let chatHistorial = localStorage.getItem("userChats");
    let chats = JSON.parse(chatHistorial);
    setTotal(chats);
    chats = chats.filter((usuario) => usuario.con == userData.username);
    setChats(chats);
  }, []);

  return (
    <div className="Chats">
      <SearchUser />
      <div>
        <div className="chatGuardados">
          {!Chats.length ? (
            <h1>Sin chat guardados</h1>
          ) : (
            Chats.map((chat) => {
              return (
                <div key={chat.id}>
                  <img src={chat.profileIMG} alt={`profile ${chat.username}`} />{" "}
                  <p>{chat.username}</p>
                  <button onClick={() => deleteChat(chat)}>
                    Eliminar chat
                  </button>
                </div>
              );
            })
          )}
        </div>
        <div className="chat"></div>
      </div>
    </div>
  );
}

export default Chats;
