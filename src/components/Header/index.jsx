import { DarkMode, LightMode, AddCircle } from "@mui/icons-material";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
import SearchIcon from "@mui/icons-material/Search";

import Search from "../Search";
import AddButton from "./AddButton";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode", !isDarkMode);
  };

  const toggleAddButton = () => {
    setShowAddButton(!showAddButton);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <img
        className="icon-header"
        src={isDarkMode ? logoDark : logoLight}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      <div
        className="search-container"
        onClick={() => location.pathname !== "/search" && navigate("/search")}
      >
        <Search />
      </div>

      <div className="buttons">
        <div className="search-on">
          {/* <SearchIcon
            onClick={() => {
              handleSearchClick();
              if (location.pathname !== "/search") {
                navigate("/search");
              }
            }}
            className={`toggle-icon add-icon   ${
              isDarkMode ? "dark-icon" : "light-icon"
            }`}
          /> */}
        </div>

        {!showSearch &&
          !(
            location.pathname === "/new-song" ||
            location.pathname === "/new-artist"
          ) && (
            <>
              <AddCircle
                onClick={toggleAddButton}
                className={`add-icon ${
                  isDarkMode ? "dark-icon" : "light-icon"
                }`}
                fontSize="large"
                alt="Botão para adicionar músicas"
              />
              <AddButton showAddButton={showAddButton} />
            </>
          )}

        {!showSearch &&
          (isDarkMode ? (
            <LightMode
              onClick={toggleDarkMode}
              className={`toggle-icon add-icon ${
                isDarkMode ? "dark-icon" : "light-icon"
              }`}
              fontSize="large"
            />
          ) : (
            <DarkMode
              onClick={toggleDarkMode}
              className={`toggle-icon add-icon ${
                isDarkMode ? "dark-icon" : "light-icon"
              }`}
            />
          ))}
      </div>
    </header>
  );
};

export default Header;
