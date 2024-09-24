import { Delete, Favorite, FavoriteBorder } from '@mui/icons-material';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MusicPlayer.css';

const MusicPlayer = ({ selectedSong, setSelectedSong }) => {
  const { albumCover, title, artist, link, favorite } = selectedSong;

  return (
    <div className="music-player">
      <div className="track-info">
        <img src={albumCover} alt="Capa do álbum" className="album-art" />
        <div className="track-details">
          <div className="song-info">
            <h3>{title}</h3>
            <p>{artist}</p>
          </div>
          <div className="icons">
            {favorite ? 
              <Favorite color='error' onClick={() => setSelectedSong(s => ({
                ...s,
                favorite: false
              }))} /> : 
              <FavoriteBorder onClick={() => setSelectedSong(s => ({
                ...s,
                favorite: true
              }))} />
            }
            <Delete />
          </div>
        </div>
      </div>

      <AudioPlayer
        autoPlay={false}
        src={link}
        onPlay={() => console.log("onPlay")}
      />
    </div>
  );
};

export default MusicPlayer;
