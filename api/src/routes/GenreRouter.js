const {Router}= require ('express');

const {genreHandler}= require('../handlers/genreHandler');

const genreRouter=Router();

//RUTA PARA OBTENER TODOS LOS PAISES QUE ESTAN GUARDADOS EN MI BASE DE DATOS
genreRouter.get('/',genreHandler )


//Ruta para obtener por id el detalle de un pais especifico admeas de su actividad asociada

//videogameRouter.get('/:id',getVideogameId )

module.exports=genreRouter
