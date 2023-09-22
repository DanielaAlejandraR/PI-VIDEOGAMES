const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('videogame', {
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
    }
  },{ timestamps: false}
  );
};
