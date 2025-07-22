import React from 'react'
import movies from '../data/movies'
import { Link } from "react-router-dom";
import "../App.css";

const MovieList = () => {
  return ( 
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`} className="bg-white rounded shadow col-span-1 p-2">
          <img src={`/${encodeURIComponent(movie.poster)}`} alt={movie.title} className="w-full rounded" />
          <h2 className="text-center mt-2">{movie.title}</h2>
        </Link>
      ))}
    </div>
  )
}

export default MovieList;