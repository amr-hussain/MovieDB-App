import React from "react";

const About = () => {
  
  return (
<section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead text-muted">Streamlined movie discovery, served fresh.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow border-0">
            <div className="card-body p-5">
              <h2 className="h4 mb-3">Welcome to <span className="text-primary">MovieScope</span>!</h2>
              <p className="mb-3">
                <strong>MovieScope</strong> is your go-to platform for discovering, tracking, and exploring movies from every corner of cinema — from Hollywood hits to arthouse gems.
              </p>
              <p className="mb-3">
                Built with <strong>React</strong> and juiced up by the mighty <a href="https://www.themoviedb.org/documentation/api" className="link-primary" target="_blank" rel="noopener noreferrer">TMDB API</a>, we give you a seamless, responsive experience for browsing movie data in real-time: posters, ratings, cast lists, trailers — all at your fingertips.
              </p>
              <p className="mb-3">
                Search by genre, release year, popularity, or keywords. Bookmark your favorites, build a watchlist, or just browse and chill. Our goal? Make movie discovery addictive and smooth.
              </p>
              <p className="mb-3">
                <strong>Disclaimer:</strong> This app is a personal/portfolio project. All movie content, including data and visuals, are courtesy of TMDB.
              </p>
              <p className="mb-0">
                Thanks for stopping by. Fire up the popcorn. 🍿 Dive into cinema the rebel way. 🔥
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
