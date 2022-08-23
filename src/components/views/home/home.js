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
            {
                artistName && <h3 className="div-artist">Películas y series de {artistName?.replace(/-/g, " ")}</h3>
            }
            <div className="container-popular-movies">
                {
                    movies.map((movie, indice) => <Movie movie={movie} key={indice.toString()} />)
                }
            </div>
            <Buttons lengthMovies={movies.length} />
        </main>
    )
}