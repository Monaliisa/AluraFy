import "./Header.css";
import Search from "../Search";

const Header = () => {
  return (
    <header className="header">
      <img className="icon-header" src="/alurafyicon.svg" alt="Logo" />
      <Search />
      <div className="butons">
        <a href="#">
          <img src="/Add.svg" alt="Botão para adicionar músicas" />
        </a>
        <a href="#">
          <img src="/DarkMode.svg" alt="Botão de modo Escuro" />
        </a>
      </div>
    </header>
  );
};

export default Header;
