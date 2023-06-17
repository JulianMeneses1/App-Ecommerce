import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { onToggleSignIn } from "../../store/slices/auth/authSlice";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useUsers } from "../hooks/useUsers";

export const FormRegister = ({emailPattern, passwordPattern}) => {

    const { register, handleSubmit, watch, getFieldState, formState: { errors } } = useForm();

    const { handlerCreateUser, errors: errorEmailUnique, isLoginLoading } = useUsers();

    const watchAllFields = watch();   

    const onSubmit = async(data) => {              
        if  (await handlerCreateUser(data)) {
            resetForm();  
        }
    };

    if (isLoginLoading) {
        return (
            <div style={{height:"90vh"}} className="d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="formLogin container justify-content-center my-4 d-flex align-items-center">
                <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex justify-content-between align-items-baseline">                                
                        <h3>Registrate</h3>
                        <button 
                            type="button"
                            className='btn btn-lg'
                            onClick={() => dispatch(onToggleSignIn())}>
                                ¿Ya tenés cuenta? <span className="text-primary">Iniciá sesión</span>
                        </button>                    
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 my-1">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input                     
                                type="text" 
                                placeholder="Nombre"                       
                                id="name"
                                maxLength="20"
                                {...register("name", { required: true, minLength: 3})}
                                className={`form-control ${ watchAllFields.name?.length > 2 && 'is-valid' } ${errors.name && 'is-invalid'}`}
                            />
                            {errors.name?.type === 'required' && <p className="text-danger mb-0">El nombre es obligatorio </p>}  
                            {errors.name?.type === 'minLength' && <p className="text-danger mb-0">El nombre debe tener un mínimo de 2 caracteres </p>}                        
                        </div>
                        <div className="col-lg-6 col-md-12 my-1">
                            <label htmlFor="lastName" className="form-label">Apellido</label>
                            <input                     
                                type="text" 
                                placeholder="Apellido"                       
                                id="lastName"
                                maxLength="20"
                                {...register("lastName", { required: true, minLength: 3})}
                                className={`form-control ${watchAllFields.lastName?.length > 2 && 'is-valid' } ${errors.lastName && 'is-invalid'}`}
                            />
                            {errors.lastName?.type === 'required' && <p className="text-danger mb-0">El apellido es obligatorio</p>} 
                            {errors.lastName?.type === 'minLength' && <p className="text-danger mb-0">El apellido debe tener un mínimo de 3 caracteres </p>}                       
                        </div>
                        <div className="col-lg-6 col-md-12 my-1">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input                     
                                type="text" 
                                placeholder="Dirección de email"                       
                                id="email"
                                maxLength="40"
                                {...register("email", { required: true, pattern: emailPattern })}
                                className={`form-control ${watchAllFields?.email?.match(emailPattern) && !errorEmailUnique && 'is-valid' } ${errors.email && 'is-invalid'}`}
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
                                {...register("password", { required: true, pattern: passwordPattern })}
                                className={`form-control ${(watchAllFields?.password?.match(passwordPattern)) && 'is-valid' } ${errors.password && 'is-invalid'}`}
                            />
                            {errors.password?.type === 'required' && <p className="text-danger mb-0">Contraseña requerida</p>}
                            {errors.password?.type === 'pattern' && <p className="text-danger mb-0">Recuerda que la contraseña debe tener mínimo 8 caracteres, incluyendo una mayúscula y un número</p>}   
                        </div>
                        <div className="col-lg-6 col-md-12 my-1">
                            <label htmlFor="passwordRepeat" className="form-label">Repetir contraseña</label>
                            <input                     
                                type="password" 
                                placeholder="Ingrese de nuevo su contraseña"                       
                                id="passwordRepeat"
                                maxLength="16"
                                {...register("passwordRepeat", { required: true, validate: (value,formValues) => value === watchPassword })}
                                className={`form-control ${watchAllFields?.password == watchAllFields?.passwordRepeat && getFieldState("passwordRepeat")?.isDirty && 'is-valid' } 
                                    ${(errors.passwordRepeat || watchAllFields?.password !== watchAllFields?.passwordRepeat) && getFieldState("passwordRepeat")?.isDirty && 'is-invalid'}`}
                            />
                            {errors.passwordRepeat?.type === 'required' && <p className="text-danger mb-0">Este campo es obligatorio</p>}
                            {errors.passwordRepeat?.type === 'validate' && <p className="text-danger mb-0">Las contraseñas ingresadas no coinciden</p>}   
                        </div>                         
                    </div>           
                    <div className="d-flex justify-content-center gap-5 mt-4">
                        { isLoginLoading 
                            ? <button id="submitBtn" type="submit" className="w-50 btn btn-primary btn-lg ">
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0">Procesando</p>
                                        <div className="spinner-border text-info me-1" role="status"></div>
                                    </div>
                                </button>
                            : <button id="submitBtn" type="submit" className=" w-50 btn btn-primary btn-lg ">Registrarse</button>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}