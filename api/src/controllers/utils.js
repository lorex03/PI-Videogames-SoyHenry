const API_KEY = `?api_key=${process.env.API_KEY}`;

const infoCleaner=(arr) =>{

    return arr.results.map( (game) => {
    return {
       id: game.id,
        name: game.name,
        released: game.released,
        rating: game.rating,
        rating_top:game.rating_top,
        background_image: game.background_image,
        platform: game.platforms.map((platform) => platform.platform.name),
        genres: game.genres.map((genre) => genre.name)
    }
    })
   }

const mapGenre = (array) => {
return array.results.map ((genre) =>{

return{
name:genre.name
}

})

}

const mapPlatform = (array) => {
   return array.results.map ((platform) =>{
   
   return{
   id:platform.id,
   name:platform.name
   }
   
   })
   
   }




   module.exports={infoCleaner,mapGenre,mapPlatform}