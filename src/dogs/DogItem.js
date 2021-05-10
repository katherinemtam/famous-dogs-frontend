import React, { Component } from 'react';
import './DogItem.css';

class DogItem extends Component {

  render() {
    const dog = this.props.dog;

    return (
      <li className="DogItem">
        <h2>{dog.name}</h2>
        <img src={dog.url} alt={dog.name} />
        <h3>{dog.type}</h3>
      </li>
    );
  }

}

export default DogItem;