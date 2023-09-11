const  {getGenres} = require("../controllers/getGenreController");

const genresHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const newGenre = await getGenres(name);
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {genresHandler};
////Por genero: "https://api.rawg.io/api/genres"
//--------------------📍 GET | /genres----------------------------------------------------
//Obtiene un arreglo con todos los géneros existentes de la API.
//En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
//Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
//RUTA DE LA API = Por genero: "https://api.rawg.io/api/genres"