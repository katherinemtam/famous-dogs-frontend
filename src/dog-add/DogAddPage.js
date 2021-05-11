import React, { Component } from 'react';
import DogForm from '../common/DogForm';
import Loader from '../common/Loader';
import { addDog } from '../utils/famous-dogs-api';
import './DogAddPage.css';

class DogAddPage extends Component {
  state = { 
    loading: false  
  }

  handleAdd = async dog => {
    const { history } = this.props;

    try {
      this.setState({ loading:true });
      const id = await addDog(dog);
      history.push(`/dogs/${id}`);
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() { 

    const { loading } = this.state;

    return ( 
      <div className="DogAddPage">
        <Loader loading={loading}/>

        <h2>Add a Famous Dog</h2>
        <DogForm onSubmit={this.handleAdd}/>
      </div>
    );
  }
}
 
export default DogAddPage;