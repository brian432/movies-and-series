import { useMoviesOrSeries } from "../../../hooks/useMoviesOrSeries"

import { Movie } from "../../movie/movie"
import Buttons from "../../buttons/buttons"
import { scroll } from "../../../utils/scroll"
import { useParams } from "react-router-dom"

import { motion } from 'framer-motion'

export const Home = () => {
    const movies = useMoviesOrSeries()
    const { artistName } = useParams()
    scroll()
    return (
        <motion.main
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1}}
        >
            <>
                {
                    artistName && <h3 className="div-artist">Películas y series de {artistName?.replace(/-/g, " ")}</h3>
                }
                <div className="container-popular-movies">
                    {
                        movies.map(movie => <Movie movie={movie} key={`${movie.id}`} />)
                    }
                </div>
                <Buttons lengthMovies={movies.length} />
            </>
        </motion.main>
    )
}