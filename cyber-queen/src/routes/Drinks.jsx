import { useNavigate } from 'react-router-dom'

export default function DrinksView() {
    const navigate = useNavigate();
  const goHome = async () => {
      navigate('/');
  };
    return (
        <div> aqui liquidos 
            <button onClick={goHome}> HOME </button>
  
        </div>
    )
}