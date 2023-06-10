import { NavLink, useLocation, useParams } from "react-router-dom"
import queryString from 'query-string';
import styles from './productsByCategory.module.css'

export const ProductsByCategory = () => {

    const {category} = useParams();

    const location = useLocation();
    const query = queryString.parse(location.search);
    const page = query.page;

    return (
        <>
            <div className="container my-4">
                <div className="d-flex align-items-center">
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                    </NavLink>
                    <h1>{category}</h1>
                </div>
                    <div className="d-flex gap-2 mb-3">
                        <div className="card">
                               
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                             
                                <div className="card-body">
                                    <h4 className="card-title">$ 300000</h4>
                                    <p className="card-text">{category}</p>
                                    <p className="card-text">{page}</p>
                                    
                                </div>
                            </div>
                            <div className="card">
                               
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                             
                                <div className="card-body">
                                    <h4 className="card-title">$ 300000</h4>
                                    <p className="card-text">{category}</p>
                                    <p className="card-text">{page}</p>
                                    
                                </div>
                            </div>
                            
                            <div className="card">
                              
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                              
                                <div className="card-body">
                                    <h4 className="card-title">$ 300001</h4>
                                    <p className="card-text">{category}</p>
                                </div>
                            </div>
                            <div className="card">
                               
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                             
                                <div className="card-body">
                                    <h4 className="card-title">$ 300000</h4>
                                    <p className="card-text">{category}</p>
                                    <p className="card-text">{page}</p>
                                    
                                </div>
                            </div>
                    </div>
                    
                    <div className="d-flex gap-2 mb-3">
                        <div className="card">
                               
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                             
                                <div className="card-body">
                                    <h4 className="card-title">$ 300000</h4>
                                    <p className="card-text">{category}</p>
                                    <p className="card-text">{page}</p>
                                    
                                </div>
                            </div>
                            <div className="card">
                               
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                             
                                <div className="card-body">
                                    <h4 className="card-title">$ 300000</h4>
                                    <p className="card-text">{category}</p>
                                    <p className="card-text">{page}</p>
                                    
                                </div>
                            </div>
                            
                            <div className="card">
                              
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                              
                                <div className="card-body">
                                    <h4 className="card-title">$ 300001</h4>
                                    <p className="card-text">{category}</p>
                                </div>
                            </div>
                            <div className="card">
                               
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                             
                                <div className="card-body">
                                    <h4 className="card-title">$ 300000</h4>
                                    <p className="card-text">{category}</p>
                                    <p className="card-text">{page}</p>
                                    
                                </div>
                            </div>
                    </div>     
                </div>
        </>
    )
    
}