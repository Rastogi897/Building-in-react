import React from 'react'

const MovieCard = ({ data, id, handleBookmark }) => {
    return (
        <div className='movie-card' key={id}>
            <h3>{data.Name}</h3>
            <div>{data.Rating}</div>
            <button onClick={() => handleBookmark(id)}>
                {data.Bookmark ? "Bookmarked" : "Add to Bookmark"}
            </button>
        </div>
    )
}

export default MovieCard