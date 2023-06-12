import { NavLink, useParams } from "react-router-dom";
import styles from './productDetails.module.css'
import { useState } from "react";

export const ProductDetails = () => {

    const {id} = useParams();

    const [counter, setCounter] = useState(1);

    const counterIncrement = () => {
        setCounter (counter + 1);
    };

    const counterDecrement = () => {
        if (counter > 1) {
            setCounter (counter -1)
            };
    };

    return (
        <>
            <div className="container my-4">
                <div className="d-flex align-items-center mb-5">
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                </svg>
                    </NavLink>
                    <NavLink className="nav-link" to={"/"}>
                        <h4 className="mb-1">Volver al Listado de Notebooks</h4>
                    </NavLink>
                </div>
                <div>
                    
                    <div className={`d-flex ${styles.containerProduct}`}>
                        <div className="w-60" >
                            <h5>Título Producto {id}</h5>
                            <img className="w-75" src="http://localhost:8080/files/notebook.jpg"/>
                            <div>
                                <h4>Descripción</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Expedita adipisci quas hic aliquam? Quis, 
                                    sequi et. Ullam alias commodi neque corrupti t
                                    empore blanditiis nihil ipsa, quibusdam amet sed doloremque qui.</p>
                            </div>
                        </div>
                        <div className={`w-40 ${styles.containerPayment}`}>
                            <h2>$300000</h2>
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