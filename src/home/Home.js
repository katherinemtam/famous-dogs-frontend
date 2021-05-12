import { Component } from 'react';
import { Link } from 'react-router-dom';
import homeGif from '../images/homegif.gif';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="Wrapper">
          <header>
            <h2>Welcome to the Famous Dogs Hotel!</h2>
            <h3>🐾Anything is paw-sible...🐾</h3>
          </header>
          <img src={homeGif} alt="dog's running"/>
          <h3>⭐The next dawg you see could be a star~⭐</h3>
          <p>
            <Link to='/dogs'>Famous Doggos Staying Here</Link>
          </p>
        </div>
      </div>
    );
  }
}