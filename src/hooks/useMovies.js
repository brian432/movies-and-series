import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getMovies, getMoviesDetails } from "../services/fetchMovies"

export const useMovies = () => {
    const [movies, setMovies] = useState([])
    const { page } = useParams()
    useEffect(() => {
        getMovies(page).then(movie => setMovies(movie.results))
    }, [page])

    return movies
}

export const useMoviesDetails = () => {
    const [details, setDetails] = useState()
    const { movieID } = useParams()
    
    useEffect(() => {
        getMoviesDetails(movieID).then(data => setDetails(data))
    }, [movieID])
    
    return details
}