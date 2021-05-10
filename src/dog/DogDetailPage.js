import { Component } from 'react';
import { getDogId } from '../utils/famous-dogs-api';
import './DogDetailPage.css';

export default class DogsDetailPage extends Component {
  state = {
    dog: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const dog = await getDogId(match.params.id);
    if (dog) {
      this.setState({ dog: dog });
    }
    else {
      console.log('No dog received! Check network tab.');
    }
  }

  render() {
    const { dog } = this.state;

    if (!dog) return null;

    return (
      <div className="Dog Detail">
        <h2>Dog Detail Page</h2>
        <p>{dog.url}</p>
        <p>Dog id: {dog.id}</p>
        <p>Dog name: {dog.name}</p>
        <p>Dog type: {dog.type}</p>
        <p>Featured: {dog.media}</p>
        <p>Featured Year: {dog.year}</p>
      </div>
    );
  }

}