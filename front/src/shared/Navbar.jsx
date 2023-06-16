import { NavLink } from "react-router-dom"
import { useAuth } from "../auth/hooks/useAuth"

export const Navbar = () => {

    const { login, handlerLogout } = useAuth();  

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" aria-controls="navbarNav" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h3 className="navbar-brand"><NavLink className="nav-link" to="/">Informatik</NavLink></h3>                

                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
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
                <div className="d-flex align-items-baseline">
                    <ul className="navbar-nav">
                        { !login.isAuth && 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                </NavLink>
                            </li>  
                        }                          
                        <li className="nav-item">
                                <NavLink className="nav-link" to="/carrito-compras">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                </NavLink>
                        </li>       
                    </ul>
                    { login.isAuth &&
                        <>
                            <span className="nav-link mx-3 fs-5">
                                Bienvenido/a {login.user.username}
                            </span>
                            <button
                                className="btn btn-danger fs-5"
                                onClick={() => handlerLogout()}>
                                Logout
                            </button>
                        </> 
                    }
                </div>            
            </div>
        </nav>    
    )
}