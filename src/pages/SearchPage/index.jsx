import { useState } from 'react';
import Header from "../../components/Header";
import SearchMessage from '../../components/SearchMessage';
import SongList from '../../components/SongList';
import ArtistList from '../../components/ArtistList';
import MusicPlayer from '../../components/MusicPlayer';
import "./SearchPage.css"

const SearchPage = () => {
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [filteredArtists, setFilteredArtists] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [artistList, setArtistList] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
   
    return (
        <>
            <main className="search-page">
                <Header 
                    setFilteredSongs={setFilteredSongs} 
                    setFilteredArtists={setFilteredArtists} 
                    setNoResults={setNoResults} 
                    setArtistList={setArtistList
                } />
                {filteredSongs.length > 0 || filteredArtists.length > 0 ? (

                    <>
                        <SongList 
                            title={"Músicas"} 
                            songs={filteredSongs} 
                            artists={artistList} 
                            setSelectedSong={setSelectedSong}
                        />
                        <ArtistList artists={filteredArtists} />
                    </>
                ) : (
                    noResults ? (
                        <SearchMessage
                            title={"Nada encontrado"}
                            message={"Busque outro termo"}
                        />
                    ) : (
                        <SearchMessage
                            title={"Busque o que ama"}
                            message={"Faça uma busca por músicas e artistas"}
                        />
                    )
                )}
                 {selectedSong && <MusicPlayer selectedSong={selectedSong} setSelectedSong={setSelectedSong} />}
            </main>

        </>
    )
}

export default SearchPage;