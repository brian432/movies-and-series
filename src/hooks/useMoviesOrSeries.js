import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getMoviesOrSeries, getMoviesOrSeriesDetails, getPopularGenres, getSearchMoviesOrSeries } from "../services/fetchMoviesOrSeries"
import { useContext } from "react"
import { GlobalContext } from '../context/GlobalState'

export const useMoviesOrSeries = () => {
    const [moviesOrSeries, setMoviesOrSeries] = useState([])
    const { serie } = useContext(GlobalContext)

    let query = new URLSearchParams(window.location.search);
    let search = query.get('search');

    const { page, genre } = useParams()


    useEffect(() => {
        search !== null ?
            getSearchMoviesOrSeries(page, search, serie).then(searchMovies => setMoviesOrSeries(searchMovies.results)) :
            genre !== undefined ?
                getPopularGenres(page, genre, serie).then(popularGenres => setMoviesOrSeries(popularGenres.results)) :
                getMoviesOrSeries(page, serie).then(movieOrSerie => setMoviesOrSeries(movieOrSerie.results))
    }, [page, genre, search, serie])

    return moviesOrSeries
}

export const useMoviesOrSeriesDetails = () => {
    const [details, setDetails] = useState()
    const [cast, setCast] = useState()
    const [similarMovies, setSimilarMovies] = useState()
    const [trailers, setTrailers] = useState()
    const { serie } = useContext(GlobalContext)

    const { movieID} = useParams()

    useEffect(() => {
        getMoviesOrSeriesDetails(movieID, serie)
            .then(({ details, cast, similar, trailers }) => {
                setDetails(details)
                setCast(cast?.cast?.slice(0, 5))
                setSimilarMovies(similar.results)
                setTrailers(trailers?.results?.slice(0, 5))
            })
    }, [movieID, serie])

    return { details, cast, similarMovies, trailers }
}
