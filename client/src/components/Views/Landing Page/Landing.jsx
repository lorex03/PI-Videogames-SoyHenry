import style from './Landing.module.css';
//import {Link} from "react-router-dom";


const Landing = ({login}) => {
    return(
    <div className={style.h1}>
    <h1>WELCOME </h1>

    <button type='submit' onClick={login}> HOME</button>


    </div>
    
    )
    }
    
    export default Landing;

    //📍 LANDING PAGE | deberás crear una página de inicio o bienvenida con:

//Alguna imagen de fondo representativa al proyecto.
//Botón para ingresar a la home page.

//asi me FUNCIONO ANTES EL BOTON DE HOME
//<button className={style.button}>
//<Link className={style.link} to = "/home">
//Home
//</Link> 
//</button>