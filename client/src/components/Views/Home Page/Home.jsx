import Cards from "../../CardsContainer/Cards"
import {  useSelector } from 'react-redux';
import style from "../Home Page/Home.module.css"

const Home = () => {
    const display = useSelector( state => state.displayState );
let result;

  //para poner TODOS LOS PERROS (ALL) LOS QUE CREARON EN DB (CREATE)
    //Y LOS DE LA API SOLAMENTE COMO (dogsApi)
    
    let gamesALL = useSelector( state => state.games );
    
    let gamesApi = useSelector( state => state.gamesApi );
    

    let gamesCreate = useSelector( state => state.gamesCreate );
    //!  me traigo los filtros para ver su estado

    const filterGenres = useSelector( state => state.filterGenres );
    
    const filterRating = useSelector( state => state.filterRating );
    
    const filterAlphabetic = useSelector( state => state.filterAlphabetic );
    
  //__________________________________________________________________________
  
  
  const gamesByName = useSelector( state => state.gamesByName );
    
  //console.log("filterTemperaments:",filterTemperaments);
  //console.log("filterWeight:",filterWeight);
  //console.log("filterAlphabetic:",filterAlphabetic);
  //console.log(dogsByName);

  if(display.all) {
      if(filterGenres.state) {
          if(filterGenres.data.length === 0) alert("I don't find by temperaments")
          result = filterGenres.data;


      } else if (filterRating.state) {
          result = filterRating.data;


      } else if (filterAlphabetic.state) {
          result = filterAlphabetic.data;
      } else
      
      {
          result = gamesALL;
      }
  } 
  if(display.api) {
      if(filterGenres.state) {
          if(filterGenres.data.length === 0) alert("I don't find by temperaments")
          result = filterGenres.data;


      } else if (filterRating.state) { 
          result = filterRating.data;
      } 
      
      else if (filterAlphabetic.state) {
          result = filterAlphabetic.data;
      
      
        } else {
          result = gamesApi;
      }
  } 
  if(display.create) {
      if(filterGenres.state) {
          if(filterGenres.data.length === 0) alert("I don't find by temperaments")
          result = filterGenres.data;



      } else if (filterRating.state) { 
          result = filterRating.data;
      }
      
      else if (filterAlphabetic.state) {
          result = filterAlphabetic.data;
      } else {
          result = gamesCreate;
      }
  }

  if(gamesByName.state) {
    if(gamesByName.data.length === 0) alert("I don't find by name")
    result = gamesByName.data;
}



















return (
    <div className={style.body}>
        {
            <Cards games={result} /> 
        }
    </div>
)
}

export default Home;

//EL HOME SE ENCARGARA
//📍 HOME PAGE | la página principal de tu SPA debe contener:


//__________________________________________________________________________
//SearchBar: un input de búsqueda para encontrar videojuegos por nombre.

//____________________________________________________________________________
//Sector en el que se vea un listado de cards con los videojuegos. 


//Al iniciar deberá cargar los primeros resultados
// obtenidos desde la ruta GET /videogames y deberá mostrar su:
//Imagen.
//Nombre.
//Géneros.


//__________________________________________________________________________
//Cuando se le hace click a una Card deberá redirigir
// al detalle de ese videojuego específico.

//___________________________________________________________________________
//___________________________________________________________________________
//Botones/Opciones para filtrar por género, y por si su origen es de la API
// o de la base de datos (creados por nosotros desde el formulario).
//___________________________________________________________________________
//Botones/Opciones para ordenar tanto ascendentemente
// como descendentemente los videojuegos por orden alfabético y por rating.
//___________________________________________________________________________
//Paginado: el listado de videojuegos se hará por partes.

// Tu SPA debe contar con un paginado que muestre un total de 15 videojuegos
// por página.
//___________________________________________________________________________


//⚠️ IMPORTANTE: se deben mostrar tanto los videojuegos traidos desde la API 
//como así también los de la base de datos,
// pero NO está permitido almacenar en la base de datos los videojuegos de la API.
// Solamente se pueden guardar aquellos creados desde el form.




//⚠️ IMPORTANTE: debido a que en la API existen alrededor de 500.000 videojuegos, 
//por cuestiones de performance puedes tomar la simplificación de obtener
// y paginar los primeros 100 videojuegos.