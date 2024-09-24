import './MusicCard.css';

const MusicCard = ({ setSelectedSong }) => {
    const song = {
        title: "FLORIDA!!!",
        artist: "Taylor Swift",
        artistId: 1,
        albumCover: "TTPD.png",
        genre: "Pop",
        link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        favorite: false
    }

    return(
        <div className="music-card" onClick={() => setSelectedSong(song)}>
            <img src={song.albumCover} alt="Album cover" />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
        </div>
    );
}

export default MusicCard;