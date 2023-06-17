import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from '../../styles/ModalEditProduct.module.css'
import { useForm } from "react-hook-form";
import { useFiles } from "../hooks/useFiles";
import { useProducts } from "../hooks/useProducts";

export const ModalEditProduct = ({product}, props)=> {

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const watchAllFields = watch(); 

  const { uploadFile, resetImg, errorSize, urlUploadedFile } = useFiles();

  const { handlerAddOrUpdateProduct, errors: errorTitleUnique, cleanErrors } = useProducts();

  const resetForm = () => {
      reset(); 
      resetImg();
      cleanErrors();
  }

  useEffect(()=>resetForm(), [])

  const onSubmit = async(data) => { 
      if (errorSize) {
          return;
      }   
      if (!urlUploadedFile) {
        data.image=product.image;
      } else {
        data.image=urlUploadedFile;
      }
      const categorySelect = document.querySelector(`#category option[value="${data.category}"]`); 
      const categoryName = categorySelect ? categorySelect.getAttribute("data-name") : null; 
      data.category = {id: parseInt(data.category), name:categoryName}; 
      if  (await handlerAddOrUpdateProduct(data, product.category.name)) {
          resetForm();  
          handleClose();
      }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    resetForm();
  }
  const handleShow = () => setShow(true);

  return (
    <>      
      <svg onClick={handleShow} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className={`me-2 bi bi-pencil-square ${styles.buttonsEdition}`} viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg>    

      {/* MODAL */}

      <Modal 
        show={show} 
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title style={{ textAlign: 'center', margin: 'auto' }}>Editar Producto</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)} className="formEditProduct">   
          <Modal.Body>  
            <div className="row">
                <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                    <label htmlFor="title" className="form-label">Título</label>
                    <input                     
                        type="text" 
                        placeholder="Título del producto"                       
                        id="title"
                        defaultValue={product.title}
                        maxLength="100"
                        {...register("title", { required: true, minLength: 6 })}
                        className={`form-control ${watchAllFields?.title?.length > 5 && !errorTitleUnique.title && 'is-valid'} ${errors.title && 'is-invalid'}`}
                    />
                    {errors.title?.type === 'required' && <p className="text-danger mb-0">El título es obligatorio</p>}
                    {errors.title?.type === 'minLength' && <p className="text-danger mb-0">El título debe tener mínimo 6 caracteres</p>} 
                </div>
                <div className="col-xxl-4 col-lg-6 col-md-12 my-1">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea                      
                        type="text"                       
                        maxLength="300"
                        id="description"
                        defaultValue={product.description}
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
                        defaultValue={product.price}
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
                        className={`form-select ${watchAllFields?.category  && 'is-valid'} ${errors.category && 'is-invalid'}`}
                        id="category"
                        defaultValue={product.category.id}
                        {...register("category", {required:true})}
                    >
                      <option value="1" data-name="notebooks">Notebook</option>
                      <option value="2" data-name="pcs">PC de Escritorio</option>
                      <option value="3" data-name="monitores">Monitor</option>
                      <option value="4" data-name="placasDeVideo">Placa de Video</option>
                      <option value="5" data-name="microprocesadores">Microprocesador</option>                        
                    </select>
                    {errors.category?.type == 'required' && <p className="text-danger mb-0">Debe elegir una categoría</p>}
                </div>            
                <div className="col my-1">
                    <label htmlFor="image" className="form-label">Imagen</label>
                    <div className="d-flex gap-3 containerImg">
                        <input                       
                            className="form-control h-25 w-50"    
                            type="file"                       
                            id="image"
                            accept="image/*"
                            {...register("image")}
                            onChange= {uploadFile}
                        /> 
                        {urlUploadedFile && <img style={{ height: "8em"}} src={urlUploadedFile}/> }
                        {!urlUploadedFile && !errorSize && <img style={{ height: "8em"}} src={product.image}/> }
                    </div> 
                    {errors.image?.type == 'required' && <p className="text-danger mb-0">Debe subir una imagen</p>} 
                    {errorSize && <p className="text-danger mb-0">La imagen no puede pesar más de 3 mb</p>}
                </div>
                <input 
                    className="d-none" 
                    value={product.id}
                    {...register("id")}/> 
                </div>        
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: 'space-around'}}>
            <button id="resetBtn" type="button" className="btn btn-secondary btn-lg" onClick={handleClose}>Cerrar</button>
            <button id="submitBtn" type="submit" className="btn btn-primary btn-lg">Confirmar</button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
