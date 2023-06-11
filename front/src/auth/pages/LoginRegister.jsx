import { useSelector } from "react-redux";
import { FormLogin } from "../components/FormLogin"
import { FormRegister } from "../components/FormRegister";

export const LoginRegister = () => {  
    
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
    const emailPattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

    const {isSignIn} = useSelector(state => state.auth)

    return (
        <>
            {isSignIn 
                ? <FormLogin emailPattern = {emailPattern}/>
                : <FormRegister emailPattern = {emailPattern} passwordPattern = {passwordPattern}/>
            }
        </>
    )
}