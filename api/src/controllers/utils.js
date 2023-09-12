const API_KEY = `?api_key=${process.env.API_KEY}`;
const URL =`https://api.rawg.io/api/genres?key=`

const transformApiDataId = (data) => {
	//Destructuring received data
	let {
		id,
		name,
		description,
		platforms,
		background_image,
		released,
		rating,
		genres,
	} = data;
	//Getting needed information from platforms
	platforms = platforms.map((plat) => {
		const { platform } = plat;
		return platform.name;
	});
	//Getting needed information from genres
	genres = genres.map((gen) => gen.name);
	//Returning arranged information
	return {
		id,
		name,
		description,
		platforms,
		background_image,
		released,
		rating,
		genres,
	};
};











const transformDbDataId = (data) => {
	//Destructuring received data
	let {
		id,
		name,
		description,
		platforms,
		background_image,
		released,
		rating,
		genres,
	} = data;
	//Getting needed information from genres
	genres = genres.map((gen) => gen.name);
	//Returning arranged information
	return {
		id,
		name,
		description,
		platforms,
		background_image,
		released,
		rating: Number(rating),
		genres,
	};
};




const mapPlatform = (array) => {
   return array.results.map ((platform) =>{
   
   return{
   id:platform.id,
   name:platform.name
   }
   
   })
   
   }




   module.exports={transformDbDataId,transformApiDataId,mapPlatform}