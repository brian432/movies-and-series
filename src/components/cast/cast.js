import React from "react"
import img from '../../no-img.jpg'
const IMG_API = "https://image.tmdb.org/t/p/w500"


const Cast = ({ actor }) => {
    return (
        <div className="div-actores">
            <div className="div-img-actor">
                <img src={actor.profile_path ? `${IMG_API}${actor?.profile_path}` : img} alt={actor.name} />
            </div>
            <p>{actor.name}</p>
        </div>
    )
}
export default React.memo(Cast)