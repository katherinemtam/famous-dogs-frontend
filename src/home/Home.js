import { Component } from 'react';
import { Link } from 'react-router-dom';
import loader from '../loader.gif';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="Wrapper">
          <header>
            <h2>Welcome to the Famous Dogs API!</h2>
          </header>
          <img src={loader} alt="dog's running"/>
          <p>
            <Link to='/dogs'>List of Famous Doggos</Link>
          </p>
        </div>
      </div>
    );
  }

}