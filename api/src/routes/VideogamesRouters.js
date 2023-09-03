const {Router}= require ('express');

const {getVideogamesHandler,getGameByIdHandler,postCreateHandler}= require('../handlers/videogameHandler');

const videogameRouter=Router();

//RUTA PARA OBTENER TODOS LOS PAISES QUE ESTAN GUARDADOS EN MI BASE DE DATOS
videogameRouter.get('/',getVideogamesHandler )
//videogameRouter.get('/name',getVideogamesHandler )
videogameRouter.get('/:id',getGameByIdHandler)
videogameRouter.post('/create' ,postCreateHandler)


//Ruta para obtener por id el detalle de un pais especifico admeas de su actividad asociada

//videogameRouter.get('/:id',getVideogameId )

module.exports=videogameRouter
