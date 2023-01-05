import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Chats from "./pages/Chats/Chats";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cuenta from "./pages/myCuenta/Cuenta";
import Register from "./pages/registrer/Register";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/register" element={<Register />} />
        <Route path="/miacount/:id" element={<Cuenta />} />
      </Routes>
    </>
  );
}

export default App;
