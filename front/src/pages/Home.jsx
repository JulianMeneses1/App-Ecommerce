import { NavLink } from "react-router-dom"
import { Carousel } from "../components/Carousel"
import styles from './home.module.css'
import { useEffect } from "react"
import { useProducts } from "../hooks/useProducts"
import { initialProducts } from "../store/slices/products/productsSlice"

export const Home = () => {

    const {
        products,
        isLoading,
        getProductsByCategory
    } = useProducts();

    useEffect(()=> {
        if (products == initialProducts) {
            getProductsByCategory("notebooks");
            getProductsByCategory("monitores");
            getProductsByCategory("pcs");
            getProductsByCategory("placasDeVideo");
            getProductsByCategory("microprocesadores");       
        }        
    },[])

    if (isLoading) {
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
            <div className=" my-3 d-flex justify-content-center">
                <img src="https://www.herydes.es/_media/img/large/banner-generico1.jpg" className="img-fluid"/>
            </div>
            <div className="container my-4">
                <div className="d-flex align-items-center">
                    <h4 className="m-0">¡Encuentra la notebook ideal para jugar o trabajar!</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/notebooks?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {products[0].notebooks} category = "notebooks"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">PCs de escritorio full</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/pcs?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {products[2].pcs} category = "pcs"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Aprovechá las nuevas tecnologías visuales</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/monitores?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {products[1].monitores} category = "monitores"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Es hora de potenciar tu computadora</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/placas-de-video?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {products[3].placasDeVideo} category = "placasDeVideo"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Mejorá el rendimiento de tu pc</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/microprocesadores?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {products[4].microprocesadores} category = "microprocesadores"/>
            </div>
            
        </>
    )
}