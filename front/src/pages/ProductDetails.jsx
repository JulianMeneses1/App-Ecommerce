import { NavLink, useParams } from "react-router-dom";
import styles from './productDetails.module.css'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useProducts } from "../hooks/useProducts";

export const ProductDetails = () => {

    const {id} = useParams();

    const { getProduct, getCategoryName, product, isLoadingProduct} = useProducts();

    const { isAdmin } = useSelector(state => state.auth);

    const [counter, setCounter] = useState(1);

    const counterIncrement = () => {
        setCounter (counter + 1);
    };

    const counterDecrement = () => {
        if (counter > 1) {
            setCounter (counter -1)
            };
    }; 

    useEffect(()=>{
       getProduct(id);
    },[id])

    let categoryName = getCategoryName(product?.category?.name);  

    if (isLoadingProduct) {
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
            <div className="container my-4">
                <div className="d-flex align-items-center mb-5">
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                </svg>
                    </NavLink>
                    <NavLink className="nav-link" to={`/categoría/${product?.category?.name}?page=0`}>
                        <h4 className="mb-1">Volver al Listado de {categoryName}</h4>
                    </NavLink>
                </div>
                <div>
                    
                    <div className={`d-flex ${styles.containerProduct}`}>
                        <div className="w-60" >
                            <div className="d-flex flex-wrap gap-3">
                                <h5> {product?.title}</h5>                                
                               { isAdmin && 
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className={`me-2 bi bi-pencil-square ${styles.buttonsEdition}`} viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className={`bi bi-trash ${styles.buttonsEdition}`} viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                        </svg>
                                    </div>
                                }
                            </div>
                         
                            <img className="w-75" src={product?.image}/>
                            <div>
                                <h4>Descripción</h4>
                                <p>{product?.description}</p>
                            </div>
                        </div>
                        <div className={`w-40 ${styles.containerPayment}`}>
                            <h2>{`$${product?.price}`}</h2>
                            <p className="text-secondary">Válido para 1 pago en efectivo, débito o transferencia bancaria</p>
                            <div className={`separator ${styles.separator}`}></div>
                            <div className="d-flex gap-2">
                                <div className={` d-flex ${styles.containerCounter}`}>
                                    <input
                                        type="text"
                                        readOnly={true} 
                                        value={counter}
                                        className={`text-center bg-light form-control counter ${styles.counter}`}
                                        />
                                    <div className={`buttonsCounter ${styles.buttonsCounter}`}>
                                        <button className="btn btn-light " onClick={()=> counterIncrement()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                            </svg>
                                        </button>
                                        <button className="btn btn-light"onClick={()=> counterDecrement()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                <button 
                                    type="button"
                                    className="btn btn-primary btn-lg w-100">Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}