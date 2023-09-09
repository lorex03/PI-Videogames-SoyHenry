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
    const filterPlatforms = useSelector( state => state.filterGenres );
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
          if(filterGenres.data.length === 0) alert("I don't find by genres")
          result = filterGenres.data;

      } 
       if(filterPlatforms.state) {
        if(filterPlatforms.data.length === 0) alert("I don't find by platforms")
        result = filterPlatforms.data;

    } 
      else if (filterRating.state) {
          result = filterRating.data;


      } else if (filterAlphabetic.state) {
          result = filterAlphabetic.data;
      } 
      
     

      else
      
      {
          result = gamesALL;
      }
  } 



  if(display.api) {
      if(filterGenres.state) {
          if(filterGenres.data.length === 0) alert("I don't find by temperaments")
          result = filterGenres.data;

          if(filterPlatforms.state) {
            if(filterPlatforms.data.length === 0) alert("I don't find by platforms")
            result = filterPlatforms.data;
    
        } 




      } else if (filterRating.state) { 
          result = filterRating.data;
      } 
      
      else if (filterAlphabetic.state) {
          result = filterAlphabetic.data;
      
      
        }    


        else {
          result = gamesApi;
      }
  } 



  if(display.create) {
      if(filterGenres.state) {
          if(filterGenres.data.length === 0) alert("I don't find by genres")
          result = filterGenres.data;

          if(filterPlatforms.state) {
            if(filterPlatforms.data.length === 0) alert("I don't find by platforms")
            result = filterPlatforms.data;
    
        } 

      } else if (filterRating.state) { 
          result = filterRating.data;
      }
      
      else if (filterAlphabetic.state) {
          result = filterAlphabetic.data;
      } 
      
      else if (filterPlatforms.state) {
        result = filterPlatforms.data;

    }
      
      else {
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