const {Router}= require ('express');

const {getVideogamesHandler,getGameByIdHandler,postCreateHandler}= require('../handlers/videogameHandler');
const {createVideoGames} = require("../controllers/videogameController")
const videogameRouter=Router();

//RUTA PARA OBTENER TODOS LOS PAISES QUE ESTAN GUARDADOS EN MI BASE DE DATOS
videogameRouter.get("/",getVideogamesHandler )

//videogameRouter.get('/name',getVideogamesHandler )
videogameRouter.get("/:id",getGameByIdHandler)
videogameRouter.post("/" ,createVideoGames)
// entonces para  crear el videojuego me pongo en la mism a posicion nde todos los videojuegos 
// osea localhost:3001/videogames 
//asi como dogs


//Ruta para obtener por id el detalle de un pais especifico admeas de su actividad asociada

//videogameRouter.get('/:id',getVideogameId )

module.exports=videogameRouter
