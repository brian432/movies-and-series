const API_KEY = "api_key=04c35731a5ee918f014970082a0088b1"
const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?"
const DETAILS_MOVIES = "https://api.themoviedb.org/3/movie/"

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
        const response = await fetch(`${DETAILS_MOVIES}${movieID}?${API_KEY}`)
        const data = await response.json()
        console.log(data);
    } catch (err) {
        console.log("Get MoviesDetails failed: ", err);
    }
}