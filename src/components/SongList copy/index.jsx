/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import MusicCard from '../Card';
import './SongList.css';

const SongList = ({ title, setSelectedSong }) => {
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);

    const songsUrl = "http://localhost:3000/musica";
    const artistUrl = "http://localhost:3000/artista";

    useEffect(() => {
        fetch(songsUrl)
            .then(response => response.json())
            .then(data => setSongs(data))
            .catch(error => console.error(error));

        fetch(artistUrl)
            .then(response => response.json())
            .then(data => setArtists(data))
            .catch(error => console.error(error));
        
    }, [])

    return (
        <section className="cards-container">
            <h3 className="list-title">{title}</h3>
            <div className="song-list">
                {songs.map((s, index) => {
                    const artist = artists.find(a => a.id === s.id_artista)

                    const song = {
                        title: s.titulo,
                        artist: artist.nome,
                        artistId: s.id_artista,
                        albumCover: s.capa_da_musica,
                        genre: s.genero,
                        link: s.link,
                        favorite: false
                    }
                    return (
                        <div key={index}>
                            <MusicCard song={song} setSelectedSong={setSelectedSong} />
                        </div>
                    );
                })}
            </div>
        </section>

    );
}
export default SongList;

/*
{
    title: "FLORIDA!!!",
    artist: "Taylor Swift",
    artistId: 1,
    albumCover: "TTPD.png",
    genre: "Pop",
    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    favorite: false
},
{
    title: "I can do it with a broken heart",
    artist: "Taylor Swift",
    artistId: 1,
    albumCover: "TTPD.png",
    genre: "Pop",
    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    favorite: false
},
{
    title: "Taste",
    artist: "Sabrina Carpenter",
    artistId: 2,
    albumCover: "https://i.discogs.com/YsOkn3272T6OnnNsU70veOlnti5QpORWpVb4GLSac1E/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNjEx/MTYzLTE3MjUwMjI5/MTUtNzYzNC5qcGVn.jpeg",
    genre: "Pop",
    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    favorite: false
},
{
    title: "Likey",
    artist: "Twice",
    artistId: 3,
    albumCover: "https://upload.wikimedia.org/wikipedia/en/e/eb/Twicetagram_album_cover.png",
    genre: "Pop",
    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    favorite: false
},
{
    title: "ETA",
    artist: "New Jeans",
    artistId: 4,
    albumCover: "https://lastfm.freetls.fastly.net/i/u/300x300/54021d7001b8b50f1d72ad0730e7d7b4.jpg",
    genre: "Pop",
    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    favorite: false
}
*/

