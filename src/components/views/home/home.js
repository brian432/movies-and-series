import { useMovies } from "../../../hooks/useMovies"

import './home.css'

import { Movie } from "../../movie/movie"
import { Buttons } from "../../buttons/buttons"

export const Home = () => {
    const movies = useMovies()
    return (
        <main>
            <div className="container-popular-movies">
                {
                    movies.map(movie => <Movie movie={movie} key={movie.id.toString()} />)
                }
            </div>
            <Buttons />
        </main>
    )
}