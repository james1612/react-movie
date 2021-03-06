import React from "react";
import axios from "axios"
import Film from "./Film";
import Form from "./Form";
import shortid from 'shortid'
import FilmIcon from './FilmIcon';

const api = "https://www.omdbapi.com/?apikey=506c5e9"

export default class App extends React.Component {
  state = {
    query : "",
    films : [], 
  }

  addQuery = (text) => {
    this.setState({
      query : text
    })
  }



  searchFilm = () => {
    axios(api + "&s=" + this.state.query)
    .then(( {data} ) => {
      this.setState ({
        films : data.Search
      })
    } )
  }

  filmDetails = (imdbID) => {
    axios(api + "&i=" + imdbID)
      .then (( {data} ) => {
        console.log(data)
      })
  }



  render() {
    const films = this.state.films.map((film) => {
      return(
      <Film
        title = {film.Title}
        year = {film.Year}
        imdbID = {film.imdbID}
        type = {film.Type}
        poster = {film.Poster}
        key = {shortid.generate()}
        filmDetails = {this.filmDetails}
      />
      )}
      )


  return (
    <div className="App">
      <div className = "headerWrapper">
        <h1>Movie database</h1>
      </div>
      <div className = "formWrapper">
      <Form 
        text = {this.state.query}
        addQuery = {this.addQuery}
        searchFilm = {this.searchFilm}
       />
       </div>



       <div>
         {films}
       </div>
    </div>
  );}
}
