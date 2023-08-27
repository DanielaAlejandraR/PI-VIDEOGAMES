import { NavLink } from "react-router-dom/";
import styles from "./landing.module.css"

const LandingPage  = () => {
    return(
        
        <div className={styles.cont}>
            <div className={styles.welcomeCont}>
                <p className={styles.welcome}>WELCOME TO</p>
            </div>

            <h1 className={styles.name}>VIDEOGAMES</h1>

            <div className={styles.botonCont}>
                <NavLink to="/home"><button className={styles.boton}>START</button></NavLink>
            </div>
        </div>
    );
}

export default LandingPage; 