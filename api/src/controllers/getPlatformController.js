const axios = require("axios");
const {API_KEY} =process.env
const{mapPlatform} = require('./utils')

const getPlatform = async () => {
 
    const ApiPlatform= (
  await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`))
  .data
  
  const platformApi=mapPlatform(ApiPlatform);

  return platformApi;
    
}
  




module.exports={getPlatform}

