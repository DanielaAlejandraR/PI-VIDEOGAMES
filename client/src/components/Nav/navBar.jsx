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
    </div>
    </div> 
    )
}

export default Nav; 