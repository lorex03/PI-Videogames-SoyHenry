//📍 GET | /videogames
//Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.


//const { Videogame, Genre } = require("../db");
//const {URL,API_KEY} = require("./utils");
//______________________________________________________________________________________________
//Únicos end-points que se pueden utilizar
//Videojuegos: "https://api.rawg.io/api/games"
//Por id: "https://api.rawg.io/api/games/{id}"
//Por nombre: "https://api.rawg.io/api/games?search={game}"
//Por genero: "https://api.rawg.io/api/genres"
//________________________________________________________________________________________________

//me explica ete codigo que realiza : const getAllVideogames = async ()=>{
  //const response = await axios(`${URL}${API_KEY}`); 
    //      const VideogameApi = response.data;  return VideogameApi;
    
 // } y el archivo utils contiene : const API_KEY = `?api_key=${process.env.API_KEY}`;
  //const URL = `https://api.rawg.io/api/games`;

 // El código que has compartido es una función llamada getAllVideogames que utiliza la biblioteca axios para hacer una solicitud a la API de Rawg.io. La función devuelve los datos de respuesta de la API en formato JSON.
  
  //La URL base de la API es https://api.rawg.io/api/games, y se utiliza una clave de API para autenticar la solicitud. La clave de API se almacena en una constante llamada API_KEY, que se agrega a la URL de la API como un parámetro de consulta.
  
 // La función getAllVideogames utiliza la URL y la clave de API para hacer una solicitud a la API utilizando axios. La respuesta de la API se almacena en una constante llamada VideogameApi, que luego se devuelve como resultado de la función.
  
//  En resumen, esta función hace una solicitud a la API de Rawg.io y devuelve los datos de respuesta en formato JSON.
const{Videogame,Genre}= require('../db')
const {Op} = require ('sequelize')
const {API_KEY} =process.env
//const {objVideogames} = require('./utils')
// Reemplaza tu_api_key con tu clave de API

// Hacer la petición con axios y obtener la respuesta
const axios = require('axios');

//const agent = new https.Agent({
  //rejectUnauthorized: false,
//}); ( esto es una funcion que lo que le indica al servidor es que confie en el acceso sin tener que fijarse de las certificacion es por parte del SSL )

const getAllVideogames =async () => {
  //try {
  const VideogameApi = ( await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data;
  
  const VideogameDB = await Videogame.findAll({
    include: [{
        model: Genre,
     attributes: ['name'],
       through: {
            attributes: [],
       }
    }]
  }); 
  
   const videogames = VideogameApi.results.map((game) => ({
    id: game.id,
    name: game.name,
    released: game.released,
    rating: game.rating,
    background_image: game.background_image,
    platform: game.platforms.map((platform) => platform.platform.name),
   
  }));

  const genres = VideogameDB.map((genre) => ({
    id: genre.id,
    name: genre.name,
  }));

  const allVideogame=[...videogames , ...genres] ;
  return allVideogame
}
  // res.status(200).json(allVideogame);
 
 // } catch (error) {
    
   //   return res.status(500).json({error: error.message})
   // }
//}
    
 // const GenreDB = await Genre.findAll();
  
 

    
  //const resultALL = VideogameApi.concat(VideogameDB);
//return resultALL



   //const resultALL = [...VideogameApi,...VideogameDB];
   //return res.status(200).json(resultALL);

//}

//const searchGameByName= async (name) =>{
 //const  VideogameApi=await 













//axios.get('https://api.rawg.io/api/games?key=b2b98f790edc46a1aa375e21ec28fcd3').then(response => {
    // La respuesta es un objeto con una propiedad data que contiene un arreglo de objetos
    // Cada objeto es un videojuego con su información

    // Manejar el error si ocurre
    //console.error(error);
 // });


//const getCountries= async() => { 
//  const  databaseCountries = await Country.findAll();
//return databaseCountries ;
 //}


 const searchGameByName = async (name) => {
  if (!name || name.trim().length === 0) {
      const name = name.split(' ').join('-').toLowerCase();
      const { data } = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
      const nameGameForApi = {
          id: data.id,
          name: data.name,
          released: data.released,
          rating: data.rating,
          rating_top:data.rating_top,
          background_image: data.background_image,
          platform: data.platforms.map((platform) => platform.platform.name),
          description: data.description,
          genres: data.genres.map((genre) => genre.name),
      };
      return nameGameForApi;
  } else {
      const NamegameDB = await Videogame.findAll(name, {
          where: {
              name: {
                  [Op.iLike]: `%${name}%`,
              },
          },
          include: [
              {
                  model: Genre,
                  attributes: ['name'],
                  through: {
                      attributes: [],
                  },
              },
          ],
          limit: 15,
      });
     NamegameDB;
  }
  const Allnames= [...nameGameForApi,...NamegameDB]
  return Allnames
};

  //if (videogamesDB.length === 0) {
//  if (!videogamesDB) {
 // ('No se encontraron videojuegos');
  //}
//return videogamesDB;



const getByIdGame = async(id) => {
  if(!id) {
     
  const gameIdDB = await Videogame.findByPk(id, {
         include: {   
         model: Genre,
             attributes: ['name'],
            through: {
                 attributes: [],
             }
         }
     });
  return  gameIdDB;
    
} else {
const {data}  = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
   
const gamesForApi = {
          id :  data.id,
          name:  data.name,
          released:  data.released,
         rating: data.rating,
          background_image:  data.background_image,
         platform: data.platforms.map((platform) => platform.platform.name),
          description:data.description,
           genres: data.genres.map((genre) => genre.name),
          
    }

return gamesForApi

  }
      
  
}
     

   //AVERIGUAR POR QUE PEROOO DESESTRUCTURAR LA DATA 
       
  const createVideoGames= async(name, released,rating,rating_top,background_image,description,platform,genres) => {
if(!name || !released || !rating || !rating_top || !background_image || !description || !platform || !genres) ("Falta por llenar datos");
  const newVideogame = await Videogame.create({
    name,
     released,
     rating,
     rating_top,
     background_image,
     description,
     platform

})
newVideogame.addGenres(genres)

return newVideogame
}

module.exports={
  getAllVideogames,
  searchGameByName,
  getByIdGame,
  createVideoGames
  }

 // const searchCountryByName = async (name) => { 
  // const databaseCountries=
   // await ({ where: { name: {   [Op.iLike]: `%${name}%` }} })
 //   return databaseCountries ;
 // } 
  


//const getAllDogs = async (req,res)=> { ------ const getAllVideogames = async (req,res)=> {     
    // ?limit=60 ----> para limitarlo, tengo que ver q limit 
  //  try {
    //    const response = await axios(`${URL}?limit=60`);  const response = await axios(`${URL}?limit=60`);
      //  const dogsData = response.data;
       // let resultdDB;
        //!Mapeo mi data y solo traigo lo que necesito
      
      
      
        //const dogs = dogsData.map( dogs => getObjData(dogs));
       // if(!dogs) throw new Error("La url de la api de dogs se encuentra en fallas ya que no llega data");
        //!Si quiero que aparezcan incluidos los que estan guardados por BD
      
        // const dogsDB = await Dog.findAll({
            //include: [{
                //model: Temperament,
               // attributes: ['name'],
              //  through: {
              //      attributes: [],
            //    }
          //  }]
          //});

       // resultdDB = dogsDB.map( element => getObjData(element));
        
     //   const resultALL = [...dogs,...resultdDB];

     //   return res.status(200).json(resultALL);
   // } catch (error) {
   //     return res.status(500).json({error: error.message})
 //   }
//}

//module.exports = getAllDogs;










//📍 GET | /videogames/name?="..."
//Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
//Debe poder buscarlo independientemente de mayúsculas o minúsculas.
//Si no existe el videojuego, debe mostrar un mensaje adecuado.
//Debe buscar tanto los de la API como los de la base de datos.






//📍 GET | /dogs/name?="..."
//Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
//Debe poder buscarlo independientemente de mayúsculas o minúsculas.
//Si no existe la raza, debe mostrar un mensaje adecuado.
//Debe buscar tanto los de la API como los de la base de datos.

//const axios = require("axios");
//const { API_KEY, URL, getObjData} = require("./utils");
//const { Dog, Temperament } = require("../db");
//const { Op } = require("sequelize");

//`https://api.thedogapi.com/v1/breeds`  

//const searchGameByName=async(name) => {
//  const game = VideogameApi.results.map((games) => ({
  //  id: games.id,
   // name: games.name,
   // released: games.released,
   // rating: games.rating,
   // background_image: games.background_image,
    //platform: games.platforms.map((platform) => platform.platform.name),
  //}))


//  if (name) {
  //let sname = name.split(' ').join('-').toLowerCase()
 // var apiresult = await axios.get(`https://api.rawg.io/api/games?search=${sname}&key=${API_KEY}`)
 // apiresult = apiresult.data.results
//
//}

 //  const getDogsByName = async (req,res)=> {
     //  try {
         //  const name = req.query.name;
        //! Comente la api de buscar por nombre, por que la url no trae la imagen
        
        //https://api.thedogapi.com/v1/breeds/search?q=america
        //   const response = await axios(`${URL}/search?q=${name}&${API_KEY}`);
        //const response = await axios(`${URL}${API_KEY}`);
         //  const searchDogsByNameAPI = response.data;
         //  let resultdDB;
         //  const dogs = searchDogsByNameAPI.map( dogs => getObjData(dogs));
        //const dogsByname = dogs.filter( dogs => dogs.name.toLowerCase().includes(name.toLowerCase()));
          //
          //  if(!dogs) throw new Error("No se encontro la raza indicada");
         //  const searchDogsByNameDB = await Dog.findAll({
             //  where: {
                //   name: {
                  //     [Op.iLike]: `%${name}%`
                //   }
             //  },
            //   include: [{
               //    model: Temperament,
                //   attributes: ['name'],
             //      through: {
             //       attributes: [],
           //     }
         //   }]
       // })
       // if(!searchDogsByNameDB) throw new Error("No se encontro la raza indicada");
        //resultdDB = searchDogsByNameDB.map( element => getObjData(element));
        
        
        //const result = [...dogs,...resultdDB];
      //  return res.status(200).send(result);
    //} catch (error) {
    //    return res.status(500).json({error: error.message});
  //  }
//}

//module.exports = getDogsByName;





//📍 POST | /videogames
//Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
//Toda la información debe ser recibida por body.
//Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).



//----------------------------------------------------------------------------------

//📍 POST | /dogs
//Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
//Toda la información debe ser recibida por body.
//Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).

//------------------------------------------------EJEMPLOO------------------------------------------------------------------------------
//const { Dog } = require("../db");

//const createDogs = async (req,res)=> {
  //  try {
    //    const { name, height, weight, yearsLife, image, tem } = req.body;
      //  if(!name || !height || !weight || !yearsLife || !image || !temperaments) throw new Error("Falta por llenar datos");
      //  const newDog = await Dog.create({
        //    image,
          //  name,
          //  height,
           // weight,
           // yearsLife
        //})
        //newDog.addTemperaments(temperaments);
        //return res.status(200).json(newDog);
    //} catch (error) {
      //  return res.status(500).json({error: error.message});
   // }
//}

//module.exports = createDogs;


//📍 GET | /genres
//Obtiene un arreglo con todos los géneros existentes de la API.
//En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
//Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

//--------------------------------------------------------------------------------------------
//📍 GET | /temperaments
//Obtiene todos los temperamentos existentes.
//Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

//--------------------------------------------------------------------------------------------------
//------------------------------EJEMPLOOOO-------------------------------------------------------
//const { Temperament } = require("../db");
//const axios = require("axios");
//const { API_KEY, URL} = require("./utils");

//const getTemperaments = async (req,res)=> {
  //  try {
    //    const response = await axios(`${URL}${API_KEY}`);
      //  const dogs = response.data;
      //  const temperaments = dogs.map( element => element.temperament );
       // temperaments.forEach( element => {
           // if(element) {
         //       let temperamentArray = element.split(",")
                //temperamentArray.forEach( temperament => {
                   // Temperament.findOrCreate({
                   //     where: {
                 //           name: temperament.trim()
               //         }
             //       })
           //     });
         //   }
       // });
       // const allTemperament = await Temperament.findAll();
      //  return res.status(200).json(allTemperament);
    //} catch (error) {
    //    return res.status(500).json({error: error.message})
  //  }
//}

//module.exports = getTemperaments