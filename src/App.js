import './App.css';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import SearchMovie from './Components/SearchMovie'

import { useState } from 'react';

import { v4 as uuidv4 } from "uuid";

import bosslevel from './Assets/bosslevel.jpg'
import captainamerica from './Assets/captainamerica.jpg'
import joker from './Assets/joker.jpg'
import paw from './Assets/paw.jpg'
import raees from './Assets/raees.jpg'
import starwars from './Assets/starwars.jpg'
import timeless from './Assets/timeless.jpg'


function App() {
  const [initialDetails, setinitialDetails] = useState(
    [
      {
        id: uuidv4(),
        image: bosslevel,
        title: "Bosslevel",
        year: "2020",
        rating: "4",
        prise: "19DT",
      },
      {
        id: uuidv4(),
        image: captainamerica,
        title: "Captain Aamerica",
        year: "2019",
        rating: "3",
        prise: "25DT",
      },
      {
        id: uuidv4(),
        image: joker,
        title: "Joker",
        year: "2019",
        rating: "5",
        prise: "25DT",
      },
      {
        id: uuidv4(),
        image: paw,
        title: "Paw",
        year: "2020",
        rating: "4",
        prise: "25DT",
      },
      {
        id: uuidv4(),
        image: raees,
        title: "Raees",
        year: "2018",
        rating: "2",
        prise: "12DT",
      },
      {
        id: uuidv4(),
        image: starwars,
        title: "Starwars",
        year: "2017",
        rating: "4",
        prise: "21DT",
      },
      {
        id: uuidv4(),
        image: timeless,
        title: "Timeless",
        year: "2019",
        rating: "3",
        prise: "17DT",
      },
    ]);

  const [searchMovie, setSearchMovie] = useState("");

  const [searchRating, setSearchRating] = useState(1);

  const addNewMovie = (data) => {
    setinitialDetails(initialDetails.concat(data))
  };

  const searchMovieByName = (name) => {
    setSearchMovie(name.target.value);
  };

  const searchMovieByRating = (numRating) => {
    setSearchRating(numRating);
  };

  return (
    <div className="movie-list">
      <SearchMovie searchMovieByName={searchMovieByName} searchMovieByRating={searchMovieByRating} searchRating={searchRating}/>
      <MovieList initialDetails={initialDetails.filter(el =>
        el.title.toUpperCase().includes(searchMovie.toUpperCase().trim()) &&
        el.rating>=searchRating )}
      />
      <AddMovie addNewMovie={addNewMovie} />
    </div>
  );
}

export default App;
