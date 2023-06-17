import { NavLink, useLocation, useParams } from "react-router-dom"
import queryString from 'query-string';
import styles from '../../styles/ProductsByCategory.module.css'
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import { Paginator } from "../components/Paginator";

export const ProductsByCategory = () => {   
    
    const {
        productsCategories,
        isLoadingCategories,
        paginator,
        getProductsCategories,
        getCategoryName
    } = useProducts();

    const {category} = useParams();

    const location = useLocation();
    const query = queryString.parse(location.search);
    const page = query.page;

    const categoryName = getCategoryName(category);    

    useEffect (()=> {
        getProductsCategories(category, page);            
    },[category, page])    

    if (isLoadingCategories) {
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
                <div className="d-flex align-items-center mb-3">
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                    </NavLink>
                    <h1>{categoryName}</h1>
                </div>
                <div className="d-flex gap-4 mb-3 flex-wrap justify-content-center">
                    { productsCategories[category].map((product) => (      
                        <div key={product.id} className={`card ${styles.cardModule}`}>                                                                                                         
                            <NavLink  className="nav-link" to={`/producto/${product.category.name}/${product.title.replace(/[./ ]/g, "-")}/${product.id}`}>
                                <div className='card-container-img d-flex '>
                                    <img src={product.image} className="card-img-top"/> 
                                </div>                                                                 
                                <div className="card-body"> 
                                    <h4 className="card-text">{"$ " + product.price}</h4>                                    
                                    <p className="card-title">{product.title}</p>
                                </div>
                            </NavLink>
                        </div>
                        ))
                    }       
                </div>
                <div className="d-flex justify-content-center">
                    <Paginator url ={`/categoría/${category}?page=`} paginator = {paginator}/>
                </div>

            </div>
        </>
    )  
}