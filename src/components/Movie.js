import React, { useState } from "react";
import '../App.css';
import ProTypes from "prop-types";
import { Link, } from 'react-router-dom';

function Movie({ movie, id, index, CoverImg, title, summary, genres }) {
    return (
        <div key={index}>
            <h1>Number{index + 1}</h1>
            <img src={CoverImg} alt={title}></img>
            <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
            <p>{summary}</p>
            {movie.hasOwnProperty("genres")//hasOwnProperty함수는 있으면 true 없으면 false를 날려줌
                ? <ul className='generes-ul'>
                    {genres.map((g, i) =>
                        <li key={i}>{g}</li>
                    )}
                </ul>
                : null}
        </div>
    );
};

Movie.ProTypes = {
    movie: ProTypes.arrayOf(ProTypes.string).isRequired,
    index: ProTypes.number.isRequired,
    id: ProTypes.number.isRequired,
    CoverImg: ProTypes.string.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    genres: ProTypes.arrayOf(ProTypes.string).isRequired,
}

export default Movie;