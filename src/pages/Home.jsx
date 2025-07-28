import MovieCard from "../components/Moviecard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        { id: 1, title: "Movie 1", release_date: "2024" },
        { id: 2, title: "Movie 2", release_date: "2024" },
        { id: 3, title: "Movie 3", release_date: "2024" }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(`Searching for: ${searchQuery}`);
        setSearchQuery("");
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map(
                    (movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;