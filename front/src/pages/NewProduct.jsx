import { useForm } from "react-hook-form";

export const NewProduct = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    console.log(watch("title"))

    return (
        <>
            <div className="formularioEvent container my-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Crear Producto</h2>
                    <div className="row">
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="title" className="form-label">Título</label>
                            <input                       
                                className="form-control"    
                                type="text" 
                                placeholder="Título del producto"                       
                                id="title"
                                maxLength="150"
                                {...register("title", { required: true })}
                            />
                            {errors.titleRequired
                                ? <p className="text-danger m-0">Este campo es obligatorio</p> 
                                : <p className="text-success m-0">Correcto!</p>
                            }                            
                        </div>
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="description" className="form-label">Descripción</label>
                            <textarea                       
                                className="form-control"    
                                type="text"                       
                                maxLength="300"
                                id="description"
                                placeholder="Descripción del producto"
                                />
                            <p 
                                className="text-danger m-0" 
                                >
                                Este campo es obligatorio
                            </p>    
                        </div>
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="price" className="form-label">Precio</label>
                            <input                       
                                className="form-control"    
                                type="text" 
                                placeholder="Precio del evento"                        
                                id="price"
                                maxLength="9"
                                />
                            <p 
                                className="text-danger m-0" 
                                >
                                Este campo es obligatorio
                            </p>
                        </div>
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="category" className="form-label">Categoría</label>
                            <select 
                                className="form-control" 
                                id="category"                         
                            >
                                <option defaultValue="1">Notebook</option>
                                <option value="2">Monitor</option>
                                <option vale="3">PC de Escritorio</option>
                                <option value="4">Placa de Video</option>                        
                                <option value="5">Microprocesador</option>                        
                            </select>
                            <p 
                                className="text-danger m-0" 
                            >
                                Este campo es obligatorio
                            </p>                 
                        </div>            
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="image" className="form-label">Imagen</label>
                            <input                       
                                className="form-control"    
                                type="file"                       
                                id="image"
                                accept="image/*"
                                />
                                <label className="textoModal"></label> 
                            <p 
                                className="text-danger m-0" >
                                Este campo es obligatorio
                            </p>
                        </div>  
                        <img className="imagenEdicion mb-1" src=""/>               
                    </div>           
                    <div className="d-flex justify-content-center gap-5">
                            <button id="submitBtn" type="submit" className="btn btn-primary">Enviar</button>
                            <button id="resetBtn" type="button" className="btn btn-danger">Resetear Formulario</button>
                    </div>
                </form>
            </div>
        </>
    )
}



