const { getDbVideogames, getApiVideogames } = require ("../controllers/videogamesController");

const  getVideoGamesHandler = async (req, res ) => {
    try{
    const dbVideogames = await getDbVideogames();//Llama a la función que obtiene los datos de la BDD, Una vez que se resuelve la promesa, los datos obtenidos de la base de datos se almacenan en la constante dbVideogames, 
    const apiVideogames = await getApiVideogames();//llamar a una función que obtenga datos de la API externa, Obtener videojuegos desde la API 
    const allVideogames =[...dbVideogames, ...apiVideogames];//Unificar respuesta en formato, toma los dos arreglos y combina sus elementos en uno nuevo, (spread operator)desespaqueta los elementos del arreglo cada elemento se convierte en un elemento individual en el nuevo arreglo  

    res.status(200).json(allVideogames);}//Cuando tenga los datos, responde con los datos 
    catch(error){
        res.status(400).json({error: error.message});
    }
};

// const getUserHandler = (req, res) => {
//         const {id} = req.params; 
//     res.send(`Va a enviar el detalle de el usuario de ID ${id}`);
// };

// const createUsersHandler = async (req, res) => {
//     try{
//         const { name, email, phone } = req.body;//body es una propiedad de la request donde viaja la info name, email, phone 
//         const newUser = await createUser(name, email, phone);
//         res.status(201).json(newUser);
//     }catch (error){
//         res.status(400).json({error: error.message});
//     }
// };

module.exports={
    getVideoGamesHandler, 
    
}

//Tratar que handler no interactue con BDD
// Try catch en handlers 