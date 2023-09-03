//📍 GET | /genres
//Obtiene un arreglo con todos los géneros existentes de la API.
//En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
//Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
//______________EJEEMPLO________________________________________________________________________________






//📍 GET | /temperaments
//Obtiene todos los temperamentos existentes.
//Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.


//const { Temperament } = require("../db");
//const axios = require("axios");
//const { API_KEY, URL} = require("./utils");

//const getTemperaments = async (req,res)=> {
 //   try {
        //const response = await axios(`${URL}${API_KEY}`);
        //const dogs = response.data;
        //const temperaments = dogs.map( element => element.temperament );
      //  temperaments.forEach( element => {
          //  if(element) {
              //  let temperamentArray = element.split(",")
            //    temperamentArray.forEach( temperament => {
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

//module.exports = getTemperaments;