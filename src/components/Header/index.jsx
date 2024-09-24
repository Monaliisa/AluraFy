import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../Search'; 

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch); 
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
            onClick={handleSearchClick} 
            className={`toggle-icon add-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`} 
          />
        </div>
        
        {!showSearch && !(location.pathname === "/forms") && ( 
          <AddCircleIcon 
            onClick={() => navigate("/forms")} 
            className={`add-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`} 
            fontSize="large"
            alt="Botão para adicionar músicas"
          />
        )}
        
        {!showSearch && ( 
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
