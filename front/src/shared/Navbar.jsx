import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../auth/hooks/useAuth"
import { useSelector } from "react-redux";
import { useRef } from "react";

export const Navbar = () => {

    const { login, handlerLogout } = useAuth();  

    const { cartItems } = useSelector(state=>state.cart)

    
    const offcanvasRef = useRef();

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
                        data-bs-target="#nav" aria-controls="nav" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h3 className="navbar-brand"><NavLink className="nav-link" to="/">Informatik</NavLink></h3>                

                <div className="d-none d-lg-flex flex-grow-1 justify-content-between">
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle item fs-5" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="nav-link" to="categoría/notebooks?page=0">Notebooks</NavLink></li>
                                    <li><NavLink className="nav-link" to="categoría/pcs?page=0">PCs de Escritorio</NavLink></li>
                                    <li><NavLink className="nav-link" to="categoría/monitores?page=0">Monitores</NavLink></li>
                                    <li><NavLink className="nav-link" to="categoría/placasDeVideo?page=0">Placas de Video</NavLink></li>
                                    <li><NavLink className="nav-link" to="categoría/microprocesadores?page=0">Microprocesadores</NavLink></li>                          
                                </ul>
                            </li>
                           { login.isAdmin &&
                                <li className="nav-item">
                                    <NavLink className="nav-link item fs-5" to="/crear-producto">Crear Producto</NavLink>
                                </li>
                            }
                                           
                        </ul>
                    </div>                    
                </div> 
                <div className="container-icons d-flex align-items-baseline">
                    <ul className="navbar-nav">
                        { !login.isAuth && 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="gray" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                </NavLink>
                            </li>  
                        } 
                        <li className="nav-item">                           
                            { login.isAuth && 
                                <NavLink onClick={() => handlerLogout()} className="nav-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="gray" className="d-block d-lg-none bi bi-power" viewBox="0 0 16 16">
                                        <path d="M7.5 1v7h1V1h-1z"/>
                                        <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
                                    </svg>
                                </NavLink>  
                            }                        
                        </li>                          
                        <li className="nav-item">
                            <div id="cart">
                                <NavLink className="nav-link" to="/carrito-compras">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="gray" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                    <div id="counterItemsCart"><span>{cartItems.length}</span></div>
                                </NavLink>
                            </div>
                        </li>                               
                    </ul>
                    { login.isAuth &&
                        <>
                            <span className=" d-lg-block d-none nav-link mx-3 fs-5">
                                Bienvenido/a {login.user.username}
                            </span>
                            <button
                                className="d-lg-block d-none btn btn-danger fs-5"
                                onClick={() => handlerLogout()}>
                                Logout
                            </button>                           
                        </> 
                    }
                </div>  

                {/* NAVBAR COLAPSADO */}

                <div className="offcanvas offcanvas-start d-lg-none" ref={offcanvasRef} tabIndex="-1" id="nav" aria-labelledby="navLabel">
                    <div className="offcanvas-header">
                        <h3 className="navbar-brand" id="navLabel">
                            <NavLink onClick={() =>navigate('/')} className="nav-link" data-bs-dismiss="offcanvas">
                                Informatik
                            </NavLink>
                        </h3>   
                        <button type="button" className="btn-close" style={{fontSize: "20px"}} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li><NavLink onClick={() =>navigate('categoría/notebooks?page=0')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">Notebooks</NavLink></li>
                            <li><NavLink onClick={() =>navigate('categoría/pcs?page=0')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">PCs de Escritorio</NavLink></li>
                            <li><NavLink onClick={() =>navigate('categoría/monitores?page=0')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas" >Monitores</NavLink></li>
                            <li><NavLink onClick={() =>navigate('categoría/placasDeVideo?page=0')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">Placas de Video</NavLink></li>
                            <li><NavLink onClick={() =>navigate('categoría/microprocesadores?page=0')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">Microprocesadores</NavLink></li> 
                            { login.isAdmin &&
                                <li className="nav-item">
                                    <NavLink onClick={() =>navigate("/crear-producto")} className="nav-link item my-2 fs-5" data-bs-dismiss="offcanvas">Crear Producto</NavLink>
                                </li>
                            }                         
                        </ul>
                    </div>
                </div>          
            </div>
        </nav>    
    )
}