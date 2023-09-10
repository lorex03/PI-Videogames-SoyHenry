const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
     autoIncrement: true,
      primaryKey: true,
    },

name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  created: {
    type:DataTypes.BOOLEAN,
    defaultValue:true,
    
       }
       
  },


  {timestamps: false});
};