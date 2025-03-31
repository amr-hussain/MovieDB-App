import React from "react";

// bootstrab
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// redux-
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/slices/movieSlice";

const MovieCard = ({ title, rating, id, posterPath }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.some((movie) => movie.id === id);
  const favorite_toggle = (id, title, rating, posterPath) => {
    dispatch(toggleFavorite({ id, title, rating, posterPath }));
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
              onClick={() =>
                dispatch(toggleFavorite({ id, title, rating, posterPath }))
              }
            >
              <i className={`bi bi-heart${isFavorite ? "-fill" : ""}`}></i>
              {isFavorite ? " Remove from Wishlist" : " Add to Wishlist"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const Favorites = () => {
  const favorites = useSelector((state) => state.movies.favorites);
  if (favorites.length) {
    return (
      <div className="container">
        <h1 className="text-center my-4">My Favorites</h1>
        <div className="row g-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="col-md-4 col-lg-3">
              <MovieCard
                title={movie.title}
                rating={movie.rating}
                id={movie.id}
                posterPath={movie.posterPath}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <h1 className="text-center my-4 ">
          You Haven't Selected Any Favorite Movies
        </h1>
        <Link to={`/dashboard`} className="btn btn-outline-light ">
          Continue Browsing Movies..
        </Link>
      </div>
    );
  }
};
export default Favorites;
