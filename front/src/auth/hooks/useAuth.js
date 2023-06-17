import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../services/authService"
import { onLogin, onLogout, onLoading } from "../../store/slices/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {login, isLoginLoading } = useSelector(state => state.auth);

    const handlerLogin = async ({email, password}) => {        
        try {
            dispatch(onLoading());
            const response = await loginUser({email, password});
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            const user = { username: claims.sub[0].toUpperCase() + claims.sub.slice(1) };
            navigate('/')
            dispatch(onLogin({user, isAdmin: claims.isAdmin }));  
            sessionStorage.setItem('login',JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user
            }));
            sessionStorage.setItem('token', `Bearer ${token}`);            
        } catch (error) {
            dispatch(onLogout());
            if(error.response?.status == 401) {
                Swal.fire('Error Login',
                        'Username y/o password inválidos',
                        'error');                
            } else {
                throw error;                
            }
        };
    }

    const handlerLogout = () => {
        navigate('/');
        dispatch(onLogout());
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('token');
    }

    return {
        isLoginLoading,
        login,
        handlerLogin,
        handlerLogout        
    }
}