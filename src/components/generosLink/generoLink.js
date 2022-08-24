import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalState"

export const Links = ({ genero, handleClases }) => {
    const { firstPathName } = useContext(GlobalContext)
    return (
        <li>
            <Link
                to={`${firstPathName === "series" ? "/series" : ""}/genre/${genero.id}`}
                className="links hover"
                onClick={handleClases}
                name={genero.name}
                id={genero.id}
            >
                {genero.name}
            </Link>
        </li>
    )
}