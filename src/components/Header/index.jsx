import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import Search from '../Search';
import darkIcon from '../../assets/dark-icon.svg'; 
import lightIcon from '../../assets/light-icon.svg'; 
import addIconDark from '../../assets/add-dark.svg'; 
import addIconLight from '../../assets/add-light.svg'; 
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg'; 

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <img 
        className="icon-header" src={isDarkMode ? logoDark : logoLight} 
        alt="Logo" 
        onClick={() => navigate("/")}
      />
      <Search />
      <div className="butons">
        {!(location.pathname === "/forms") &&
          <img 
            src={isDarkMode ? addIconDark : addIconLight} 
            alt="Botão para adicionar músicas" 
            onClick={() => navigate("/forms")}
          />
        }
        <img 
          src={isDarkMode ? lightIcon : darkIcon} 
          alt="Botão de modo Escuro" 
          onClick={toggleDarkMode} 
        />
      </div>
    </header>
  );
};

export default Header;
