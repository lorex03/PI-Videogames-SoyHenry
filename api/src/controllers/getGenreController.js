const { Genre } = require("../db");
const axios = require("axios");
const {API_KEY} =process.env
const {mapGenre} =require('./utils')

 
const getGenres = async () => {
 
    const ApiGenre= (
  await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`))
  .data
  
  const genreApi=mapGenre(ApiGenre);

 const genreApiDb= await Genre.bulkCreate(genreApi)

  return genreApiDb;
    }
  




module.exports={getGenres}











//URL A UTILIZAR POR GENERO : https://api.rawg.io/api/genres





//📍 GET | /genres
//Obtiene un arreglo con todos los géneros existentes de la API.
//En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
//Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo).
//_ Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
//______________                   EJEEMPLO_____________________________________________________________


