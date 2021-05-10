import React, { Component } from 'react';
import './DogItem.css';

class DogItem extends Component {

  render() {
    const dog = this.props.dog;

    return (
      <li className="DogItem">
        <h2>{dog.name}</h2>
        <img src={dog.url} alt={dog.name} />
        <p>Lives: {dog.lives}</p>
      </li>
    );
  }

}

export default DogItem;