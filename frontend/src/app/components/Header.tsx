import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="menu-icon">
          <i className="fa fa-bars fa-2x"></i>
        </div>

        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
