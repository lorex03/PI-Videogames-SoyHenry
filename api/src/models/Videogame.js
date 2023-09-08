const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo  id,name, released,rating,rating_top,background_image,platform
  sequelize.define('Videogame', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
 
    released: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        isFloat: true,
      },
    },

    rating_top:{
type: DataTypes.INTEGER,
allowNull:true
  },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },


    background_image: {
      
        type: DataTypes.STRING,
        allowNull: true,
      },
    //  type: DataTypes.STRING,
     // allowNull: true,
      //validate: {
       // isUrl: true,
      //}, 
  
    platforms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   created:{
type:DataTypes.BOOLEAN,
defaultValue:true,

   }

  },{timestamps:false});
};

