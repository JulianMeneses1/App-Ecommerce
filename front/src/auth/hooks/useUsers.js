import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { save } from "../services/usersService";
import { useAuth } from "../../auth/hooks/useAuth";
import { finishLoading, onCreateUser, onLoading, setErrors } from "../../store/slices/auth/authSlice";

export const useUsers = () => {
    
    const { isCreatingUserLoading, errors} = useSelector(state => state.auth);

    const { handlerLogin}= useAuth();
    const dispatch = useDispatch(); 
    
    const handlerCreateUser = async (user) => {
        try {
            dispatch(onLoading);
            await save(user); 
            onCreateUser();           
            dispatch(setErrors({}));
            handlerLogin(user);              
            return true;
        } catch (error) {
            if (error.response && error.response.status == 500)
            {                    
                dispatch(setErrors({email: 'Ya existe un usuario con este email'}));
                Swal.fire(
                    'Error Email',
                    'El email ingresado ya existe',
                    'error'
                )              
            } else {
                throw error;
            };
            dispatch(finishLoading);
            return false;
        }
    }

    return {
        handlerCreateUser,
        isLoginLoading,
        errors,
        isCreatingUserLoading
    }
}