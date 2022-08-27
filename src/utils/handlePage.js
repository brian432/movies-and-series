export const handlePage = (pagina, page, genre, navigate, query, firstPathName, artistID, artistName) => {
    if (pagina === "+") {
        if (genre === undefined && !query) {
            page !== undefined ?
                navigate(`${firstPathName === "series" ? "/series" : firstPathName === "cast" ? `/cast/${artistID}/${artistName}` : ""}/page/${parseInt(page) + 1}`, {replace:true}) :
                navigate(`${firstPathName === "series" ? "/series" : firstPathName === "cast" ? `/cast/${artistID}/${artistName}` : ""}/page/${2}`, {replace:true});
        } else if (query) {
            page !== undefined ?
                navigate(`${firstPathName === "series" ? "/series" : ""}/page/${parseInt(page) + 1} /?search=${query}`, {replace:true}) :
                navigate(`${firstPathName === "series" ? "/series" : ""}/page/${2}/?search=${query}`, {replace:true})
        } else {
            page !== undefined ?
                navigate(`${firstPathName === "series" ? "/series" : ""}/genre/${genre}/page/${parseInt(page) + 1}`, {replace:true}) :
                navigate(`${firstPathName === "series" ? "/series" : ""}/genre/${genre}/page/${2}`, {replace:true});
        }
    } else {
        genre === undefined && !query ?
            navigate(`${firstPathName === "series" ? "/series" : firstPathName === "cast" ? `/cast/${artistID}/${artistName}` : ""}/page/${parseInt(page) - 1}`, {replace:true}) :
            query ?
                navigate(`${firstPathName === "series" ? "/series" : ""}/page/${parseInt(page) - 1}/?search=${query}`, {replace:true}) :
                navigate(`${firstPathName === "series" ? "/series" : ""}/genre/${genre}/page/${parseInt(page) - 1}`, {replace:true})

    }
}