import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">
        <div>
          <h1>Famous Dogs</h1>
          <h3>Powered by React</h3>
        </div>
        <nav>
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/dogs" exact={true}>Dogs</NavLink>
          <NavLink to="/dogs/add">Add Dog</NavLink>
        </nav>
      </header>
    );
  }

}

export default Header;