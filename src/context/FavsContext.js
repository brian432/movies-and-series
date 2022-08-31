import { createContext, useEffect, useState } from "react";

export const FavsContext = createContext()

export const FavsProvider = ({ children }) => {
    const [favs, setFavs] = useState([])
    const favsMovies = localStorage.getItem('favs')

    useEffect(() => {
        favsMovies !== null && setFavs(JSON.parse(favsMovies))
    }, [])

    const addOrRemoveFavs = (movieData) => {
        let movieIsInArray = favs.find(movie => { return movie.id === movieData.id })
        if (!movieIsInArray) {
            setFavs(prevFavs => [...prevFavs, movieData])
            localStorage.setItem('favs', JSON.stringify([...favs, movieData]))
        } else {
            let moviesLeft = favs.filter(movie => { return movie.id !== movieData.id })
            setFavs(moviesLeft)
            localStorage.setItem('favs', JSON.stringify(moviesLeft))
        }
    }

    const removeAllFavs = () => {
        setFavs([])
        localStorage.removeItem('favs')
    }

    return (
        <FavsContext.Provider value={{
            favs,
            addOrRemoveFavs,
            removeAllFavs
        }}>
            {children}
        </FavsContext.Provider>
    )
}
