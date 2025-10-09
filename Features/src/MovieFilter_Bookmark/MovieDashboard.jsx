import React, { use, useState } from 'react'
import MovieCard from './MovieCard'
import "./style.css"
import movies from "./movies.json"

const MovieDashboard = () => {
    const [allMovieList, setAllMovieList] = useState(movies);
    const [movieList, setMovieList] = useState(movies);
    const [filter, setFilter] = useState(0);

    const handleMovieFilter = (e) => {
        let rating = e.target.value;
        setFilter(rating);

        if (rating == 0) {
            setMovieList(allMovieList);
            return;
        }

        let newMovieList = allMovieList.filter((data) => data.Rating > rating);
        setMovieList(newMovieList);
    }

    const handleBookmark = (id) => {
        let updatedMovieList = allMovieList.map((data) =>
            id == data.id ? { ...data, Bookmark: !data.Bookmark } : data
        )
        setAllMovieList(updatedMovieList)

        if (filter == 0) {
            setMovieList(updatedMovieList);
            return;
        }

        let newMovieList = updatedMovieList.filter((data) => data.Rating > filter);
        setMovieList(newMovieList);
    }

    return (
        <div className='container'>
            <div className='top-bar'>
                <div>
                    <label>Ratings:</label>
                    <select onChange={handleMovieFilter}>
                        <option value={0}>All</option>
                        <option value={5.0} >{"> 5.0"}</option>
                        <option value={7.0}>{"> 7.0"}</option>
                        <option value={8.0}>{"> 8.0"}</option>
                        <option value={9.0}>{"> 9.0"}</option>
                    </select>
                </div>
                <div>
                    Total movies: {movieList.length}
                </div>
            </div>
            <div>
                {
                    movieList.map((data) => {
                        return <MovieCard
                            data={data}
                            id={data.id}
                            handleBookmark={handleBookmark} />
                    })
                }
            </div>
        </div>
    )
}

export default MovieDashboard