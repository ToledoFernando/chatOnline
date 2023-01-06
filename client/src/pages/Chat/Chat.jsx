import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Chat() {
  const isLogin = useSelector((state) => state.isLogin);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (!isLogin) return navigate("/");
  }, []);

  return <div>Mensaje con {id}</div>;
}

export default Chat;
