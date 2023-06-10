import styles from './footer.module.css'

export const Footer = () => {
    return (   
        <div className={styles.footer}>    
            <h5 className="text-center mb-1">Copyright @Junio 2023 - Informatik</h5>
            <p className="text-center fs-5">Powered by <a className={styles.navLink} href="https://julian-meneses.web.app/">@Julián Meneses</a></p>
        </div>         
    )
}