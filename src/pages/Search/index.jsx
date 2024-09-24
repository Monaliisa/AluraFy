import Header from "../../components/Header";
import SearchMessage from '../../components/SearchMessage';
import "./Search.css"

const Search = () => {
    return(
        <>
            <main className="container">
                <Header />
                <SearchMessage />
            </main>

        </>
    )
}

export default Search;