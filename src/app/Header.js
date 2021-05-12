import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">
        <div>
          <h1>Famous Dogs Hotel</h1>
          <h3>Powered by React</h3>
        </div>
        <nav>
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/dogs" exact={true}>Residents</NavLink>
          <NavLink to="/dogs/add">Check in a Dog</NavLink>
        </nav>
      </header>
    );
  }

}

export default Header;