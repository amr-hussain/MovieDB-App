import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// for placholder 
import CardPlacholder from '../placeholder/cardplaceholder'
// import ReactPlaceholder from 'react-placeholder';
// import "react-placeholder/lib/reactPlaceholder.css";


// Aren't being used after using Thunk 
import { useState } from "react";
import axios from "axios";

// bootstrab
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, toggleFavorite } from "../../redux/slices/movieSlice";
import "bootstrap-icons/font/bootstrap-icons.css";

// react component always recieve their arguments as a single object
// and below is an example of destructuring otherwise, use props.id, etc..
const MovieCard = ({ title, rating, id, posterPath }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.some((movie) => movie.id === id);
  const favorite_toggle = (id, title, rating, posterPath) => {
    dispatch(toggleFavorite({ id, title, rating, posterPath }));
    console.log(favorites, isFavorite);
  };
  return (
    <>
      <Card style={{ width: "18rem", height: "100%" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={title}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex flex-column align-items-center justify-content-around">
            <Link to={`/dashboard/${id}`} className="btn btn-outline-primary">
              View Details
            </Link>
            <div className="w-50 bg-info">Rating: {rating}</div>
            <Button
              variant={isFavorite ? "danger" : "outline-danger"}
              className="mt-2"
              onClick={() => favorite_toggle(id, title, rating, posterPath)}
            >
              <i className={`bi bi-heart`}></i>
              {isFavorite ? " Remove from Favorites" : " Add to Favorites"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const Dashboard = () => {
  // ############### Before using redux-Thunk we handled API from single object like dashboard#########
  // const [movies, setmovies] = useState([]);
  // const apiKey = "461c570286691170bc9b32eaaf31542c";
  // const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  // const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
  // useEffect(() => {
  //   axios
  //   .get(API_URL)
  //   .then((response) => {
  //     setmovies(response.data.results);
  //     // console.log(response.data.results);
  //   })
  //   .catch((error) => console.log(error));
  // }, []);

  // ################ After using Thunk ################
  "Always call the hooks at the top";
  // search add-on
  const storeSQ = useSelector((state) => state.searchQuery.query);
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies); // form movieSlice.js
  useEffect(() => {
    //  if (movies.length == 0) {  // to prevent fetching if movies is already not empty.
      dispatch(fetchMovies());
    //  }
  }, [dispatch]);
  ("React's Strict Mode and ESLint rules suggest that any function used inside useEffect should be added to the dependency array.\
  That's why we added dispatch to the dependencies, though it won't change");

  // handling loading
  if (loading){
    return (
      <CardPlacholder/>
    );
  }

  // handling errors
  if (error) return <div>Error: {error}</div>;

  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(storeSQ.toLowerCase())
  );
  // console.log(typeof filteredMovies, typeof storeSQ);

  return (
    <>
      <div className="container">
        <h1 className="text-center ">Popular Movies</h1>
        <div className="row g-4">
          {filteredMovies.map((m) => (
            <div key={m.id} className="col-md-4 col-lg-3">
              <MovieCard
                title={m.title}
                rating={m.vote_average}
                id={m.id}
                posterPath={m.poster_path}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
