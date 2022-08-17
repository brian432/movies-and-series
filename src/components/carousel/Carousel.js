import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Movie } from "../movie/movie";

import { useResize } from "../../hooks/useResize";


export const CarouselSimilarMovies = ({ similarMovies }) => {

    const {isPhone} = useResize()

    return (
        <Swiper
            slidesPerView={isPhone ? 3 : 5}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                similarMovies?.map(movie =>
                    <SwiperSlide className="carousel-div" key={movie.id}>
                        <Movie movie={movie} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}