// Importar todos los routers;
const { Router } = require('express');

const routerVideoGames = require("./videogamesRoutes");
// const postsRouter = require('./postRouter');

const router = Router(); //Configuramos las rutas de la app


router.use("/videogames", routerVideoGames);//Ante cualquier petición a URL  /videogames que vaya a routerVideoGames
// router.use("/posts", postsRouter);

module.exports = router;
