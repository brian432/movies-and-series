const API_KEY = "api_key=04c35731a5ee918f014970082a0088b1"
const API_TMDB = "https://api.themoviedb.org/3"

export const getMoviesOrSeries = async (page = "1", firstPathName) => {
    try {
        const response = await fetch(`${API_TMDB}/${firstPathName === "series" ? "tv" : "movie"}/popular?${API_KEY}&language=en-US&page=${page}`)
        const data = await response.json()

        return data
    } catch (err) {
        console.log("Get MoviesOrSeries failed: ", err);
    }
}

export const getMoviesOrSeriesDetails = async (movieID, firstPathName) => {
    try {
        const response = await Promise.all([
            fetch(`${API_TMDB}/${firstPathName === "series" ? "tv" : "movie"}/${movieID}?${API_KEY}&language=es`),
            fetch(`${API_TMDB}/${firstPathName === "series" ? "tv" : "movie"}/${movieID}/credits?${API_KEY}&language=es`),
            fetch(`${API_TMDB}/${firstPathName === "series" ? "tv" : "movie"}/${movieID}/similar?${API_KEY}&language=es&page=1`),
            fetch(`${API_TMDB}/${firstPathName === "series" ? "tv" : "movie"}/${movieID}/videos?${API_KEY}&language=en&page=1`),
        ])
        const [details, cast, similar, trailers] = await Promise.all(response.map(result => result.json()))
        
        return { details, cast, similar, trailers }
    } catch (err) {
        console.log("Get MoviesOrSeriesDetails failed: ", err);
    }
}

export const getPopularGenres = async (page, genero, firstPathName) => {
    try {
        const response = await fetch(`${API_TMDB}/${firstPathName === "series" ? "tv" : "movie"}/popular?${API_KEY}&page=${page}&with_genres=${genero}`)
        const popularGenres = await response.json()

        return popularGenres
    } catch (err) {
        console.log("getPopularGenres failed", err)
    }
}

export const getSearchMoviesOrSeries = async (page = 1, query, firstPathName) => {

    try {
        const response = await fetch(`${API_TMDB}/search/${firstPathName === "series" ? "tv?" : "movie?"}${API_KEY}&page=${page}&query=${query}`)
        const searchMovies = await response.json()

        return searchMovies
    } catch (err) {
        console.log("getSearchMoviesOrSeries failed", err);
    }
}

export const getArtistMoviesOrSeries = async (artistID, page) => {
    try {
        const response = await fetch(`${API_TMDB}/person/${artistID}/combined_credits?${API_KEY}`)
        const artistMoviesOrSeries = await response.json()
        if (page !== undefined) {
            return artistMoviesOrSeries.cast.slice(parseInt(page) * 20 - 20, parseInt(page) * 20)
        }
        return artistMoviesOrSeries.cast.slice(0, 20)
    } catch (err) {
        console.log("getArtistMoviesOrSeries failed", err);
    }
}