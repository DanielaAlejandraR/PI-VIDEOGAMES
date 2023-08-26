import React from "react";
import { NavLink } from "react-router-dom/";
import style from "./landing.module.css"

const LandingPage  = () => {
    return(
        <div className={style.cont}>
            <div className={style.welcomeCont}>
                <p className={style.welcome}>WELCOME TO</p>
            </div>

            <h1 className={style.name}>VIDEOGAMES</h1>

            <div className={style.botonCont}>
                <NavLink to="/home"><button className={style.boton}>Log in</button></NavLink>
            </div>
        </div>
    )
}


export default LandingPage ; 