import { NavLink } from "react-router-dom"
import { Carousel } from "../components/Carousel"
import styles from '../styles/Home.module.css'
import { useEffect } from "react"
import { useProducts } from "../products/hooks/useProducts"
import { initialProducts } from "../store/slices/products/productsSlice"

export const Home = () => {

    const {
        productsHome,
        isLoading,
        getProductsHome
    } = useProducts();

    useEffect(()=> {
        if (productsHome == initialProducts) {
            getProductsHome("notebooks");
            getProductsHome("monitores");
            getProductsHome("pcs");
            getProductsHome("placasDeVideo");
            getProductsHome("microprocesadores");       
        }        
    }, [])

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
            <div id="carouselBanner" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="4" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className={`w-100 ${styles.banner}`} src="http://ec2-3-86-240-39.compute-1.amazonaws.com:8080/files/Slide%201.jpg"  alt="Slide 1"/>   
                    </div>
                    <div className="carousel-item">
                        <img className={`w-100 ${styles.banner}`} src="http://ec2-3-86-240-39.compute-1.amazonaws.com:8080/files/Slide%202.jpg" alt="Slide 2"/>
                    </div>
                    <div className="carousel-item">
                        <img className={`w-100 ${styles.banner}`} src="http://ec2-3-86-240-39.compute-1.amazonaws.com:8080/files/Slide%203.jpg" alt="Slide 3"/>
                    </div>
                    <div className="carousel-item">
                        <img className={`w-100 ${styles.banner}`} src="http://ec2-3-86-240-39.compute-1.amazonaws.com:8080/files/Slide%204.jpg" alt="Slide 4"/>
                    </div>
                    <div className="carousel-item">
                        <img className={`w-100 ${styles.banner}`} src="http://ec2-3-86-240-39.compute-1.amazonaws.com:8080/files/Slide%205.jpg" alt="Slide 5"/>
                    </div>
                </div>            
            </div>
            <div className={`container my-4  ${styles.containerResponsive}`}>
                <div className="d-flex align-items-center">
                    <h4 className="m-0">¡Encuentra la notebook ideal para jugar o trabajar!</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/notebooks?page=0'}><p style={{fontSize:"20px"}} className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {productsHome.notebooks} />
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">PCs de escritorio full</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/pcs?page=0'}><p style={{fontSize:"20px"}} className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {productsHome.pcs} />
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Aprovechá las nuevas tecnologías visuales</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/monitores?page=0'}><p style={{fontSize:"20px"}} className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {productsHome.monitores}/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Es hora de potenciar tu computadora</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/placasDeVideo?page=0'}><p style={{fontSize:"20px"}} className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {productsHome.placasDeVideo} />
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Mejorá el rendimiento de tu pc</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/microprocesadores?page=0'}><p style={{fontSize:"20px"}} className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel products = {productsHome.microprocesadores}/>
            </div>
            
        </>
    )
}