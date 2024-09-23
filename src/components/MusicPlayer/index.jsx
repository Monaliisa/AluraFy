import { Delete, FavoriteBorder } from '@mui/icons-material';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MusicPlayer.css';

const MusicPlayer = () => {

  return (
    <div className="music-player">
      <div className="track-info">
        <img src="billie-album.jpg" alt="Capa do álbum" className="album-art" />
        <div className="track-details">
          <div className="song-info">
            <h3>birds of a feather</h3>
            <p>billie eilish</p>
          </div>
          <div className="icons">
            <FavoriteBorder />
            <Delete />
          </div>
        </div>
      </div>

      <AudioPlayer
        autoPlay={false}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        onPlay={() => console.log("onPlay")}
      />
    </div>
  );
};

export default MusicPlayer;
