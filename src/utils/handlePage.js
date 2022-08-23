export const handlePage = (pagina, page, genre, navigate, query, firstPathName, artistID, artistName) => {
    if (pagina === "+") {
        if (genre === undefined && !query) {
            page !== undefined ?
                navigate(`${firstPathName === "series" ? "/series" : firstPathName === "cast" ? `/cast/${artistID}/${artistName}` : ""}/page/${parseInt(page) + 1} `) :
                navigate(`${firstPathName === "series" ? "/series" : firstPathName === "cast" ? `/cast/${artistID}/${artistName}` : ""}/page/${2} `);
        } else if (query) {
            page !== undefined ?
                navigate(`${firstPathName === "series" ? "/series" : ""}/page/${parseInt(page) + 1} /?search=${query}`) :
                navigate(`${firstPathName === "series" ? "/series" : ""}/page/${2}/?search=${query}`)
        } else {
            page !== undefined ?
                navigate(`${firstPathName === "series" ? "/series" : ""}/genre/${genre}/page/${parseInt(page) + 1}`) :
                navigate(`${firstPathName === "series" ? "/series" : ""}/genre/${genre}/page/${2}`);
        }
    } else {
        genre === undefined && !query ?
            navigate(`${firstPathName === "series" ? "/series" : firstPathName === "cast" ? `/cast/${artistID}/${artistName}` : ""}/page/${parseInt(page) - 1}`) :
            query ?
                navigate(`${firstPathName === "series" ? "/series" : ""}/page/${parseInt(page) - 1}/?search=${query}`) :
                navigate(`${firstPathName === "series" ? "/series" : ""}/genre/${genre}/page/${parseInt(page) - 1}`)

    }
}