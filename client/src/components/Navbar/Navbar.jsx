import style from '../Navbar/Navbar.module.css'
import { useNavigate } from 'react-router-dom';


import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  //!Cuando le de click a titulo lo lleve a home
  const handleClick = () => navigate("/home");

  return (

<div>

<div className={style.tittle}
onClick={handleClick}>PI-VIDEOGAMES-HENRY

</div>

<NavLink to="/home">    
<p> HOME  </p>

 </NavLink>

                <NavLink to="/createGame">
                   
                   
                    <p>CREATE GAME</p>
             
             
                </NavLink>
             
             
                <NavLink to="/" >
             
                    <p>LOGOUT</p>
             
                </NavLink>
 
 </div>
  )



}
export default Navbar;
 // PROBAR DE ESTA FORMA CUALLQUIER COSA
//function Navbar ({handleChange , handleSubmit}){
//return(
  //<div>
 // <form onChange= {handleChange}>
 // <input placeholder="Busqueda" type = "search"/>
  
 // <button type ="submit" onClick={handleSubmit}>
  //   Buscar
 //   </button>
  
 // </form>
  
 // </div>
  
  

 // )
 // }