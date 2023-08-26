// Importar todos los routers;
const { Router } = require('express');
const routerVideoGames = require("./videogamesRoutes");
const genresRouter = require("./genresRoutes");


const router = Router(); //Configuramos las rutas de la app


router.use("/videogames", routerVideoGames);//Ante cualquier petición a URL /videogames que vaya a routerVideoGames
router.use("/genres", genresRouter);


module.exports = router;