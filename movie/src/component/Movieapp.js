import React, { useState } from 'react';
import MovieList from './movie list';
import Filter from './filter';
import AddMovieForm from './Add form';

const MovieApp = () => {
  // État initial avec quelques films d'exemple
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un voleur expérimenté vole des secrets corporatifs grâce à la technologie du partage de rêves.",
      posterURL: "/api/placeholder/200/300",
      rating: 5
    },
    {
      title: "The Matrix",
      description: "Un programmeur découvre que la réalité est une simulation créée par des machines.",
      posterURL: "/api/placeholder/200/300",
      rating: 4
    }
  ]);

  // État pour les filtres
  const [filters, setFilters] = useState({
    title: '',
    rating: ''
  });

  // Gestion des filtres
  const handleFilterChange = (type, value) => {
    setFilters({...filters, [type]: value});
  };

  // Ajout d'un nouveau film
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filtrage des films
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filters.title.toLowerCase());
    const matchesRating = !filters.rating || movie.rating >= Number(filters.rating);
    return matchesTitle && matchesRating;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Ma Collection de Films</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default MovieApp;