

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-md-8 mx-auto text-center text-white">
            <h1 className="display-3 fw-bold mb-4 animate-title">
              Welcome to MovieDB
            </h1>
            <p className="lead mb-5 animate-text">
              Discover the latest and most popular movies from around the world.
              Create your personalized watchlist and never miss a great film.
            </p>
            <div className="d-flex justify-content-center gap-3">
            <Link 
          to="/dashboard" 
          className="btn btn-primary btn-lg"
        >
          Browse Movies
          <i className="bi bi-arrow-right ms-2"></i>
        </Link>
              <Link 
                to="/favorites" 
                className="btn btn-outline-light btn-lg hover-effect"
              >
                My Favorites
                <i className="bi bi-heart-fill ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;