import React from 'react';

export default class Film extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.year}</p>
        <p>{this.props.imdbID}</p>

      </div>
      )
    }
  }
