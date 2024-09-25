const { Router } = require("express");
const ArtistaController = require("../controllers/artistaController.js");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Artistas
 *   description: Operações relacionadas a artistas
 */

/**
 * @swagger
 * /artista:
 *   get:
 *     summary: Retorna todos os artistas
 *     tags: [Artistas]
 *     responses:
 *       200:
 *         description: Lista de artistas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Artista'
 */
router.get("/artista", ArtistaController.buscarTodosArtistas);

/**
 * @swagger
 * /artista:
 *   post:
 *     summary: Cria um novo artista
 *     tags: [Artistas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Artista'
 *     responses:
 *       201:
 *         description: Artista criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Artista'
 *       400:
 *         description: Erro na criação do artista
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/artista", ArtistaController.registrarArtista);

/**
 * @swagger
 * /artista/{id}:
 *   put:
 *     summary: Atualiza um artista existente
 *     tags: [Artistas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do artista a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Artista'
 *     responses:
 *       200:
 *         description: Artista atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Artista'
 */
router.put("/artista/:id", ArtistaController.atualizarArtista);

/**
 * @swagger
 * /artista/{id}:
 *   delete:
 *     summary: Deleta um artista existente
 *     tags: [Artistas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do artista a ser deletado
 *     responses:
 *       204:
 *         description: Artista deletado com sucesso
 */
router.delete("/artista/:id", ArtistaController.deletarArtista);

module.exports = router;