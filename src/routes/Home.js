import React, { useEffect, useState } from 'react';
import '../App.css';
import Movie from '../components/Movie.js';

function Home() {

    const [loding, setLoading] = useState(true);
    const [movieData, setMovieData] = useState([]);
    const getMovie = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        const json = await response.json();
        setMovieData(json.data.movies)
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className="App">
            {loding
                ? <h1>Loading...</h1>
                : (
                    <div>
                        {movieData.map((movie, i) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                movie={movie}
                                index={i}
                                CoverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}>
                            </Movie>
                        ))}
                    </div>
                )}
        </div>
    );
}

export default Home;
