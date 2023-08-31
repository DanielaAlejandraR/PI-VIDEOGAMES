const { Router } = require('express');//para crear rutas
const routerVideoGames = require("./videogamesRoutes");
const genresRouter = require("./genresRoutes");

const router = Router(); //Configura rutas de la app

router.use("/videogames", routerVideoGames);//todas las rutas definidas en routerVideoGames estan precedidas por \videogames en URL
router.use("/genres", genresRouter);

module.exports = router;