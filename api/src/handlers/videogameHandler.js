// los handler seran el mensaje sin niguna funcion de logica , de eso se encargaran los controllers 
//los handler son aquellas funciones que  no interactuan con mi modelo 
//en lo posible que no interactuen ya que eso sera la responsabilidad del controller

const { searchGameByName,getAllVideogames,getByIdGame,createVideoGames}=require ('../controllers/videogameController')
// siguiendo esta llave es para seguir poniendo las funciones de los controllers jejej
//FALTA EL HANDLER QUE INTERACTUE CON MI FUNCION DE MI CONTROLLER  

// QUE TRAE TODOS  
const getVideogamesHandler= async(req,res) =>{
try {
    const {name} = req.query;
const resultsGame = name ? await searchGameByName(name): await getAllVideogames();
res.status(201).json(resultsGame);
} catch (error) {
  return res.status(500).json({error:error.message})

}
}

const getGameByIdHandler=async(req,res) =>{
    try {  
      const { id } = req.params;
    const DetailGame=await getByIdGame(id);
    
    res.status(200).json(DetailGame)
    
    
    } catch (error) {
     return   res.status(400).json({error:error.message})
    }
    }

  ////NO ESTA DESCRIPTION POR QUE NO TENGO ESE DATO EN MI CONTROLLER ALLVIDEOGAMES
  
const postCreateHandler= async(req,res) =>{
    try { 
      const{ name, released,rating,background_image,genres,platforms}= req.body;

   
    const newGame = await createVideoGames( name, released,rating,background_image,genres,platforms);
    res.status(201).json(newGame)
    }
     catch(error){
    res.status(500).json({error:error.message})
    } }







module.exports= {
   getVideogamesHandler,
   getGameByIdHandler,
   postCreateHandler

  }
