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
      <div className="DogDetail">
        <div className="Wrapper">
          <h2>{dog.name}'s Detail Page</h2>
          <img src={dog.url} alt={dog.name}/>
          <p>Dog ID: {dog.id}</p>
          <p>Name: {dog.name}</p>
          <p>Breed: {dog.type}</p>
          <p>Featured: {dog.media}</p>
          <p>Featured Year: {dog.year}</p>
          <p>Animated: {dog.isAnimated.toString()} </p>
        </div>
      </div>
    );
  }

}