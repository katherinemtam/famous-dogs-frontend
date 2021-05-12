import { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
  
  render() {
    const { loading } = this.props;
    if (!loading) return null;

    return (
      <div className="Loader">
        <img src="../images/dog-loader.gif" alt="loader dog"/>
      </div>
    );
  }

}