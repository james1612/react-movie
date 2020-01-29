import React from "react";
import axios from "axios"
import Film from "./Film";
import Form from "./Form";
import shortid from 'shortid'

const api = "https://www.omdbapi.com/?apikey=506c5e9"

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



  searchFilm = () => {
    axios(api + "&s=" + this.state.query)
    .then(( {data} ) => {
      this.setState ({
        films : data.Search
      })
    } )
  }



  render() {
    // const films =  this.state.films.map((film) => {
    //   return(
    //     <li>
    //       {film.Title}
    //     </li>
    //     )
    //   })

    const films = this.state.films.map((film) => {
      return(
      <Film
        title = {film.Title}
        year = {film.Year}
        imdbID = {film.imdbID}
        type = {film.Type}
        poster = {film.Poster}
        key = {shortid.generate()}
      />
      )
    })


  return (
    <div className="App">
      <h1>Movie database</h1>
      <Form 
        text = {this.state.query}
        addQuery = {this.addQuery}
        searchFilm = {this.searchFilm}
       />



       <div>
         {films}
       </div>
    </div>
  );}
}
