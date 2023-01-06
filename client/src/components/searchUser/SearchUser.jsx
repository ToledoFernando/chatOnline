import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchUser() {
  const userData = useSelector((state) => state.userData);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");
    const result = await axios.get(
      `${import.meta.env.VITE_URLAPI}user/search/${search}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    setUsers(result.data);
  };

  const newChat = (e) => {
    const userChats = localStorage.getItem("userChats");
    const add = JSON.parse(userChats);
    const nuevo = add.filter(
      (user) => user.id == e.id && user.con === userData.username
    );
    if (!nuevo.length) {
      e.con = userData.username;
      add.push(e);
      localStorage.setItem("userChats", JSON.stringify(add));
    }
    navigate(`msg/${e.id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={search}
          type="text"
          placeholder="Buscar usuario por nombre"
        />
        <button>Buscar</button>
      </form>
      {!users.length ? null : (
        <>
          <ul>
            {users.map((usuario) => (
              <li key={usuario.id} onClick={() => newChat(usuario)}>
                <p>{`${usuario.first_name} ${usuario.last_name}`}</p>
                <label>@{usuario.username}</label>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default SearchUser;
