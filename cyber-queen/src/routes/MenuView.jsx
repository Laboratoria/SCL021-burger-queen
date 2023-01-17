import Menu from '../menu/Menu.json'; 
import { useNavigate } from 'react-router-dom'

export default function MenuView() {
  const navigate = useNavigate();
  const goHome = async () => {
      navigate('/');
    };
    const goDrink = async () => {
      navigate('/drinks');
    }
    const goFoods = async () => {
      navigate('/foods');
    }
 return (
    <div className="bigContainer">
      
      <button onClick={goDrink}> DRINKS</button> 
       {
        Menu.drink.map((drink) => {
          return (
            <div key={ drink.id }>
              <div>
              { drink.name } <br/>
              ${ drink.price }
              </div>
            </div>
          );
        } 
        )
      } 
       <br></br>
    <button onClick={goFoods}>FOODS</button> 
    {
        Menu.food.map((food) => {
          return (
            <div key={ food.id }>
              <div>
              { food.name } <br/>
              ${ food.price }
              </div>
            </div>
          );
        } 
        )
      } 
       <br></br>
      <button>EXTRAS</button> 
    {
        Menu.extras.map((extras) => {
          return (
            <div key={ extras.id }>
              <div>
              { extras.name }  
               ${ extras.price }
              </div>
            </div>
          );
        } 
        )
      } 
      <br></br>
      <br></br>
  <button onClick={goHome}> HOME </button>
  
     </div> 
  );
}
