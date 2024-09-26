import { useState } from 'react';
import CardList from '../../components/CardList';
import Header from '../../components/Header';
import MusicPlayer from '../../components/MusicPlayer';
import "./Home.css"

const Home = () => {
    const [selectedSong, setSelectedSong] = useState(null);

    return (
        <main className="home-page">
            <Header />
            <CardList title={"Recommended for you"} setSelectedSong={setSelectedSong} />
            <CardList title={"Artists"} setSelectedSong={setSelectedSong} />
            {selectedSong && <MusicPlayer selectedSong={selectedSong} setSelectedSong={setSelectedSong} />}
        </main>
    )
}

export default Home;
