import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"
import { ProductsByCategory } from "../pages/ProductsByCategory"
import { Login } from "../pages/Login"
import { NewProduct } from "../pages/NewProduct"
import { Register } from "../pages/Register"
import { Cart } from "../pages/Cart"

export const AppRoutes = () => {
    return (
        <>       
            <Navbar/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/:category' element={ <ProductsByCategory/> } />
                <Route path='/login' element={ <Login/> } />
                <Route path='/registrarse' element={ <Register/> } />
                <Route path='/crear-producto' element={ <NewProduct/> } />
                <Route path='/carrito-compras' element={ <Cart/> } />
                <Route path='/*' element= { <Navigate to='/'/> } />
            </Routes>
            <Footer/>
        </>
    )
}