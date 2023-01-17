import { useNavigate } from "react-router-dom";

export default function Homeview() {
  const navigate = useNavigate();
  const goMenu = async () => {
    navigate("/menu");
  };
  return (
    <div className="container">
      <h1>Cyber Queen</h1>
      <button className="menuBTN" onClick={goMenu}>
        Entrar al Menú
      </button>
    </div>
  );
}
