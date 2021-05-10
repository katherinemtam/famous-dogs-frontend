import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <header>
          <h2>Home Page</h2>
        </header>

        <p>
          <Link to='/dogs'>See the List of Doggos</Link>
        </p>
      </div>
    );
  }

}