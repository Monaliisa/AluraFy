import './MusicCard.css';

const MusicCard = ({ song, setSelectedSong }) => {
    return(
        <div className="music-card" onClick={() => setSelectedSong(song)}>
            <img src={song.albumCover} alt="Album cover" />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
        </div>
    );
}

export default MusicCard;