import { AppRoutes } from "./routes/AppRoutes"
import { Provider } from "react-redux"
import { store } from "./store/store"


export const EcommerceApp = () => {
    
    return (
        <Provider store={store}>
            <AppRoutes/>
        </Provider> 
    )
}