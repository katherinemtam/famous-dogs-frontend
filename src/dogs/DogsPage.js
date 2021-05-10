import { Component } from 'react';
import DogList from './DogList';
import './DogsPage.css';

export default class DogsPage extends Component {
  state = {
    dogs: []
  }

  render() {
    const { dogs } = this.state;

    return (
      <div className="DogsPage">
        <h2>List o' Dogs</h2>

        <DogList dogs={dogs} />

      </div>
    );
  }

}