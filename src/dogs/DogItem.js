import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogItem.css';

class DogItem extends Component {

  render() {
    const dog = this.props.dog;

    return (
      <li className="DogItem">
        <Link to={`/dogs/${dog.id}`}>
          <h2>{dog.name}</h2>
          <img src={dog.url} alt={dog.name} />
          <h3>{dog.type}</h3>
        </Link>
      </li>
    );
  }

}

export default DogItem;