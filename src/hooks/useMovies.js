import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getMovies, getMoviesDetails, getPopularGenres, getSearchMovies } from "../services/fetchMovies"

export const useMovies = () => {
    const [movies, setMovies] = useState([])

    let query = new URLSearchParams(window.location.search);
    let search = query.get('search');

    const { page, genre } = useParams()
    useEffect(() => {
        search !== null ?
            getSearchMovies(page, search).then(searchMovies => setMovies(searchMovies.results)) :
            genre !== undefined ?
                getPopularGenres(page, genre).then(popularGenres => setMovies(popularGenres.results)) :
                getMovies(page).then(movie => setMovies(movie.results))
    }, [page, genre, search])

    return movies
}

export const useMoviesDetails = () => {
    const [details, setDetails] = useState()
    const [cast, setCast] = useState()
    const [similarMovies, setSimilarMovies] = useState()
    const [trailers, setTrailers] = useState()

    const { movieID } = useParams()

    useEffect(() => {
        getMoviesDetails(movieID)
            .then(({ details, cast, similar, trailers }) => {
                setDetails(details)
                setCast(cast?.cast.slice(0, 5))
                setSimilarMovies(similar.results)
                setTrailers(trailers?.results?.slice(0,5))
            })
    }, [movieID])

    return { details, cast, similarMovies, trailers }
}
