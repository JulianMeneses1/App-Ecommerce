import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Navbar } from "../shared/Navbar"
import { Footer } from "../shared/Footer"
import { ProductsByCategory } from "../products/pages/ProductsByCategory"
import { LoginRegister } from "../auth/pages/LoginRegister"
import { NewProduct } from "../products/pages/NewProduct"
import { Cart } from "../cart/Cart"
import { ProductDetails } from "../products/pages/ProductDetails"
import { useSelector } from "react-redux"

export const AppRoutes = () => {

    const { login } = useSelector(state => state.auth);

    return (
        <>       
            <Navbar/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/categoría/:category' element={ <ProductsByCategory/> } />
                { login.isAuth || <Route path='/login' element={ <LoginRegister/> } />}
                { login.isAdmin && <Route path='/crear-producto' element={ <NewProduct/> } />}
                <Route path='/carrito-compras' element={ <Cart/> } />
                <Route path='/producto/:category/:title/:id' element={ <ProductDetails/> } />
                <Route path='/*' element= { <Navigate to='/'/> } />
            </Routes>
            <Footer/>
        </>
    )
}