import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"
import { ProductsByCategory } from "../pages/ProductsByCategory"
import { LoginRegister } from "../auth/pages/LoginRegister"
import { NewProduct } from "../pages/NewProduct"
import { Cart } from "../cart/Cart"
import { ProductDetails } from "../pages/ProductDetails"
import { useSelector } from "react-redux"

export const AppRoutes = () => {

    const { isAdmin } = useSelector(state => state.auth);

    return (
        <>       
            <Navbar/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/categoría/:category' element={ <ProductsByCategory/> } />
                <Route path='/login' element={ <LoginRegister/> } />
                { isAdmin && <Route path='/crear-producto' element={ <NewProduct/> } />}
                <Route path='/carrito-compras' element={ <Cart/> } />
                <Route path='/producto/:category/:title/:id' element={ <ProductDetails/> } />
                <Route path='/*' element= { <Navigate to='/'/> } />
            </Routes>
            <Footer/>
        </>
    )
}