const {Router}= require ('express');

const {platformHandler}= require('../handlers/platformHandler');

const platformRouter=Router();

//RUTA PARA OBTENER TODOS LOS PAISES QUE ESTAN GUARDADOS EN MI BASE DE DATOS
platformRouter.get('/',platformHandler )


//Ruta para obtener por id el detalle de un pais especifico admeas de su actividad asociada

//videogameRouter.get('/:id',getVideogameId )

module.exports=platformRouter
