import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import axios from "axios";
import { FETCHHandler } from "../redux/action";
import { Spinner } from "react-bootstrap";

export default function MovieList({ moviListe, search }) {
  const dispatch = useDispatch();
  const [spineer, setSpinner] = useState(false);
  useEffect(
    () =>
      axios
        .get("https://movie-app-gmc.herokuapp.com/api/movies")
        .then((res) => dispatch(FETCHHandler(res.data)))
        .then((res) => setSpinner(true))
        .catch((err) => console.log(err)),
    []
  );

  const movies = useSelector((state) => state.movies);
  return (
    <div>
      <div className="movieListContainer">
        {spineer ? (
          movies
            .filter((el) =>
              el.title.toUpperCase().includes(search.toUpperCase().trim())
            )
            .map((el, key) => <MovieCard movie={el} key={el.id} />)
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </div>
    </div>
  );
}
//axios : a library to send http request (npm install axios )
// http method : la nature de la requete : create: post / Read: get/ update: put/ delete: delete
//then catch //  try catch
