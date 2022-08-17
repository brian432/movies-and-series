import { useMoviesDetails } from '../../../hooks/useMovies'
import {scroll} from '../../../utils/scroll'
import img from '../../../no-img.jpg'

import Cast from '../../cast/cast'
import Trailers from '../../trailer/trailers'
import { CarouselSimilarMovies } from '../../carousel/Carousel'

const IMG_API = "https://image.tmdb.org/t/p/w500"
const BACKGROUND_IMG = "https://image.tmdb.org/t/p/original"

export const Details = () => {
    const { details, cast, similarMovies, trailers } = useMoviesDetails()
    scroll()
    return (
        <>
            <div className="background" style={details?.backdrop_path && { backgroundImage: `url(${BACKGROUND_IMG}${details?.backdrop_path})` }}></div>
            <section id="Info">
                <div className='div-img'>
                    <img src={details?.poster_path ? `${IMG_API}${details?.poster_path}`: img} alt={details?.title} />
                </div>
                <div className='info-movies'>
                    <h1 className='titulo'>{details?.title}<span className='puntaje'>{details?.vote_average?.toFixed(1)}</span></h1>
                    <p>Fecha de estreno: {details?.release_date}</p>
                    <p className="descripcion">{details?.overview}</p>
                    <div>
                        <h2>Cast</h2>
                        <div className='cast'>
                            {
                                cast?.map(actor => <Cast actor={actor} key={actor.credit_id} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="div-trailers">
                    {
                        trailers?.map(trailer =>
                            <Trailers trailer={trailer} key={trailer.id} />
                        )
                    }
                </div>
                <h1>Peliculas similares</h1>
                <CarouselSimilarMovies similarMovies={similarMovies}/>
            </section>
        </>
    )
}