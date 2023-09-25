import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({handleClick}) =>{
    return(
    <div className={styles.Container} >
        <div className={styles.linksContainer}>

            <NavLink 
            onClick={handleClick} 
            to="/home"
            className={({ isActive }) => isActive ? styles.activeLink : styles.normalLink}
            >HOME</NavLink>
            

            <NavLink
            onClick={handleClick} 
            to="/create"
            className={({ isActive }) => isActive ? styles.activeLink : styles.normalLink}
            > CREATE VIDEOGAME
            </NavLink>

            <div className={styles.logoutContainer}>
            <button className={styles.logoutButton}
            onClick={() => window.location.href = "/"}
            >Log out</button>
            </div>
        </div>
    </div> 
    )
}

export default Nav; 