import React from 'react';

export default class Film extends React.Component {


  getDetails = () => {
    this.props.filmDetails(this.props.imdbID)
  }

  render() {
    return (
      <div onClick = {this.getDetails}>
        <h2>{this.props.title}</h2>
        <p>{this.props.year}</p>
      </div>
      )
    }
  }
