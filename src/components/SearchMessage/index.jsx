import './SearchMessage.css';

const SearchMessage = ({ title, message }) => {
    return(
        <section className="container">
            <h3>{ title }</h3>
            <p>{ message }</p>
        </section>
    )
}
export default SearchMessage;