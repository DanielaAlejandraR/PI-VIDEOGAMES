const { DataTypes } = require('sequelize');//importo clase DataTypes de libreria Sequelize

module.exports = (sequelize) => {//Exporta función que define el modelo

  sequelize.define('videogame', {//definicon modelo videogame
    id: {
      type: DataTypes.UUID,//universal unique identifier, automatico
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),//necesito el nombre de propiedad  ej: Xbox
      allowNull: false
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.DATEONLY,// YYYY-MM-DD
      allowNull: false
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false
    }, 
  },{ timestamps: false}// NO fecha y hora en que cree registros 
  );
};
