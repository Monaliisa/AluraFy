import "./MusicCard.css";

const MusicCard = () => {
    return(
        <div className="music-card">
            <a href="http://">
                <img src="TTPD.png" alt="Capa do álbum" />
            </a>
            <h3>The Tortured Poets</h3>
            <p>Taylor Swift</p>
        </div>
    );
}

export default MusicCard;