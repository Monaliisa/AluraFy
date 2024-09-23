const database = require("../models");

class MusicaController {

    static async buscarTodasMusicas(req, res) {
        try {
            const musicas = await database.Musica.findAll();
            return res.status(200).json(musicas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async registrarMusica(req, res) {
        const musica = req.body;

        try {
            const novaMusica = await database.Musica.create(musica);
            return res.status(201).json(novaMusica);   
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarMusica(req, res) {
        const id = req.params.id;
        const atualizacao = req.body;

        try {
            await database.Musica.update(atualizacao, { where: { id: Number(id) } });
            const musicaAtualizada = await database.Musica.findOne({ where: { id: Number(id) } });
            return res.status(200).json(musicaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarMusica(req, res) {
        const id = req.params.id;

        try {
            await database.Musica.destroy({ where: { id: Number(id) } })
            return res.status(204).json({ mensagem: `Música com id ${id} foi deletada!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MusicaController;