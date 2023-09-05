

//______________________________________________________________________________________________
//Únicos end-points que se pueden utilizar
//Videojuegos: "https://api.rawg.io/api/games"
//Por id: "https://api.rawg.io/api/games/{id}"
//Por nombre: "https://api.rawg.io/api/games?search={game}"
//Por genero: "https://api.rawg.io/api/genres"
//________________________________________________________________________________________________

//📍 GET | /videogames
//Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.



const{Videogame,Genre}= require('../db')
const {Op} = require ('sequelize')
const {API_KEY} =process.env
const {infoCleaner }= require ('./utils')

const axios = require('axios');



const getAllVideogames =async () => {
  //try {
  const VideogameApi = ( await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data;
  
  const gamesApi=infoCleaner(VideogameApi)
 
const VideogameDB = await Videogame.findAll({
    include: [{
        model: Genre,
     attributes: ['name'],
       through: {
            attributes: [],
       }
    }]
  }); 

  const genres = VideogameDB.map((genre) => ({
    id: genre.id,
    name: genre.name,
  }));
 
  const allVideogame=[...gamesApi , ...genres] ;
  return allVideogame
}
 
//`http://localhost:3001/videogames/name?name=${name}`
 

 // toLowerCase();name.toLowerCase());Esto buscará el juego por nombre y es insensible a mayúsculas y minúsculas

 


 const searchGameByName = async (name) => {
  const names = name.toLowerCase();
  const infoApi=(
    await axios.get(`https://api.rawg.io/api/games?search=${names}&key=${API_KEY}`)
    ).data;
  const gamesApi=  infoCleaner(infoApi);
  
  
  const gameFiltered= gamesApi.filter((game) => game.name === name);

  const VideogameDb=await Videogame.findAll({
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
   
  
  return [...gameFiltered,...VideogameDb]
  
  
   }
  

  

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
     


   //| name | released | rating | rating_top | description | background_image | platform
       
  const createVideoGames= async(req,res) => {
    try {
      const{ name, released,rating,rating_top,background_image,platform,description,genres}= req.body;
      if(!name || !released || !rating || !rating_top || !background_image || !platform || !genres || !description )throw new Error ("Falta por llenar datos");
 const newVideogame = await Videogame.create({
    name,
     released,
     rating,
     rating_top,
     background_image,
     platform,
     description,
     genres
})
newVideogame.addGenres(genres)
return res.status(200).json(newVideogame);
} catch (error) {
    return res.status(500).json({error: error.message});
}
}
//agregue genres , FALTA SOLO EL DE CREAR EL VIDEOJUEGO 5/9
module.exports={
  getAllVideogames,
  searchGameByName,
  getByIdGame,
  createVideoGames
  }

 





//📍 GET | /videogames/name?="..."
//Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
//Debe poder buscarlo independientemente de mayúsculas o minúsculas.
//Si no existe el videojuego, debe mostrar un mensaje adecuado.
//Debe buscar tanto los de la API como los de la base de datos.

//📍 POST | /videogames
//Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
//Toda la información debe ser recibida por body.
//Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).


//📍 GET | /genres
//Obtiene un arreglo con todos los géneros existentes de la API.
//En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
//Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

