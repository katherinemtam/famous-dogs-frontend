import React, { Component } from 'react';
import './DogForm.css';

class DogForm extends Component {
  state = { 
    name: 'Dog',
    type: 'Dog',
    url: 'https://placedog.net/500/280',
    media: 'Doggo Life',
    year: '2021',
    isAnimated: false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeType = ({ target }) => {
    this.setState({ type: target.value });
  }
  
  handleChangeUrl = ({ target }) => {
    this.setState({ url: target.value });
  }
  
  handleChangeMedia = ({ target }) => {
    this.setState({ media: target.value });
  }

  handleChangeYear = ({ target }) => {
    this.setState({ year: target.value });
  }

  handleChangeIsAnimated = ({ target }) => {
    this.setState({ isAnimated: target.checked });
  }

  render() { 

    const { name, type, url, media, year, isAnimated } = this.state;

    return ( 
      <form className="DogForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Dog Name</span>
            <input name="name" required placeholder="Name of the Famous Dog"
              value={name} onChange={this.handleChangeName} 
            />
          </label>
        </p>

        <p>
          <label>
            <span>Breed</span>
            <input name="type" required placeholder="Type or Breed"
              value={type} onChange={this.handleChangeType} 
            />
          </label>
        </p>

        <p>
          <label>
            <span>Dog Image Url</span>
            <input name="url" required placeholder="URL to the Image of the Dog"
              value={url} onChange={this.handleChangeUrl} 
            />
          </label>
        </p>

        <p>
          <label>
            <span>Featured</span>
            <input name="media" required placeholder="Name of Movie/Show the Dog was Featured in"
              value={media} onChange={this.handleChangeMedia} 
            />
          </label>
        </p>

        <p>
          <label>
            <span>Featured Year</span>
            <input name="year" required pattern="\d{4}"
              title="Should be a four digit year like 2021"
              placeholder="Enter a Four-Digit Year"
              value={year} onChange={this.handleChangeYear} 
            />
          </label>
        </p>

        <p>
          <label>
            <span>Is the Dog Animated?</span>
            <span className="vertically-centered">
              <input name="isAnimated"
                type="checkbox"
                value={isAnimated} onChange={this.handleChangeIsAnimated} 
              /> Yes
            </span>
          </label>
        </p>

        <p>
          <button>Add Dog</button>
        </p>

      </form>
    );
  }
}
 
export default DogForm;