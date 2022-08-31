const {
    REACT_APP_GENRE_API: GENRE_API,
    REACT_APP_API_KEY: API_KEY
} = process.env

export const getGenresMoviesOrSeries = async (firstPathName) => {
    try {
        const response = await fetch(`${GENRE_API}${firstPathName === "series" ? "tv" : "movie"}/list?${API_KEY}&language=es`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log("getGenresMoviesOrSeries failed", err);
    }
}