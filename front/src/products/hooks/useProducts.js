import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findByCategoryPages, findById, remove, save, update } from "../services/productsService";
import { addProduct, onLoading, loadingProduct, loadingProductsCategories, loadingProductsHome, removeProduct, setErrors, updateProduct } from "../../store/slices/products/productsSlice";
import { useAuth } from "../../auth/hooks/useAuth";

export const useProducts = () => {
    
    const { productsHome, product, productsCategories, isLoadingHome, isLoadingCategories, isLoadingProduct, paginator, errors} = useSelector(state => state.products);
    const { handlerLogout } = useAuth;
    const dispatch = useDispatch();
    const navigate = useNavigate();  
    
    const getCategoryName = (category) => { 
        let categoryName = '';

        switch (category) {
            case "notebooks":
                return categoryName = "Notebooks";
            case "monitores":
                return categoryName = "Monitores";
            case "pcs":
                return categoryName = "PCs de Escritorio";
            case "placasDeVideo":
                return categoryName = "Placas de Video";
            case "microprocesadores":
                return categoryName = "Microprocesadores";
            default:
                return categoryName = "Categoría no encontrada";
        }
    }

    const getProductsHome = async (category, page = 0, size = 6 ) => {
        try {            
            const result = await findByCategoryPages(category, page, size );
            dispatch(loadingProductsHome({ data: result.data, category, page: "Home" }));
        } catch (error) {
            throw error;
        }
    }

    const getProductsCategories = async (category, page = 0, size = 6 ) => {
        try {
            dispatch(onLoading());
            const result = await findByCategoryPages(category, page, size );
            dispatch(loadingProductsCategories({ data: result.data, category, page: "Categories" }));
        } catch (error) {
            throw error;
        }
    }

    const getProduct = async (id) => {
        try {
            dispatch(onLoading());
            const result = await findById(id);
            dispatch(loadingProduct(result.data));
        } catch (error) {
            throw error;
        }
    }

    const handlerAddOrUpdateProduct = async (product, category) => {
        try {
            let response;
            if (product.id === 0 ) {
                response = await save(product);
                dispatch(addProduct({product: response.data, category}));
            } else {
                response = await update(product);
                dispatch(updateProduct({product: response.data, category}));
            };         
            Swal.fire(
                (product.id=== 0) ? 'Producto Creado' : 'Usuario Actualizado',
                (product.id=== 0) ? 'El producto '+ product.title +' ha sido creado exitosamente' :
                'El producto '+ product.title +' ha sido actualizado exitosamente',
                'success'
            );
        } catch (error) {
            if (error.response && error.response.status == 500 &&
                error.response.data?.message?.includes('constraint'))
            {
                if (error.response.data?.message?.includes('UK_title')) {
                    dispatch(setErrors({title: 'El título ingresado ya existe'}))
                }
            }
            else if (error.response?.states == 401) {
                Swal.fire(
                    'Sesión Inválida',
                    'Lo sentimos, parece que su sesión ha expirado, debe volver a iniciar sesión',
                    'warning'
                )  
                handlerLogout();
                navigate("/");  
            }
            else {
                throw error;
            }
        }
    }

    const handlerRemoveProduct = async (id, category) => {
        Swal.fire({
            title: '¿Esta seguro que desea eliminar este producto?',              
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await remove(id);
                    dispatch (removeProduct({category, id }));
                    navigate("/");
                    Swal.fire(
                        'Eliminado',
                        'El usuario ha sido eliminado con éxito',
                        'success'
                    );                        
                } catch (error) {                       
                    if (error.response?.status == 401) {
                        Swal.fire(
                            'Sesión Inválida',
                            'Lo sentimos, parece que su sesión ha expirado, debe volver a iniciar sesión',
                            'warning'
                        )    
                        handlerLogout();
                        navigate("/");  
                   }
                   else {
                    throw error;
                   }
                }                  
            }
          })     
    }

    return {
        productsHome,
        productsCategories,
        product,
        errors,
        isLoadingHome, 
        isLoadingCategories, 
        isLoadingProduct,
        paginator,
        handlerAddOrUpdateProduct,
        handlerRemoveProduct,
        getProductsHome,
        getProductsCategories,
        getProduct,
        getCategoryName
    }
}