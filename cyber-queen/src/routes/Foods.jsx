import { useNavigate } from "react-router-dom";
import Menu from "../menu/Menu.json";

export default function FoodsView() {
  const navigate = useNavigate();
  const goHome = async () => {
    navigate("/");
  };
  return (
    <div>
      {Menu.food.map((food) => {
        return (
          <div key={food.name}>
            <h2> {food.name} </h2>
            <div className="parentContainer">
            <div className="foodContainer">
              <img src={food.image} alt="foto.png" />
            </div> 
          <button className="addBtn"> + </button> <button className="deleteBtn"> - </button>
          </div>
          </div>
        );
      })}
      <button onClick={goHome}> HOME </button>
    </div>
  );
}
