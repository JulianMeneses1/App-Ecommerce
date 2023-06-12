import { NavLink } from 'react-router-dom'
import styles from './carousel.module.css'

export const Carousel = ({ category }) => {
    return (
        <>
            <div className="container-fluid my-4">                
                {/*  Carousel (width> 576 */}
                
                <div id="carouselExampleControls" className="carousel carousel-dark slide d-none d-sm-block" data-bs-ride="true">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <div className="cards-wrapper d-flex gap-3">
                                <div className={`card ${styles.cardModule}`}>                                    
                                        <NavLink className="nav-link" to={"/producto/1"}>
                                            <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>                                                                 
                                            <div className="card-body">                                     
                                                <h4 className="card-title">$ 300000</h4>
                                                <p className="card-text">{category}</p>
                                            </div>
                                        </NavLink>                                        
                                    
                                </div>
                                <div className={`card ${styles.cardModule}`}>
                                    
                                    <NavLink className="nav-link" to={"/producto/1"}>
                                            <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>                                                                 
                                            <div className="card-body">                                     
                                                <h4 className="card-title">$ 300000</h4>
                                                <p className="card-text">{category}</p>
                                            </div>
                                        </NavLink> 
                                </div>
                                <div className={`card ${styles.cardModule}`}>
                                    
                                    <NavLink className="nav-link" to={"/producto/1"}>
                                            <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>                                                                 
                                            <div className="card-body">                                     
                                                <h4 className="card-title">$ 300000</h4>
                                                <p className="card-text">{category}</p>
                                            </div>
                                        </NavLink> 
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <div className="cards-wrapper d-flex gap-3">
                                <div className={`card ${styles.cardModule}`}>
                                    
                                            <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                                      
                                    <div className="card-body">
                                        <h4 className="card-title">$ 300004</h4>
                                        <p className="card-text">{category}</p>
                                        
                                    </div>
                                </div>
                                <div className={`card ${styles.cardModule}`}>
                                    
                                            <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                                     
                                    <div className="card-body">
                                        <h4 className="card-title">$ 300005</h4>
                                        <p className="card-text">{category}</p>
                                        
                                    </div>
                                </div>
                                <div className={`card ${styles.cardModule}`}>
                                    
                                        <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                                   
                                    <div className="card-body">
                                        <h4 className="card-title">$ 300006</h4>
                                        <p className="card-text">{category}</p>
                                        
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <button className={`carousel-control-prev ${styles.carouselControlPrev}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className={`carousel-control-next ${styles.carouselControlNext}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* Galería  (width<576px) */}

                <div className="d-sm-none">
                    <div className="d-flex gap-2 mb-3">
                        <div className="card {styles.cardModule}">
                               
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                             
                                <div className="card-body">
                                    <h4 className="card-title">$ 300000</h4>
                                    <p className="card-text">{category}</p>
                                    
                                </div>
                            </div>
                            <div className="card {styles.cardModule}">
                              
                                    <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                              
                                <div className="card-body">
                                    <h4 className="card-title">$ 300001</h4>
                                    <p className="card-text">{category}</p>
                                </div>
                            </div>
                    </div>
                    
                    <div className="d-flex gap-2">
                        <div className="card {styles.cardModule}">
                        
                                <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                       
                            <div className="card-body">
                                <h4 className="card-title">$ 300003</h4>
                                <p className="card-text">{category}</p>
                            </div>
                        </div>
                        <div className="card {styles.cardModule}">
                        
                                <img src="http://localhost:8080/files/notebook.jpg" className="card-img-top"/>
                      
                            <div className="card-body">
                                <h4 className="card-title">$ 300004</h4>
                                <p className="card-text">{category}</p>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>            
        </>      
    )
}