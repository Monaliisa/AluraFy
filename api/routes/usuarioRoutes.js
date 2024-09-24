const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController.js");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get("/usuario", UsuarioController.buscarTodosUsuarios);

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Erro na criação do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/usuario", UsuarioController.registrarUsuario);

/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.put("/usuario/:id", UsuarioController.atualizarUsuario);

/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     summary: Deleta um usuário existente
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário a ser deletado
 *     responses:
 *       204:
 *         description: Usuário deletado com sucesso
 */
router.delete("/usuario/:id", UsuarioController.deletarUsuario);

module.exports = router;
