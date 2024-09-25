const database = require("../models");

class ArtistaController {

    static async buscarTodosArtistas(req, res) {
        try {
            const artistas = await database.Artista.findAll();
            return res.status(200).json(artistas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async registrarArtista(req, res) {
        const artista = req.body;

        try {
            const novoArtista = await database.Artista.create(artista);
            return res.status(201).json(novoArtista);   
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarArtista(req, res) {
        const id = req.params.id;
        const atualizacao = req.body;

        try {
            await database.Artista.update(atualizacao, { where: { id: Number(id) } });
            const artistaAtualizado = await database.Artista.findOne({ where: { id: Number(id) } });
            return res.status(200).json(artistaAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarArtista(req, res) {
        const id = req.params.id;

        try {
            await database.Artista.destroy({ where: { id: Number(id) } });
            return res.status(204).json({ mensagem: `Artista com id ${id} foi deletado!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ArtistaController;
