import React from "react";
import Film from "./Film";
import Form from "./Form";

export default class App extends React.Component {
  state = {
    films : []
  }


  addFilm = (film) => {
    console.log(film);
  }
  render() {
  return (
    <div className="App">
      <h1>Movie database</h1>
      <Form addFilm = {this.addFilm} />
    </div>
  );}
}
