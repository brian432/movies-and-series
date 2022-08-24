import { useMoviesOrSeriesDetails } from '../../../hooks/useMoviesOrSeries'
import { scroll } from '../../../utils/scroll'
import img from '../../../no-img.jpg'

import Cast from '../../cast/cast'
import Trailers from '../../trailer/trailers'
import { Links } from '../../generosLink/generoLink'
import { CarouselSimilarMovies } from '../../carousel/Carousel'

import { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'

const IMG_API = "https://image.tmdb.org/t/p/w500"
const BACKGROUND_IMG = "https://image.tmdb.org/t/p/original"

export const Details = () => {
    const { firstPathName } = useContext(GlobalContext)
    const { details, cast, similarMovies, trailers } = useMoviesOrSeriesDetails()

    scroll()
    return (
        <>
            <div className="background" style={details?.backdrop_path && { backgroundImage: `url(${BACKGROUND_IMG}${details?.backdrop_path})` }}></div>
            <section id="Info">
                <div className='div-img'>
                    <img src={details?.poster_path ? `${IMG_API}${details?.poster_path}` : img} alt={details?.title} />
                </div>
                <div className='info-movies'>
                    <h1 className='titulo'>{details?.title || details?.original_name}<span className='puntaje'>{details?.vote_average?.toFixed(1)}</span></h1>
                    <p>Fecha de estreno: {details?.release_date || details?.first_air_date}</p>
                    <p className="descripcion">{details?.overview}</p>
                    {
                        cast?.length > 0 &&
                        <div>
                            <h2>Cast</h2>
                            <div className='cast'>
                                {
                                    cast?.map(actor => <Cast actor={actor} key={actor.name} />)
                                }
                            </div>
                        </div>
                    }
                    {
                        details?.genres.length > 0 &&
                        <div className='genresDetails'>
                            <h2>Generos: </h2>
                            <div>
                                {
                                    details?.genres.map(genero => <Links genero={genero} key={genero.name} />)
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className="div-trailers">
                    {
                        trailers?.map(trailer =>
                            <Trailers trailer={trailer} key={trailer.id} />
                        )
                    }
                </div>
                {
                    similarMovies?.length > 0 &&
                    <>
                        <h1>{firstPathName === "series" ? "Series" : "Películas"} similares</h1>
                        <CarouselSimilarMovies similarMovies={similarMovies} />
                    </>
                }

            </section>
        </>
    )
}