import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../services/authService"
import { onLogin, onLogout, onInitLogin } from "../../store/slices/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {user, isAdmin, isAuth } = useSelector(state => state.auth);

    const handlerLogin = async ({email, password}) => {        
        try {
            dispatch(onInitLogin());
            const response = await loginUser({email, password});
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            const user = { username: claims.sub };

            dispatch(onLogin({user, isAdmin: claims.isAdmin }));   

            sessionStorage.setItem('login',JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user
            }));
            sessionStorage.setItem('token', `Bearer ${token}`);
            navigate('/')
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
        dispatch(onLogout());
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('token');
    }

    return {
        handlerLogin,
        handlerLogout,
        login: {
            user,
            isAdmin,
            isAuth
        }
    }
}