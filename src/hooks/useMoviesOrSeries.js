import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { GlobalContext } from "../context/GlobalState"
import { getMoviesOrSeries, getMoviesOrSeriesDetails, getPopularGenres, getSearchMoviesOrSeries } from "../services/fetchMoviesOrSeries"


export const useMoviesOrSeries = () => {
    const [moviesOrSeries, setMoviesOrSeries] = useState([])

    let query = new URLSearchParams(window.location.search);
    let search = query.get('search');

    const { page, genre } = useParams()

    const {series} = useContext(GlobalContext)

    useEffect(() => {
        search !== null ?
            getSearchMoviesOrSeries(page, search, series).then(searchMovies => setMoviesOrSeries(searchMovies.results)) :
            genre !== undefined ?
                getPopularGenres(page, genre, series).then(popularGenres => setMoviesOrSeries(popularGenres.results)) :
                getMoviesOrSeries(page, series).then(movieOrSerie => setMoviesOrSeries(movieOrSerie.results))
    }, [page, genre, search, series])

    return moviesOrSeries
}

export const useMoviesOrSeriesDetails = () => {
    const [details, setDetails] = useState()
    const [cast, setCast] = useState()
    const [similarMovies, setSimilarMovies] = useState()
    const [trailers, setTrailers] = useState()

    const {series} = useContext(GlobalContext)

    const { movieID } = useParams()

    useEffect(() => {
        getMoviesOrSeriesDetails(movieID, series)
            .then(({ details, cast, similar, trailers }) => {
                setDetails(details)
                setCast(cast?.cast?.slice(0, 5))
                setSimilarMovies(similar.results)
                setTrailers(trailers?.results?.slice(0, 5))
            })
    }, [movieID, series])

    return { details, cast, similarMovies, trailers }
}
