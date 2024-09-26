const { Router } = require("express");
const MusicaController = require("../controllers/musicaController.js");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Musicas
 *   description: Operações relacionadas a músicas
 */

/**
 * @swagger
 * /musica:
 *   get:
 *     summary: Retorna todas as músicas
 *     tags: [Musicas]
 *     responses:
 *       200:
 *         description: Lista de músicas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Musica'
 */
router.get("/musica", MusicaController.buscarTodasMusicas);

/**
 * @swagger
 * /musica/artista:
 *   get:
 *     summary: Retorna as músicas de um artista pelo nome
 *     tags: [Musicas]
 *     parameters:
 *       - in: query
 *         name: nome
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome do artista para buscar suas músicas
 *     responses:
 *       200:
 *         description: Lista de músicas do artista
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Musica'
 *       404:
 *         description: Artista não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: "Artista não encontrado"
 *       400:
 *         description: Parâmetro 'nome' obrigatório
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: "O parâmetro 'nome' é obrigatório."
 *     example:
 *       /musica/artista?nome=Snoop
 */
router.get("/musica/artista", MusicaController.buscarMusicaPeloArtista);

/**
 * @swagger
 * /musica:
 *   post:
 *     summary: Cria uma nova música
 *     tags: [Musicas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Musica'
 *     responses:
 *       201:
 *         description: Música criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Musica'
 *       400:
 *         description: Erro na criação da música
 */
router.post("/musica", MusicaController.registrarMusica);

/**
 * @swagger
 * /musica/{id}:
 *   put:
 *     summary: Atualiza uma música existente
 *     tags: [Musicas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da música
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Musica'
 *     responses:
 *       200:
 *         description: Música atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Musica'
 *       404:
 *         description: Música não encontrada
 */
router.put("/musica/:id", MusicaController.atualizarMusica);

/**
 * @swagger
 * /musica/{id}:
 *   delete:
 *     summary: Deleta uma música existente
 *     tags: [Musicas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da música
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Música deletada com sucesso
 *       404:
 *         description: Música não encontrada
 */
router.delete("/musica/:id", MusicaController.deletarMusica);

module.exports = router;
