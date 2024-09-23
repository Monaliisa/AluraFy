const bodyParser = require("body-parser");
const usuario = require("./usuarioRoutes");

module.exports = app => {
 app.use(
   bodyParser.json(),
    usuario,
   );
 };
