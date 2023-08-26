const {Op} = require("sequelize")//importamos operador op para realizar consulta avanzada en BD SQL con operadores condicionales 
const axios = require("axios")// para realizar solicitudes HTTP a API
const {Videogame, Genre} = require("../db");// Importamos modelos 
const { apiFilter } = require("./apiFilter");
const {API_KEY} = process.env  // variable de entorno API_KEY, clave para hacer solicitudes a API

const getVideoGameByName = async (name) => {
   const responseDB = await Videogame.findAll({
      where: {
            name: {
               [Op.iLike]: `%${name}%`
            },
      },
      include: [{
            model: Genre,
            attributes: ["name"],
            through: { attributes: [] }
      }],
        limit: 15 // Limita la cantidad de resultados a 15
   });

   const responseApi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
   const filteredApiResults = apiFilter(responseApi.data.results);

   const combinedResults = [...responseDB, ...filteredApiResults];

   if (combinedResults.length === 0) {
      return { message: "No se encontraron videojuegos con el nombre proporcionado." };
   }
   return combinedResults.slice(0, 15);
};

module.exports = { getVideoGameByName };
