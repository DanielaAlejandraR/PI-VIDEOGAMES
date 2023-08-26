//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Este modulo tiene la responsabilidad de iniciar la aplicación 
const server = require('./src/app.js');
const { conn } = require('./src/db.js');//Importamos conexion from require

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {//cada vez que sincronizemos elimina tabla y vuelve a crear desde cero, alter sincroniza y no borra tabla completa 
  server.listen(3001, () => { 
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
