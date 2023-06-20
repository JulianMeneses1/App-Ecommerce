import { useAuth } from "../../auth/hooks/useAuth";
import { PayPalUI } from "./PayPalUI";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


export const Payment = ({total}) => {
  
  const { login } = useAuth();  

  const navigate = useNavigate();

  return (
    <>
      { login.isAuth  
        ? 
          <>              
            <PayPalUI total = {total}/>
          </>
        : 
          <>
            <button 
                onClick={()=> {
                  navigate('/login');
                  Swal.fire(                
                    'Sesión requerida',
                    'Para continuar debes iniciar sesión',
                    'warning'
                  );
                }} 
                className="btn btn-success btn-lg"
                >
                Finalizar Compra
              </button>     
          </>
      }
    </>
  )
}
