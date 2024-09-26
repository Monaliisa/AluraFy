import './Card.css';

const Card = ({ type, data, setSelectedSong }) => {
    return(
        <div className="music-card" onClick={type === "song" ? () => setSelectedSong(data) : null}>
            <img src={type === "song" ? data.albumCover : data.image} alt="Album cover" />
            <h3>{type === "song" ? data.title : data.name}</h3>
            {type === "song" && <p>{data.artist}</p>}
        </div>
    );
}

export default Card;