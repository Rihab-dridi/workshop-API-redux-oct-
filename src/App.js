import "./App.css";
import { movies } from "./components/movies";
import { useState } from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import Rate from "./components/Rate";
function App() {
  const [moviListe, setmoviListe] = useState(movies);

  //add a new movie
  const addHandler = (newMovie) => {
    setmoviListe([...moviListe, newMovie]);
  };

  //search by title
  //step1: reccupere les data de l'utilisateur
  const [search, setsearch] = useState("");

  const [rate, setRate] = useState(1);
  return (
    <div className="App">
      <Navbar />
      <div className="headerComp">
        <Filter setsearch={setsearch} />
        <Rate setRate={setRate} rate={rate} />
        <AddMovie addHandler={addHandler} />
      </div>
      <MovieList moviListe={moviListe} search={search} />
    </div>
  );
}

export default App;
