import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">
        <div>
          <h1>Famous Dogs API</h1>
          <h3>Powered by React</h3>
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
        </nav>
      </header>
    );
  }

}

export default Header;