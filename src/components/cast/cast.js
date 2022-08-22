import React from 'react'
import { Link } from "react-router-dom"
import img from '../../no-img.jpg'

const IMG_API = "https://image.tmdb.org/t/p/w500"

const Cast = ({ actor }) => {
    return (
        <div className="div-actores">
            <div className="div-img-actor">
                <Link to={`/cast/${actor.id}/${actor.name.replace(/ /g, "-")}`} >
                    <img src={actor.profile_path ? `${IMG_API}${actor?.profile_path}` : img} alt={actor.name} />
                </Link>
            </div>
            <p>{actor.name}</p>
        </div>
    )
}
export default React.memo(Cast)