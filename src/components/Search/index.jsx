import './Search.css';
import { useState, useEffect } from "react";

const Search = ({ setFilteredSongs, setFilteredArtists, setNoResults, setArtistList }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [placeholder, setPlaceholder] = useState("What do you want to listen to?");

    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);

    const songsUrl = "http://localhost:3000/musica";
    const artistUrl = "http://localhost:3000/artista";

    useEffect(() => {
        fetch(artistUrl)
            .then(response => response.json())
            .then(data => {
                setArtists(data),
                setArtistList(data)
            })
            .catch(error => console.error(error));

        fetch(songsUrl)
            .then(response => response.json())
            .then(data => {
                setSongs(data)
            })

            .catch(error => console.error(error));
    }, [])


    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term === "") {
            setFilteredSongs([]);
            setFilteredArtists([]);
            setNoResults(false);
        } else {

            const filteredArtists = artists.filter(artist =>
                artist.nome.toLowerCase().includes(term.toLowerCase())
            );

            const filteredArtistIds = filteredArtists.map(artist => artist.id);

            const filteredSongs = songs.filter(song =>
                song.titulo.toLowerCase().includes(term.toLowerCase()) ||
                filteredArtistIds.includes(song.id_artista)
            );


            setFilteredSongs(filteredSongs);
            setFilteredArtists(filteredArtists);
            setNoResults(filteredSongs.length === 0 && filteredArtists.length === 0);
        }


    };



    const updatePlaceholder = () => {
        if (window.innerWidth <= 768) {
            setPlaceholder("Search your sound!");
        } else {
            setPlaceholder("What do you want to listen to?");
        }
    };

    // Atualiza o placeholder no carregamento da página e sempre que a janela é redimensionada
    useEffect(() => {
        updatePlaceholder(); // Atualiza inicialmente
        window.addEventListener('resize', updatePlaceholder);

        // Remove o listener ao desmontar o componente
        return () => {
            window.removeEventListener('resize', updatePlaceholder);
        };
    }, []);

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
        </div>
    );
};

export default Search;
