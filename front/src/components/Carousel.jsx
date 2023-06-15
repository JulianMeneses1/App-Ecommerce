import { NavLink } from 'react-router-dom'
import styles from './carousel.module.css'

export const Carousel = ({ products, category }) => {    

    return (
        <>
            <div className="container-fluid my-4"> 
                           
                {/*  Carousel (width> 576 */}
                
                <div id={`carousel-${category}`} className="carousel carousel-dark slide d-none d-sm-block" data-bs-ride="true">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <div className="cards-wrapper d-flex gap-3">
                                { products.slice(0,3).map((product) => (      
                                    <div key={product.id} className={`card ${styles.cardModule}`}>                                                                                                         
                                        <NavLink  className="nav-link" to={`/producto/${product.category.name}/${product.title.replace(/[. ]/g, "-")}/${product.id}`}>
                                            <img src={product.image} className="card-img-top"/>                                                                 
                                            <div className="card-body"> 
                                                <h4 className="card-text">{"$ " + product.price}</h4>                                    
                                                <p className="card-title">{product.title}</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                    ))
                                }          
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                             <div className="cards-wrapper d-flex gap-3">
                                 { products.slice(-3).map((product) => (      
                                     <div key={product.id} className={`card ${styles.cardModule}`}>                                                                                                         
                                         <NavLink className="nav-link" to={`/producto/${product.category.name}/${product.title.replace(/[. ]/g, "-")}/${product.id}`}>
                                             <img src={product.image} className="card-img-top"/>                                                                 
                                             <div className="card-body">                                     
                                                <h4 className="card-text">{"$ " + product.price}</h4>                                    
                                                <p className="card-title">{product.title}</p>
                                             </div>
                                         </NavLink>
                                     </div>
                                     ))
                                 }          
                             </div>                           
                        </div>
                        <button className={`carousel-control-prev ${styles.carouselControlPrev}`} type="button" data-bs-target={`#${`carousel-${category}`}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className={`carousel-control-next ${styles.carouselControlNext}`} type="button" data-bs-target={`#${`carousel-${category}`}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* Galería  (width<576px) */}

                <div className="d-sm-none">
                    <div className="d-flex gap-2 mb-3">
                       { products.slice(0,2).map((product )=> (
                            <div className={`card ${styles.cardModule}`} key={product.id}>                                    
                                <NavLink className="nav-link" to={`/producto/${product.category.name}/${product.title.replace(/[. ]/g, "-")}/${product.id}`}>
                                    <img src={product.image} className="card-img-top"/>                                
                                    <div className="card-body">
                                        <h4 className="card-title">{"$ " + product.price}</h4>
                                        <p className="card-text">{product.title}</p>                                    
                                    </div>
                                </NavLink>
                            </div>
                            ))
                       }                            
                    </div>
                    <div className="d-flex gap-2 mb-3">
                       { products.slice(-2).map((product )=> (
                            <div className={`card ${styles.cardModule}`} key={product.id}>                                    
                                <NavLink className="nav-link" to={`/producto/${product.category.name}/${product.title.replace(/[. ]/g, "-")}/${product.id}`}>
                                    <img src={product.image} className="card-img-top"/>                                
                                    <div className="card-body">
                                        <h4 className="card-title">{"$ " + product.price}</h4>
                                        <p className="card-text">{product.title}</p>                                    
                                    </div>
                                </NavLink>
                            </div>
                        ))
                       }                           
                    </div>
                </div>
            </div>            
        </>      
    )
}