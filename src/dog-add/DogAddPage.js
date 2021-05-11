import React, { Component } from 'react';
import DogForm from '../common/DogForm';
import Loader from '../common/Loader';

class DogAddPage extends Component {
  state = { 
    loading: false  
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