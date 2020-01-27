import React from 'react';

export default class Form extends React.Component {

state = {
  text: ""
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.addFilm(this.state.text)
}

handleTextChange = event => {
  this.setState({
    text: event.target.value
  });
};



  render() {
    return (
      <div className = "formMain">
        <form onSubmit = {this.handleSubmit}>
          <input placeholder = "Search..."
                        onChange={this.handleTextChange}
                        value={this.state.text}
          />
          <button type = "submit">search</button>
          
          
          </form> 


      </div>
      )
    }
  }
