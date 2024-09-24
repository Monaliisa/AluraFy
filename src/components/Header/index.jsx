import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../Search'; // Importe o componente Search

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // Estado para controlar a visibilidade do componente Search
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch); // Alterna a visibilidade do componente Search
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <img 
        className="icon-header"
        src={isDarkMode ? logoDark : logoLight} 
        alt="Logo" 
        onClick={() => navigate("/")}
      />
      
      <div className="search-container">
         <Search /> 
      </div>
      
      <div className="buttons">
        <div className='search-on'>
          <SearchIcon 
            onClick={handleSearchClick} // Lógica de clique para mostrar/esconder o componente Search
            className={`toggle-icon add-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`} 
          />
        </div>
        
        {!showSearch && !(location.pathname === "/forms") && ( // Esconde o botão AddCircleIcon se showSearch for true
          <AddCircleIcon 
            onClick={() => navigate("/forms")} 
            className={`add-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`} 
            fontSize="large"
            alt="Botão para adicionar músicas"
          />
        )}
        
        {!showSearch && ( // Esconde o botão de modo escuro/claro se showSearch for true
          isDarkMode ? (
            <LightModeIcon 
              onClick={toggleDarkMode} 
              className={`toggle-icon add-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`} 
              fontSize="large"
            />
          ) : (
            <DarkModeIcon 
              onClick={toggleDarkMode} 
              className={`toggle-icon add-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`} 
            />
          )
        )}
      </div>
    </header>
  );
};

export default Header;
