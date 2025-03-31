import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <h2>page not found ERROR 4004</h2>
        <Link to="/">
            <button>Go Back</button>
        </Link>
        </>
    )
}
export default NotFound