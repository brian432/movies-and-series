const API_KEY = "api_key=04c35731a5ee918f014970082a0088b1"
const API_TMDB = "https://api.themoviedb.org/3"

export const getMoviesOrSeries = async (page = "1", series) => {
    try {
        const response = await fetch(`${API_TMDB}/${series === "series" ? "tv" : "movie"}/popular?${API_KEY}&language=en-US&page=${page}`)
        const data = await response.json()

        return data
    } catch (err) {
        console.log("Get MoviesOrSeries failed: ", err);
    }
}

export const getMoviesOrSeriesDetails = async (movieID, series) => {
    try {
        const response = await Promise.all([
            fetch(`${API_TMDB}/${series === "series" ? "tv" : "movie"}/${movieID}?${API_KEY}&language=es`),
            fetch(`${API_TMDB}/${series === "series" ? "tv" : "movie"}/${movieID}/credits?${API_KEY}&language=es`),
            fetch(`${API_TMDB}/${series === "series" ? "tv" : "movie"}/${movieID}/similar?${API_KEY}&language=es&page=1`),
            fetch(`${API_TMDB}/${series === "series" ? "tv" : "movie"}/${movieID}/videos?${API_KEY}&language=en&page=1`),
        ])
        const [details, cast, similar, trailers] = await Promise.all(response.map(result => result.json()))

        return { details, cast, similar, trailers }
    } catch (err) {
        console.log("Get MoviesOrSeriesDetails failed: ", err);
    }
}

export const getPopularGenres = async (page, genero, series) => {
    try {
        const response = await fetch(`${API_TMDB}/${series === "series" ? "tv" : "movie"}/popular?${API_KEY}&page=${page}&with_genres=${genero}`)
        const popularGenres = await response.json()

        return popularGenres
    } catch (err) {
        console.log("getPopularGenres failed", err)
    }
}

export const getSearchMoviesOrSeries = async (page = 1, search, series) => {
    try {
        const response = await fetch(`${API_TMDB}/search/${series === "series" ? "tv?" : "movie?"}${API_KEY}&page=${page}&query=${search}`)
        const searchMovies = await response.json()

        return searchMovies
    } catch (err) {
        console.log("getSearchMoviesOrSeries failed", err);
    }
}