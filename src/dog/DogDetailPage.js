import { Component } from 'react';
import Loader from '../common/Loader';
import { Link } from 'react-router-dom';
import { getDogId, deleteDog } from '../utils/famous-dogs-api';
import './DogDetailPage.css';

export default class DogsDetailPage extends Component {
  state = {
    dog: null
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const dog = await getDogId(match.params.id);
      this.setState({ dog: dog });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleDelete = async () => {
    const { dog } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to release ${dog.name}? You will not be able to get ${dog.name} back! (PS: You are deleting this entry.)`;

    if (!window.confirm(confirmation)) return;

    try {
      this.setState({ loading: true });
      await deleteDog(dog.id);
      history.push('/dogs');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading:false });
    }

  }

  render() {
    const { dog, loading } = this.state;

    if (!dog) return null;

    return (
      <div className="DogDetail">
        <div className="Wrapper">
          <Loader loading={loading}/>
          
          <h2>{dog.name}'s Detail Page</h2>
          <img src={dog.url} alt={dog.name}/>
          <p>Dog ID: {dog.id}</p>
          <p>Name: {dog.name}</p>
          <p>Breed: {dog.type}</p>
          <p>Featured: {dog.media}</p>
          <p>Featured Year: {dog.year}</p>
          <p>Animated: {dog.isAnimated.toString()} </p>

          <Link to={`/dogs/${dog.id}/update`}>
            Update {dog.name}'s Profile
          </Link>

          <button className="delete" onClick={this.handleDelete}>
            Release {dog.name}
          </button>

        </div>
      </div>
    );
  }
}
