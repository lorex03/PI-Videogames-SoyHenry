import style from './Landing.module.css';
import {Link} from "react-router-dom";


const Landing = ({login}) => {
    return(
    <div className={style.h1}>
    <h1>WELCOME </h1>
    <button className={style.button}>
   <Link className={style.link} to = "/home">
   Home
   </Link> 
</button>

    </div>
    
    )
    }
    
    export default Landing;

    