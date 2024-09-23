import CardList from "../../components/CardList";
import Header from "../../components/Header";
import "./Home.css"

const Home = () => {
    return (
        <main className="home-page">
            <Header />
            <CardList title={"Recommended for you"} />
            <CardList title={"Your favorites"} />
        </main>
    )
}

export default Home;
