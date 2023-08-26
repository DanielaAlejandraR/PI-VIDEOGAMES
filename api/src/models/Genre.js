const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('Genre',{// defino el modelo Genres utilizando la función sequelize.define
        id:{
            type: DataTypes.UUID, // Tipo de dato para el atributo "id": UUID (identificador único universal). Es un codigo alfanumerico
            defaultValue: DataTypes.UUIDV4,// Crea numero aleatorio de identificación 
            primaryKey: true, //Atributo id es la clave primaria de la tabla 
            allowNull: false, // Atributo id no puede ser nulo, debe tener un valor 
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,// Atributo name debe tener un valor 
        },
    },{ timestamps: false}//Evita marcas de tiempo automaticas 
    );
};
