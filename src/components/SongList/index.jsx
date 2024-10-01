import { useEffect, useState } from 'react';
import Card from '../Card';
import './SongList.css';

const SongList = ({ setSelectedSong, songs, artists }) => {
    
    if (!songs || !artists) {
        return <div>Loading...</div>; 
    }

    return (
        <section className="cards-container">
            <h3 className="list-title">Recomendados para você</h3>
            <div className="song-list">
                {songs.length > 0 ? (
                    songs.map((s, index) => {
                        const artist = artists.find(a => a.id === s.id_artista);
                        
                        
                        if (!artist) {
                            return <div key={index}>Artista não encontrado</div>;
                        }

                        const song = {
                            id: s.id, 
                            title: s.titulo,
                            artist: artist.nome,
                            artistId: s.id_artista,
                            albumCover: s.capa_da_musica,
                            genre: s.genero,
                            link: s.link,
                            favorite: false
                        };

                        return (
                            <div key={index}>
                                <Card type="song" data={song} setSelectedSong={setSelectedSong} />
                            </div>
                        );
                    })
                ) : (
                    <div>Nenhuma música disponível</div> 
                )}
            </div>
        </section>
    );
};

export default SongList;
