const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController.js");

const router = Router();

router.get("/usuario", UsuarioController.buscarTodosUsuarios);
router.post("/usuario", UsuarioController.registrarUsuario);
router.put("/usuario/:id", UsuarioController.atualizarUsuario);
router.delete("/usuario/:id", UsuarioController.deletarUsuario);

module.exports = router;
