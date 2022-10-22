import React from 'react'
import MovieCard from '../UI/MovieCard/MovieCard'
import classes from './Movies.module.css'

const Movies = ({ movies }) => {

	return (
		<div className={classes.moviesList}>
			<ul className={classes.movies}>
				{
					movies.map(movie => {
						return <li key={movie.kinopoiskId}>
							<MovieCard movie={movie} />
						</li>
					})
				}
			</ul>
		</div>
	)
}

export default Movies

