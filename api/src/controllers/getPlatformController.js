const axios = require("axios");
const {API_KEY} =process.env
const{Videogame,Genre}= require('../db')

//const{mapPlatform} = require('./utils')

const getPlatform = async () => {
  try {
    const data0 = await axios(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    ).then((response) => response.data); //aca solo traemos la pagina 1, la de
    const data1 = await axios(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=2`
    ).then((response) => response.data);
    const data2 = await axios(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=3`
    ).then((response) => response.data);
    const data3 = await axios(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=4`
    ).then((response) => response.data);
    const data4 = await axios(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
    ).then((response) => response.data);
    const data5 = await axios(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=6`
    ).then((response) => response.data);

    await Promise.all([data0, data1, data2, data3, data4, data5]).then(
      (d) => {
        apiGameInfo = d[0].results
          .concat(d[1].results)
          .concat(d[2].results)
          .concat(d[3].results)
          .concat(d[4].results)
          .concat(d[5].results);
      }
    );
    // const { data } = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`);
    // if (!data) throw new Error("Not found");
    // console.log(data);
    const allPlatforms = await apiGameInfo.map((v) => {
      return v.platforms.map((p) => p.platform.name);
    });
    //lo convierto en string separado por , y lo convierto en array con split
    const onlyPlatforms = allPlatforms.join(",").split(",");
    const unique = onlyPlatforms.filter((x, i) => onlyPlatforms.indexOf(x) === i);
      return unique;
      
  } catch (error) {
      throw Error("No hay datos para mostrar");
  }
};




module.exports={getPlatform}

