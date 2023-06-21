import { Link } from "react-router-dom";
import styles from "../../styles/Paginator.module.css";

export const Paginator = ({ url, paginator }) => {  

    return (
        <> 
            {/* Genero un array de la misma longitud que la cantidad de páginas de paginator, 
            y lo reccorro con un map para obtener el índica de cada elemento ( el elemento en sí no lo uso, por eso uso la convención de poner "_") */}

            { paginator?.totalPages === 1 || 
                <>
                    {Array.from({length: paginator.totalPages}).map ((_,index)=> (            
                        <Link key={index} title={`Página ${index+1}`} className="page-link" to={`${url}${index}`}>
                            <div  className={paginator.number === index ? `${styles.containerPageSelected}` : `${styles.containerPage}`}>
                                <span className={styles.page}>{index +1}</span>
                            </div>
                        </Link>        
                        ))
                    }
                </> 
            }        
        </>
    )
}