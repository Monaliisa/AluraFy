import './Search.css';
import { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
      console.log("Buscando por:", searchTerm);
    };
  
    return (      
      <div className="search-container">
      <input
          type="text"
          placeholder="What do you want to listen to?"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
      />
  </div>
    );
  };
  
  export default Search;