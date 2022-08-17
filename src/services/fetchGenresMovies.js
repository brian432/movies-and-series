const API_KEY = "api_key=04c35731a5ee918f014970082a0088b1"
const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?"

export const getGenresMovies =async()=>{
    try{
        const response = await fetch(`${GENRE_API}${API_KEY}&language=es`)
        const data = await response.json()
        console.log(data);
        return data
    }catch(err){
        console.log("getGenresMovies failed", err);
    }
}