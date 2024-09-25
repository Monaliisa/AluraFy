const bodyParser = require("body-parser");
const usuario = require("./usuarioRoutes");
const musica = require("./musicaRoutes");
const artista = require("./artistaRoutes");

module.exports = app => {
 app.use(
   bodyParser.json(),
    usuario, musica, artista
   );
 };
