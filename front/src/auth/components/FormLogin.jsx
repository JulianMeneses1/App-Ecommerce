import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { onToggleSignIn } from "../../store/slices/auth/authSlice";
import { useAuth } from "../hooks/useAuth";

export const FormLogin = ({emailPattern} ) => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const { handlerLogin, isLoginLoading } = useAuth();

    const watchAllFields = watch();  

    const dispatch = useDispatch();

    const onSubmit = data => {
        handlerLogin(data);
        reset();
    };

    return (
        <>
            <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between align-items-baseline">                                
                    <h3>Iniciá Sesión</h3>
                    <button 
                        type="button"
                        className='btn btn-lg'
                        onClick={() => dispatch(onToggleSignIn())}>
                            ¿No tenés cuenta? <span className="text-primary">Registrate</span>
                    </button>                    
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 my-1">
                        <label htmlFor="email" className="form-label">Username</label>
                        <input                     
                            type="text" 
                            placeholder="Dirección de email"                       
                            id="email"
                            maxLength="40"
                            {...register("email", { required: true, pattern: emailPattern })}
                            className={`form-control ${watchAllFields?.email?.match(emailPattern) && 'is-valid' } ${errors.email && 'is-invalid'}`}
                        />
                        {errors.email?.type === 'required' && <p className="text-danger mb-0">Email requerido</p>}
                        {errors.email?.type === 'pattern' && <p className="text-danger mb-0">El email ingresado no es válido</p>}                         
                    </div>
                    <div className="col-lg-6 col-md-12 my-1">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input                     
                            type="password" 
                            placeholder="Contraseña"                       
                            id="password"
                            maxLength="16"
                            {...register("password", { required: true, minLength: 8 })}
                            className={`form-control ${watchAllFields?.password?.length > 7 && 'is-valid' } ${errors.password && 'is-invalid'}`}
                        />
                        {errors.password?.type === 'required' && <p className="text-danger mb-0">Contraseña requerida</p>}
                        {errors.password?.type === 'minLength' && <p className="text-danger mb-0">Recuerda que la contraseña debe tener mínimo 8 caracteres</p>}   
                    </div>                         
                </div>                            
                <div className="d-flex justify-content-center mt-4">
                        { isLoginLoading 
                            ? <button id="submitBtn" type="submit" className="w-50 btn btn-primary btn-lg ">
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0">Procesando</p>
                                        <div className="spinner-border text-info me-1" role="status"></div>
                                    </div>
                                </button>
                            : <button id="submitBtn" type="submit" className=" w-50 btn btn-primary btn-lg ">Iniciar Sesión</button>
                        }
                </div>
            </form>
        </>
    )
}