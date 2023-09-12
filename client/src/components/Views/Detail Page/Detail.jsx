import style from "../Detail Page/Detail.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetById } from '../../../redux/actions';



const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const game = useSelector( state => state.gameById );
  
  const clickBack = () => {
    console.log("hola");
    navigate("/home");
    dispatch(resetById());
    
}
  
// id,name,background_image,platform,description,released,rating,genres  
  //en caso fijarme de la etiqueta img sino trae l.aa imagen jeje 
  return(
   
    <div className={style.gen}>
   
   <img src ={game.background_image}/>


        <div className={style.detail}>
            <h1> {game.name} </h1>
             {
              game.released && game.released.includes("released") ? <p> Released:  {game.released.split(" - ")[1]}</p> 
              : <p> Released:{game.released} </p>
             }



            <div className={style.rat}>
                <p> Rating:   {game.rating}  </p>
                <p> Rating_Top:   {game.rating_top}  </p>
                <p> Description:   {game.description}  </p>
            </div>

            <div>
                <h2>Genres</h2>
                <ul>
                    { game.genres && game?.genres.map( genre => <li>{genre}</li>)}
                </ul>
                <h2>Platform</h2>
                <ul>
                    { game.platform && game?.platform.map( platform => <li>{platform}</li>)}
                </ul>

            </div>
            <button onClick={clickBack}>GO BACK</button>
        </div>
    </div>

    )
    }
    
    export default Detail;
//_____________________________________________________________________________________
 //   📍 DETAIL PAGE | en esta vista se deberá
 // mostrar toda la información específica de un videojuego:


   //     ID.   
     //  Nombre.
   //    Imagen.
     // Plataformas.
  //    Descripción.
       // Fecha de lanzamiento. 
    //    Rating.
    // Géneros.

      // EN MI BACKEND ESTO ESTA EN INGLES ASI QUE 
        //   //     ID.   = ID 
     //  Nombre. =         NAME 
   //    Imagen. =         BACKGROUND IMAGE 
     // Plataformas. =     PLATFORM 
  //    Descripción.=      DESCRIPTION
       // Fecha de lanzamiento.  =  RELEASED
    //    Rating.=               RATIN Y RATING TOP
    // Géneros. =                  GENRES

    
     //  Nombre.
   //    Imagen.
     // Plataformas.
  //    Descripción.
       // Fecha de lanzamiento. 
    //    Rating.
    // Géneros.