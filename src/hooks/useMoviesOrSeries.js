import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { GlobalContext } from "../context/GlobalState"
import { getArtistMoviesOrSeries, getMoviesOrSeries, getMoviesOrSeriesDetails, getPopularGenres, getSearchMoviesOrSeries } from "../services/fetchMoviesOrSeries"


export const useMoviesOrSeries = () => {
    const [moviesOrSeries, setMoviesOrSeries] = useState([])

    let query = new URLSearchParams(window.location.search);
    let search = query.get('search');

    const { page, genre, artistID } = useParams()

    const { firstPathName } = useContext(GlobalContext)

    useEffect(() => {
        firstPathName === "cast" ? getArtistMoviesOrSeries(artistID, page).then(artist => setMoviesOrSeries(artist)) :
            search !== null ?
                getSearchMoviesOrSeries(page, search, firstPathName).then(searchMovies => setMoviesOrSeries(searchMovies.results)) :
                genre !== undefined ?
                    getPopularGenres(page, genre, firstPathName).then(popularGenres => setMoviesOrSeries(popularGenres.results)) :
                    getMoviesOrSeries(page, firstPathName).then(movieOrSerie => setMoviesOrSeries(movieOrSerie.results))
    }, [firstPathName, page, genre, search, artistID])

    return moviesOrSeries
}

export const useMoviesOrSeriesDetails = () => {
    const [details, setDetails] = useState()
    const [cast, setCast] = useState()
    const [similarMovies, setSimilarMovies] = useState()
    const [trailers, setTrailers] = useState()

    const { firstPathName } = useContext(GlobalContext)

    const { movieID } = useParams()

    useEffect(() => {
        getMoviesOrSeriesDetails(movieID, firstPathName)
            .then(({ details, cast, similar, trailers }) => {
                setDetails(details)
                setCast(cast?.cast?.slice(0, 5))
                setSimilarMovies(similar.results)
                setTrailers(trailers?.results?.slice(0, 5))
            })
    }, [movieID, firstPathName])

    return { details, cast, similarMovies, trailers }
}
