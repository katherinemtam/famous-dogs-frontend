import { Component } from 'react';
import { getDogs } from '../utils/famous-dogs-api';
import DogList from './DogList';
import './DogsPage.css';

export default class DogsPage extends Component {
  state = {
    dogs: []
  }

  async componentDidMount() {
    const dogs = await getDogs();
    if (dogs) {
      this.setState({ dogs: dogs });
    }
    else {
      console.log('No dogs received! Check network tab.');
    }
  }

  render() {
    const { dogs } = this.state;

    return (
      <div className="DogsPage">
        <h1>List o' Dogs</h1>

        <DogList dogs={dogs} />

      </div>
    );
  }

}