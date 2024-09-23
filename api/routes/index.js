const bodyParser = require("body-parser");
const usuario = require("./usuarioRoutes");
const musica = require("./musicaRoutes");

module.exports = app => {
 app.use(
   bodyParser.json(),
    usuario, musica
   );
 };
