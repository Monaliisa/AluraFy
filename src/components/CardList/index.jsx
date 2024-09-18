import MusicCard from "../MusicCard";
import "./CardList.css";

const CardList = () => {
    const musics = Array.from({ length: 14 }, (_, index) => index + 1);

    return (
        <section className="cards-container">
            {musics.map((music, index) => {
                return (
                    <div key={index}>
                        <MusicCard  />
                    </div>
                );
            })}
        </section>

    );
}
export default CardList;