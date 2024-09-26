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
import AddButton from './AddButton';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  };

  const toggleAddButton = () => {
    setShowAddButton(!showAddButton);
  }

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

      <div className="search-container" 
        onClick={() => location.pathname !== "/search" && navigate("/search")}
      >
        <Search />
      </div>

      <div className="buttons">
        <div className='search-on'>
          <SearchIcon
            onClick={handleSearchClick}
            className={`toggle-icon add-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`}
          />
        </div>

        {!showSearch && !(location.pathname === "/new-song" || location.pathname === "/new-artist") && (
          <>
            <AddCircleIcon
              onClick={toggleAddButton}
              className={`add-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`}
              fontSize="large"
              alt="Botão para adicionar músicas"
            />
            <AddButton showAddButton={showAddButton} />
          </>
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
