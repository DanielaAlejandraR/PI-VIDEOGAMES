const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerVideoGames = require("./videogamesRoutes");
// const postsRouter = require('./postRouter');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", routerVideoGames);//Ante cualquier petición a /videogames que vaya a routerVideoGames
// router.use("/posts", postsRouter);

module.exports = router;
