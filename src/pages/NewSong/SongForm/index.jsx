import { useState } from 'react';
import './SongForm.css'
import { useNavigate } from 'react-router-dom';

const SongForm = ({setIsModalVisible, artists}) => {
    const [artist, setArtist] = useState(0);
    const [songName, setSongName] = useState("");
    const [albumCover, setAlbumCover] = useState("");
    const [songLink, setSongLink] = useState("");

    const navigate = useNavigate();

    const requestUrl = "http://localhost:3000/musica";

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((!artist || !songName) || (!albumCover || !songLink)) {
            alert('Please, fill in all fields');
            return;
        } else if (artist === 0) {
            alert('Please, choose an artist');
            return;
        }

        try {
            fetch(requestUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    titulo: songName,
                    id_artista: artist,
                    capa_da_musica: albumCover,
                    genero: null,
                    link: songLink
                })
            })
            setIsModalVisible(true)
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <section className="form-section">
            <h1 className='form-title'>Add a Song</h1>
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
                        name="songName"
                        value={songName}
                        onChange={(e) => setSongName(e.target.value)}
                        placeholder="Enter song name"
                    />
                </label>
                <label className="form-group">
                    Album cover:
                    <input
                        type="url"
                        name="albumCover"
                        value={albumCover}
                        onChange={(e) => setAlbumCover(e.target.value)}
                        placeholder="Image URL"
                    />
                </label>
                <label className="form-group">
                    Song link:
                    <input
                        type="url"
                        name="songLink"
                        value={songLink}
                        onChange={(e) => setSongLink(e.target.value)}
                        placeholder="Song URL"
                    />
                </label>
                <div className="button-group">
                    <button type="submit" className="button-send">Send</button>
                    <button type="button" className="button-cancel"
                        onClick={() => navigate("/")}>
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
};

export default SongForm;
