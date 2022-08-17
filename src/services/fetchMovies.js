const API_KEY = "api_key=04c35731a5ee918f014970082a0088b1"
const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?"
const WITH_GENRES_API = "https://api.themoviedb.org/3/movie/popular?"
const DETAILS_MOVIES = "https://api.themoviedb.org/3/movie/"
const SEARCH = "https://api.themoviedb.org/3/search/movie?"

export const getMovies = async (page = "1") => {
    try {
        const response = await fetch(`${POPULAR_MOVIES}${API_KEY}&language=en-US&page=${page}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log("Get Movies failed: ", err);
    }
}

export const getMoviesDetails = async (movieID) => {
    try {
        const response = await Promise.all([
            fetch(`${DETAILS_MOVIES}${movieID}?${API_KEY}&language=es`),
            fetch(`${DETAILS_MOVIES}${movieID}/credits?${API_KEY}&language=es`),
            fetch(`${DETAILS_MOVIES}${movieID}/similar?${API_KEY}&language=es&page=1`),
            fetch(`${DETAILS_MOVIES}${movieID}/videos?${API_KEY}&language=en&page=1`),
        ])
        const [details, cast, similar, trailers] = await Promise.all(response.map(result => result.json()))
        return { details, cast, similar, trailers }
    } catch (err) {
        console.log("Get MoviesDetails failed: ", err);
    }
}

export const getPopularGenres = async (page, genero) => {
    console.log(page);
    try {
        const response = await fetch(`${WITH_GENRES_API}${API_KEY}&page=${page}&with_genres=${genero}`)
        const popularGenres = await response.json()
        return popularGenres
    } catch (err) {
        console.log("getPopularGenres failed", err)
    }
}

export const getSearchMovies = async (page = 1, search) => {
    console.log(search, page);
    try {
        const response = await fetch(`${SEARCH}${API_KEY}&page=${page}&query=${search}`)
        const searchMovies = await response.json()

        return searchMovies
    } catch (err) {
        console.log("getSearchMovies failed", err);
    }
}