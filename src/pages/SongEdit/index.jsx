import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SongEdit = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    
    const [song, setSong] = useState(null);
    const [songName, setSongName] = useState("");
    const [albumCover, setAlbumCover] = useState("");
    const [songLink, setSongLink] = useState("");
    const [artist, setArtist] = useState("");
    const requestUrl = `http://localhost:3000/musica/${id}`;

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const response = await fetch(requestUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                });
                
                const data = await response.json();
                console.log(data);
                
                setSong(data);
                setSongName(data.title || data.titulo); 
                setAlbumCover(data.albumCover || data.capa_da_musica);
                setSongLink(data.link);
                setArtist(data.artist || data.id_artista); 
            } catch (error) {
                console.error('Erro ao recuperar a música:', error);
            }
        };
    
        fetchSong();
    }, [requestUrl]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (!songName || !albumCover || !songLink) {
            alert('Please, fill in all fields');
            return;
        }

        
        try {
            await fetch(requestUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    titulo: songName,
                    capa_da_musica: albumCover,
                    link: songLink,
                    id_artista: artist
                })
            });

           
            navigate("/"); 
        } catch (error) {
            console.error('Erro ao atualizar a música:', error);
        }
    };

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/artista")
            .then(response => response.json())
            .then(data => setArtists(data))
            .catch(e => console.error(e))
    }, [])

    return (
        <section className="form-section">
            <h1 className='form-title'>Edit Song</h1>
            <form className="form-container" onSubmit={handleSubmit}>
            <label className="form-group">
                    Artist name:
                    <select
                        onChange={(e) => setArtist(e.target.value)} 
                        value={artist}
                    >
                        <option value={0} >Escolha o/a artista</option>
                        {artists.map(a => (
                            <option key={a.id} value={a.id}>{a.nome}</option>
                        ))}
                    </select>
                </label>
                <label className="form-group">
                    Song name:
                    <input
                        type="text"
                        value={songName}
                        onChange={(e) => setSongName(e.target.value)}
                        placeholder="Enter song name"
                    />
                </label>
                <label className="form-group">
                    Album cover:
                    <input
                        type="url"
                        value={albumCover}
                        onChange={(e) => setAlbumCover(e.target.value)}
                        placeholder="Image URL"
                    />
                </label>
                <label className="form-group">
                    Song link:
                    <input
                        type="url"
                        value={songLink}
                        onChange={(e) => setSongLink(e.target.value)}
                        placeholder="Song URL"
                    />
                </label>
                <div className="button-group">
                    <button type="submit" className="button-send">Update</button>
                    <button type="button" className="button-cancel" onClick={() => navigate("/")}>
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
};

export default SongEdit;
