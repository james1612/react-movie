import React from 'react';

// make functional
export default class Form extends React.Component {

handleSubmit = event => {
  event.preventDefault();
  this.props.searchFilm();
}

handleTextChange = event => {
  this.props.addQuery(event.target.value)
};




  render() {
    return (
      <div className = "formMain">
        <form onSubmit = {this.handleSubmit}>
          <input placeholder = "Search..."
                        onChange={this.handleTextChange}
                        value={this.props.text}
          />
          <button type = "submit">search</button>
          
          
          </form> 


      </div>
      )
    }
  }
