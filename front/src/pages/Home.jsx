import { NavLink } from "react-router-dom"
import { Carousel } from "../components/Carousel"
import styles from './home.module.css'
import { useEffect } from "react"

export const Home = () => {

    // useEffect(()=> {
    //     if (sessionStorage.getItem('products')== null) {
    //         getProducts();
    //     }
        
    // })

    return (
        <>
            <div className=" my-3 d-flex justify-content-center">
                <img src="https://www.herydes.es/_media/img/large/banner-generico1.jpg" className={styles.banner}/>
            </div>
            <div className="container my-4">
                <div className="d-flex align-items-center">
                    <h4 className="m-0">¡Encuentra la notebook ideal para jugar o trabajar!</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/notebooks?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "notebooks"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">PCs de escritorio full</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/pcs?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "pcs"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Aprovechá las nuevas tecnologías visuales</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/monitores?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "monitores"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Es hora de potenciar tu computadora</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/placas-de-video?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "placas-de-video"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Mejorá el rendimiento de tu pc</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/microprocesadores?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "microprocesadores"/>
            </div>
            
        </>
    )
}