import { useForm } from "react-hook-form";

export const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    console.log(watch("title"))

    return (
        <>            
            <div class="formularioEvent container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Crear Producto</h2>
                    <div class="row">
                        <div class="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label for="title" class="form-label">Título</label>
                            <input                       
                                class="form-control"    
                                type="text" 
                                placeholder="Título del producto"                       
                                id="title"
                                maxlength="150"
                                {...register("title", { required: true })}
                            />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <p
                                class="text-success m-0">
                                Correcto!
                            </p> 
                            <p 
                                class="text-danger m-0" 
                                >
                                Este campo es obligatorio
                            </p> 
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label for="description" class="form-label">Descripción</label>
                            <textarea                       
                                class="form-control"    
                                type="text"                       
                                maxlength="300"
                                id="description"
                                placeholder="Descripción del producto"
                                />
                            <p 
                                class="text-danger m-0" 
                                >
                                Este campo es obligatorio
                            </p>    
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label for="price" class="form-label">Precio</label>
                            <input                       
                                class="form-control"    
                                type="text" 
                                placeholder="Precio del evento"                        
                                id="price"
                                maxlength="9"
                                />
                            <p 
                                class="text-danger m-0" 
                                >
                                Este campo es obligatorio
                            </p>
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label for="category" class="form-label">Categoría</label>
                            <select 
                                class="form-control" 
                                id="category"                         
                            >
                                <option selected></option>
                                <option value="1">Notebook</option>
                                <option value="2">Monitor</option>
                                <option vale="3">PC de Escritorio</option>
                                <option value="4">Placa de Video</option>                        
                                <option value="5">Microprocesador</option>                        
                            </select>
                            <p 
                                class="text-danger m-0" 
                            >
                                Este campo es obligatorio
                            </p>                 
                        </div>            
                        <div class="col-xxl-4 col-lg-6 col-md-12 my-1">
                            <label for="image" class="form-label">Imagen</label>
                            <input                       
                                class="form-control"    
                                type="file"                       
                                id="image"
                                accept="image/*"
                                />
                                <label class="textoModal"></label> 
                            <p 
                                class="text-danger m-0" >
                                Este campo es obligatorio
                            </p>
                        </div>  
                        <img class="imagenEdicion mb-1" src=""/>               
                    </div>           
                    <div class="d-flex justify-content-center gap-5">
                            <button id="submitBtn" type="submit" class="btn btn-primary">Enviar</button>
                            <button id="resetBtn" type="button" class="btn btn-danger">Resetear Formulario</button>
                    </div>
                </form>
            </div>
        </>
    )
}