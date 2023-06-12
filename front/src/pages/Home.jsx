import { NavLink } from "react-router-dom"
import { Carousel } from "../components/Carousel"
import styles from './home.module.css'

export const Home = () => {
    return (
        <>
            <div className="container my-4">
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Notebooks</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/notebooks?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "notebooks"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">PCs de Escritorio</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/pcs?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "pcs"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Monitores</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/monitores?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "monitores"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Placas de Video</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/placas-de-video?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "placas-de-video"/>
                
                <div className="d-flex align-items-center">
                    <h4 className="m-0">Microprocesadores</h4>
                    <NavLink className={`nav-link me-3 ${styles.navLink}`} to={'categoría/microprocesadores?page=0'}><p className="text-center ms-4 m-0">Ver lista</p></NavLink>
                </div>
                <Carousel category = "microprocesadores"/>
            </div>
            
        </>
    )
}