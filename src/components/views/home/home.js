import { useMoviesOrSeries } from "../../../hooks/useMoviesOrSeries"

import { Movie } from "../../movie/movie"
import { Buttons } from "../../buttons/buttons"
import { scroll } from "../../../utils/scroll"

export const Home = () => {
    const movies = useMoviesOrSeries()
    scroll()
    return (
        <main>
            <div className="container-popular-movies">
                {
                    movies.map(movie => <Movie movie={movie} key={movie.id.toString()} />)
                }
            </div>
            <Buttons lengthMovies={movies.length !== 0 ? true : false} />
        </main>
    )
}