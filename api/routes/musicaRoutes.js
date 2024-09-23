const { Router } = require("express");
const MusicaController = require("../controllers/musicaController.js");

const router = Router();

router.get("/musica", MusicaController.buscarTodasMusicas);
router.post("/musica", MusicaController.registrarMusica);
router.put("/musica/:id", MusicaController.atualizarMusica);
router.delete("/musica/:id", MusicaController.deletarMusica);

module.exports = router;
