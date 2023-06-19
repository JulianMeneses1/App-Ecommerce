import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addProductCart, deleteProductCart, updateQuantityProductCart } from "../../store/slices/cart/cartSlice";
import { useEffect } from "react";

export const useCart = () => {

    const {cartItems} = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect (() => {
        sessionStorage.setItem('cart',JSON.stringify(cartItems));
     }, [cartItems]);

    const handlerAddProductCart = (product, quantity) => {
        const hasItem = cartItems.filter((item)=> item.product.id == product.id)
        if (hasItem.length > 0){
            quantity = hasItem[0].quantity + quantity;
            dispatch(updateQuantityProductCart({product, quantity}));
            navigate("/carrito-compras");
            return;
        }
        try {            
            dispatch(addProductCart({product, quantity}));
            navigate("/carrito-compras");
        }
        catch (error) {
            throw error;
        }
    }
    const handlerUpdateQuantityProductCart = (product, quantity) => {
        try {
            dispatch(updateQuantityProductCart({product, quantity}));
        }
        catch (error) {
            throw error;
        }
    }

    const handlerDeleteProductCart = (id) => {
        try {
            dispatch(deleteProductCart(id));
        }
        catch (error) {
            throw error;
        }
    }

    const calculateTotal = (cartItems) => {
        return cartItems
        .map(item => item.product.price * item.quantity)
        .reduce( (accumulator, total) => accumulator + total, 0);
    }

    return {
        handlerAddProductCart,
        handlerDeleteProductCart,
        handlerUpdateQuantityProductCart,
        calculateTotal,
        cartItems
    }
}