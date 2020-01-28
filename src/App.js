import React from "react";
import axios from "axios"
// import Film from "./Film";
import Form from "./Form";

const api = "https://www.omdbapi.com/?i=tt3896198&apikey=506c5e9"

export default class App extends React.Component {
  state = {
    query : "",
    films : [],
    selected : {} 
  }

  addQuery = (text) => {
    this.setState({
      query : text
    })
  }

  displayResults = () => {

  }

  searchFilm = () => {
    axios(api + "&s=" + this.state.query).then(data => {
      console.log(JSON.stringify(data));
    })

  }

  render() {
  return (
    <div className="App">
      <h1>Movie database</h1>
      <Form 
      text = {this.state.query}
      addQuery = {this.addQuery}
          searchFilm = {this.searchFilm}
       />
    </div>
  );}
}
