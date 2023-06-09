import { useState } from "react";
import { save } from "../services/filesService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";
import { useDispatch } from "react-redux";
import { finishLoading, onLoading } from "../../store/slices/products/productsSlice";

export const useFiles = () => {

    const [ errorSize, setErrorSize] = useState(false);

    const [ urlUploadedFile, setUrlUploadedFile] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {handlerLogout} = useAuth();
    
    const uploadFile = async (event) => {              
        const file = event.target.files[0]; 
        if (!file) {
            setUrlUploadedFile(undefined);
            return;
        } 
        if (file) {
          if (file.size > 3000000) {
            setErrorSize(true);
            setUrlUploadedFile('');
            return;
          }      
          try {
                dispatch(onLoading()); 
                const formData = new FormData();
                formData.append('file', file);
                const result = await save(formData);
                setUrlUploadedFile(result.data.url);
                setErrorSize(false);
                dispatch(finishLoading()); 
                return;
            } catch (error) {
                if (error.response?.status == 401) {
                    dispatch(finishLoading()); 
                    Swal.fire(
                        'Sesión Inválida',
                        'Lo sentimos, parece que su sesión ha expirado, debe volver a iniciar sesión',
                        'warning'
                    )    
                    handlerLogout();
                    navigate("/");  
               } else {
                throw error;
               }
            }                  
        }
    }

    const resetImg = () => {
        setErrorSize(false);
        setUrlUploadedFile('');
    }

    return {
        uploadFile,
        resetImg,
        errorSize,
        urlUploadedFile,
    } 
}

