
function MovieCard({ movie }) {

    function onFavoriteClick(movie) {
        alert("clicked");
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
                <p className="movie-rating">Rating: {movie.rating}</p>
            </div>
        </div>
    );
}

export default MovieCard;