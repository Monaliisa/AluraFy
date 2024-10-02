import './Search.css';
import { useState, useEffect } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [placeholder, setPlaceholder] = useState("What do you want to listen to?");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        console.log("Buscando por:", event.target.value);
    };

    const updatePlaceholder = () => {
        if (window.innerWidth <= 768) {
            setPlaceholder("Search your sound!");
        } else {
            setPlaceholder("What do you want to listen to?");
        }
    };

    // Atualiza o placeholder no carregamento da página e sempre que a janela é redimensionada
    useEffect(() => {
        updatePlaceholder(); // Atualiza inicialmente
        window.addEventListener('resize', updatePlaceholder);
        
        // Remove o listener ao desmontar o componente
        return () => {
            window.removeEventListener('resize', updatePlaceholder);
        };
    }, []);

    return (      
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
        </div>
    );
};

export default Search;
