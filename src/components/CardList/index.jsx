/* eslint-disable react/prop-types */
import MusicCard from '../MusicCard';
import './CardList.css';

const CardList = ({ title }) => {
    const songs = Array.from({ length: 14 }, (_, index) => index + 1);

    return (
        <section className="cards-container">
            <h3 className="list-title">{title}</h3>
            <div className="song-list">
                {songs.map((song, index) => {
                    return (
                        <div key={index}>
                            <MusicCard  />
                        </div>
                    );
                })}
            </div>
        </section>

    );
}
export default CardList;