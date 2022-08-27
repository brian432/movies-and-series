import { useMoviesOrSeries } from "../../../hooks/useMoviesOrSeries"

import { Movie } from "../../movie/movie"
import Buttons from "../../buttons/buttons"
import { scroll } from "../../../utils/scroll"
import { useParams } from "react-router-dom"

export const Home = () => {
    const movies = useMoviesOrSeries()
    const { artistName } = useParams()
    scroll()
    return (
        <main>
            <>
                {
                    artistName && <h3 className="div-artist">Películas y series de {artistName?.replace(/-/g, " ")}</h3>
                }
                <div className="container-popularOrFavs-movies">
                    {
                        movies?.map(movie => <Movie movie={movie} key={`${movie.id}`} />)
                    }
                </div>
                <Buttons lengthMovies={movies.length} />
            </>
        </main>
    )
}