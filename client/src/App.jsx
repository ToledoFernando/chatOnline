import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Chat from "./pages/Chat/Chat";
import Chats from "./pages/Chats/Chats";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cuenta from "./pages/myCuenta/Cuenta";
import Register from "./pages/registrer/Register";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { connectSocket } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);

  useEffect(() => {
    if (isLogin) {
      dispatch(connectSocket());
      if (!localStorage.getItem("userChats"))
        return localStorage.setItem("userChats", JSON.stringify([]));
    }
  }, [isLogin]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chats/msg/:id" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/miacount/:id" element={<Cuenta />} />
      </Routes>
    </>
  );
}

export default App;
