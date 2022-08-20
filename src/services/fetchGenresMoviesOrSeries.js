const API_KEY = "api_key=04c35731a5ee918f014970082a0088b1"
const GENRE_API = "https://api.themoviedb.org/3/genre/"

export const getGenresMoviesOrSeries = async (series) => {
    try {
        const response = await fetch(`${GENRE_API}${series === "series" ? "tv" : "movie"}/list?${API_KEY}&language=es`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log("getGenresMoviesOrSeries failed", err);
    }
}