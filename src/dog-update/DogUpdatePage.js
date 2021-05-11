import React, { Component } from 'react';
import DogForm from '../common/DogForm';
import './DogUpdatePage.css';

class DogUpdatePage extends Component {
  state = { 
    dog: null,
    loading: false
  }

  render() { 
    const { dog } = this.state;
    if (!dog) return null;

    return ( 
      <div className="DogEditPage">
        <h2>Update {dog.name}'s Profile</h2>
        <DogForm dog={dog} onSubmit={this.handleUpdate}/>
      </div>
    );
  }
}
 
export default DogUpdatePage;