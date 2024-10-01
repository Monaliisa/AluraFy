import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const SongEdit = () => {
    const { id } = useParams(); // Captura o ID da música
    const navigate = useNavigate();
    
    const [song, setSong] = useState(null);
    const [songName, setSongName] = useState("");
    const [albumCover, setAlbumCover] = useState("");
    const [songLink, setSongLink] = useState("");
    const requestUrl = `http://localhost:3000/musica/${id}`; 
    console.log(requestUrl);

    useEffect(() => {
        // Função para buscar a música
        const fetchSong = async () => {
            try {
                const response = await fetch(requestUrl);
                const data = await response.json();
                console.log(data);
                setSong(data); 
                setSongName(data.title);
                setAlbumCover(data.albumCover);
                setSongLink(data.link);
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchSong();
    }, [requestUrl]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (!songName || !albumCover || !songLink) {
            alert('Please, fill in all fields');
            return;
        }

        // Atualiza a música
        try {
            await fetch(requestUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    titulo: songName,
                    capa_da_musica: albumCover,
                    link: songLink
                })
            });

            alert("Song updated successfully!");
            navigate("/"); // Redireciona após a atualização
        } catch (error) {
            console.error(error);
        }
    };

   

    return (
        <section className="form-section">
            <h1 className='form-title'>Edit Song</h1>
            <form className="form-container" onSubmit={handleSubmit}>
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
