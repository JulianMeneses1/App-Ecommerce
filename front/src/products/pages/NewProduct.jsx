import { useForm } from "react-hook-form";

export const NewProduct = () => {

    const { register, handleSubmit, watch, formState: { errors }, clearErrors, reset } = useForm();

    const watchAllFields = watch(); 

    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="formEvent container my-4 d-flex align-items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Crear Producto</h2>
                    <div className="row">
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="title" className="form-label">Título</label>
                            <input                     
                                type="text" 
                                placeholder="Título del producto"                       
                                id="title"
                                maxLength="100"
                                {...register("title", { required: true, minLength: 6 })}
                                className={`form-control ${watchAllFields?.title?.length > 5 && 'is-valid'} ${errors.title && 'is-invalid'}`}
                            />
                           {errors.title?.type === 'required' && <p className="text-danger mb-0">El título es obligatorio</p>}
                           {errors.title?.type === 'minLength' && <p className="text-danger mb-0">El título debe tener mínimo 6 caracteres</p>}                         
                        </div>
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="description" className="form-label">Descripción</label>
                            <textarea                      
                                type="text"                       
                                maxLength="200"
                                onClick={() => clearErrors("description")}
                                id="description"
                                placeholder="Descripción del producto"
                                {...register("description", { required: true, minLength: 20})}
                                className={`form-control ${watchAllFields?.description?.length > 19 && 'is-valid'} ${errors.description && 'is-invalid'}`} 
                                />
                            {errors.description?.type === 'required' && <p className="text-danger mb-0">La descripción es obligatoria</p>}
                            {errors.description?.type === 'minLength' && <p className="text-danger mb-0">La descripción debe tener mínimo 20 caracteres</p>}   
                        </div>
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="price" className="form-label">Precio</label>
                            <input                       
                                type="number" 
                                placeholder="Precio del evento"                        
                                id="price"
                                {...register("price", { required: true, min: 0, max:10000000})}
                                className={`form-control ${(watchAllFields?.price > 0 && watchAllFields?.price < 10000000) && 'is-valid'} ${errors.price && 'is-invalid'}`} 
                                />
                            {errors.price?.type === 'required' && <p className="text-danger mb-0">El precio es obligatorio</p>}
                            {(errors.price?.type === 'max' || errors.price?.type === 'min')  
                                && <p className="text-danger mb-0">El precio no puede ser negativo o mayor a diez millones!</p>}
                        </div>
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="category" className="form-label">Categoría</label>
                            <select 
                                className="form-select" 
                                id="category"
                                {...register("category", {required:true})}                         
                            >
                                <option value="">Seleccione una categoría</option>
                                <option value="1">Notebook</option>
                                <option value="2">Monitor</option>
                                <option vale="3">PC de Escritorio</option>
                                <option value="4">Placa de Video</option>                        
                                <option value="5">Microprocesador</option>                        
                            </select>
                            {errors.category?.type == 'required' && <p className="text-danger mb-0">Debe elegir una categoría</p>}
                        </div>            
                        <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label htmlFor="image" className="form-label">Imagen</label>
                            <input                       
                                className="form-control"    
                                type="file"                       
                                id="image"
                                accept="image/*"
                                {...register("image", { required: true })}
                                /> 
                                {errors.image?.type == 'required' && <p className="text-danger mb-0">Debe subir una imagen</p>} 
                                <img className="imagenEdicion mb-1" src=""/>                            
                        </div>
                        <input 
                            className="d-none" 
                            value="0"
                            {...register("id")}/> 
                    </div>           
                    <div className="d-flex justify-content-center gap-5 mt-3">
                            <button id="submitBtn" type="submit" className="btn btn-primary btn-lg ">Enviar</button>
                            <button id="resetBtn" type="button" className="btn btn-danger btn-lg" onClick={()=> reset()}>Resetear Formulario</button>
                    </div>
                </form>
            </div>
        </>
    )
}



