import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

const DashboardItems = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = '461c570286691170bc9b32eaaf31542c';
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    useEffect(() => {
        setLoading(true);
        axios.get(API_URL)
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="container mt-4">Loading...</div>;
    if (!movie) return <div className="container mt-4">Movie not found</div>;

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                            className="img-fluid rounded-start"
                            alt={movie.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{movie.title}</h2>
                            <p className="card-text">{movie.overview}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Release Date: {movie.release_date}
                                </small>
                            </p>
                            <p className="card-text">
                                Rating: {movie.vote_average}/10
                            </p>
                            <Link to="/dashboard" className="btn btn-primary">
                                Back to Movies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardItems;
