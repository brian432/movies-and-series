import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FavsContext } from "../../context/FavsContext"
import { Movie } from "../movie/movie"

export const Favs = () => {
    const { favs, removeAllFavs } = useContext(FavsContext)
    const storageFavs = localStorage.getItem('favs')
    const navigate = useNavigate()

    const handleDeleteFavs = () => {
        removeAllFavs()
        navigate('/', { replace: true })
    }

    useEffect(() => {
        (storageFavs === "[]" || storageFavs === null) && navigate('/', { replace: true })
    }, [favs, navigate, storageFavs])

    return (
        <>
            <div className="favs-deleted">
                <button onClick={handleDeleteFavs}>X</button>
            </div>
            <div className="container-popularOrFavs-movies">

                {
                    favs?.map(movieFavs => <Movie movie={movieFavs} key={`${movieFavs.id}`} />)
                }
            </div>
        </>
    )
}