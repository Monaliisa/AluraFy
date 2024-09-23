const database = require("../models");

class UsuarioController {

    static async buscarTodosUsuarios(req, res) {
        try {
            const usuarios = await database.Usuario.findAll();
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async registrarUsuario(req, res) {
        const usuario = req.body;

        try {
            const novoUsuario = await database.Usuario.create(usuario);
            return res.status(201).json(novoUsuario);   
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarUsuario(req, res) {
        const id = req.params.id;
        const atualizacao = req.body;

        try {
            await database.Usuario.update(atualizacao, { where: { id: Number(id) } });
            const usuarioAtualizado = await database.Usuario.findOne({ where: { id: Number(id) } });
            return res.status(200).json(usuarioAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarUsuario(req, res) {
        const id = req.params.id;

        try {
            await database.Usuario.destroy({ where: { id: Number(id) } })
            return res.status(204).json({ mensagem: `Usuário com id ${id} foi deletado!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsuarioController;