import React, { Component } from 'react';
import DogForm from '../common/DogForm';
import { getDogId, updateDog } from '../utils/famous-dogs-api';
import './DogUpdatePage.css';

class DogUpdatePage extends Component {
  state = { 
    dog: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const dog = await getDogId(match.params.id);
      console.log(dog);
      this.setState({ dog: dog });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading:false });
    }
  }

  handleUpdate = async dog => {
    const { history } = this.props;
    
    try {
      this.setState({ loading:true });
      const updatedDog = await updateDog(dog);
      console.log(updatedDog);
      history.push(`/dogs/${updatedDog.id}`);
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading:false });
    }
  }

  render() { 
    const { dog } = this.state;

    return ( 
      <div className="DogUpdatePage">
        <h2>Update Profile</h2>
        
        {dog && <DogForm dog={dog} onSubmit={this.handleUpdate}/>}
      </div>
    );
  }
}
 
export default DogUpdatePage;