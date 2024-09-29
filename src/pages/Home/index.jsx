import { useEffect, useState } from 'react';
import SongList from '../../components/SongList';
import ArtistList from '../../components/ArtistList';
import Header from '../../components/Header';
import MusicPlayer from '../../components/MusicPlayer';
import "./Home.css"

const Home = () => {
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    const songsUrl = "http://localhost:3000/musica";
    const artistUrl = "http://localhost:3000/artista";

    useEffect(() => {
        fetch(artistUrl)
            .then(response => response.json())
            .then(data => setArtists(data))
            .catch(error => console.error(error));

        fetch(songsUrl)
            .then(response => response.json())
            .then(data => setSongs(data))
            .catch(error => console.error(error));
    }, [])

    return (
        <main className="home-page">
            <Header />
            <SongList songs={songs} artists={artists} setSelectedSong={setSelectedSong} />
            <ArtistList artists={artists} />
            {selectedSong && <MusicPlayer selectedSong={selectedSong} setSelectedSong={setSelectedSong} />}
        </main>
    )
}

export default Home;
