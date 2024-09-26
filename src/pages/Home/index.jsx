import { useState } from 'react';
import SongList from '../../components/SongList';
import ArtistList from '../../components/ArtistList';
import Header from '../../components/Header';
import MusicPlayer from '../../components/MusicPlayer';
import "./Home.css"

const Home = () => {
    const [selectedSong, setSelectedSong] = useState(null);

    return (
        <main className="home-page">
            <Header />
            <SongList setSelectedSong={setSelectedSong} />
            <ArtistList />
            {selectedSong && <MusicPlayer selectedSong={selectedSong} setSelectedSong={setSelectedSong} />}
        </main>
    )
}

export default Home;
