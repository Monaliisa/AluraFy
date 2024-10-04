/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Card from '../Card';
import './ArtistList.css';

const ArtistList = ({ artists }) => {
    return (
        <section className="cards-container">
            <h3 className="list-title">Artistas</h3>
            <div className="song-list">
                {artists.map((a) => {
                    const artist = {
                        name: a.nome,
                        image: a.imagem
                    }
                    return (
                        <div key={a.id}>
                            <Card type="artist" data={artist} />
                        </div>
                        
                    );
                })}
            </div>
        </section>

    );
}
export default ArtistList;

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

