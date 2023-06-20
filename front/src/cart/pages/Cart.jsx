import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import styles from "../../styles/Cart.module.css";
import { useEffect, useState } from "react";
import { Payment } from "../components/Payment";

export const Cart = () => {

    const navigate = useNavigate();

    const [total, setTotal] = useState(0);

    const { cartItems, handlerDeleteProductCart, handlerUpdateQuantityProductCart, calculateTotal} = useCart();

    const quantityIncrement = (item) => {
        handlerUpdateQuantityProductCart(item.product, item.quantity+1);
    };

    const quantityDecrement = (item) => {
        if (item.quantity > 1) {
            handlerUpdateQuantityProductCart(item.product, item.quantity-1);
            };
    }; 
    
    useEffect (() => {
        if (cartItems?.length > 0) {
            setTotal (calculateTotal(cartItems)); 
        }        
      }, [cartItems]);

    return (
        <>
            <h3 style={{backgroundColor:"#585880", padding: "5px 15px", marginBottom: "0px"}}>Carro de Compras</h3>
            { cartItems?.length == 0
                ?
                <>
                    <div className="alert alert-warning">
                        ¡Todavía no has cargado ningún producto! 
                    </div>
                    <div className="d-flex justify-content-center">
                        <button  
                            onClick={()=>navigate('/')}
                            className="btn btn-primary btn-lg ">
                            Ver Productos
                        </button>
                    </div> 
                </> 
                :
                <>
                    <div className="container-fluid">
                    
                        <div className={styles.container} >
                            <div className="w-75 mt-5 ms-3">
                                <h5>Tu pedido</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th className="d-none d-md-block">Precio</th>
                                            <th>Cantidad</th>
                                            <th>Subtotal</th>
                                            <th></th>                                
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { cartItems.map((item)=> (
                                            <tr key={item.product.id}>                                    
                                                <td className={`${styles.containerColumn} ${styles.containerProductColumn}`}>
                                                    <div className="d-flex align-items-center">
                                                        <NavLink className="d-none d-md-block nav-link" to={`/producto/${item.product.category.name}/${item.product.title.replace(/[./ ]/g, "-")}/${item.product.id}`}>
                                                            <img src={item.product.image} style={{height: "100%", maxWidth: "8em", marginRight: "20px"}}/>
                                                        </NavLink>                                                       
                                                        <p className="mb-0">{item.product.title}</p>                                                    
                                                    </div>                                                  
                                                </td>                                                                                   
                                                <td className={`${styles.containerColumn} d-none d-md-block`}>
                                                    <div className="d-flex align-items-center">
                                                        <p className="mb-0">${item.product.price}</p>
                                                    </div>
                                                </td>
                                                <td className={styles.containerColumn}>
                                                    <div className="d-flex align-items-center">
                                                        <p className="mb-0 fs-5">{item.quantity}</p>                                                        
                                                        <div>
                                                            <button className="btn d-block py-0" onClick={()=>quantityIncrement(item)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                                                </svg>
                                                            </button>
                                                            <button className="btn d-block py-0" onClick={()=>quantityDecrement(item)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>                                                    
                                                </td>
                                                <td className={styles.containerColumn}>
                                                    <div className="d-flex align-items-center">
                                                        <b>${item.quantity*item.product.price}</b>
                                                    </div>
                                                </td>
                                                <td className={styles.containerColumn}>
                                                    <div className="d-flex align-items-center">
                                                        <svg onClick={()=>handlerDeleteProductCart(item.product.id)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className={`bi bi-trash ${styles.buttonsEdition}`} viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                            ))
                                        }                      
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <button  
                                        onClick={()=>navigate('/')}
                                        className="btn btn-primary btn-lg mt-3">Seguir comprando</button>
                                </div>
                            </div>
                            <div className={`w-25 d-flex align-items-center justify-content-center ${styles.containerTotal}`} style={{borderLeft:"2px solid gray"}}>
                                <div className={styles.subContainerTotal}>
                                    <div className="d-flex gap-5 align-items-center">
                                        <h4 className="text-center">Total</h4>
                                        <h4 className="text-center"> $ {total}</h4>
                                    </div>
                                    <div className="text-center mt-4">
                                        <Payment total = {total}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }                    
        </>
    )
}