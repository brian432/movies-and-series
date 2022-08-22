export const handlePage = (pagina, page, genre, navigate, search, firstPathName, artistID, artistName) => {
    if (pagina === "+") {
        if (genre === undefined && search === null) {
            page !== undefined ?
                navigate(`${firstPathName === "series" ? "/series" : firstPathName === "cast" ? `/cast/${artistID}/${artistName}` : ""}/page/${parseInt(page) + 1} `) :
                navigate(`${firstPathName === "series" ? "/series" : firstPathName === "cast" ? `/cast/${artistID}/${artistName}` : ""}/page/${2} `);
        } else if (search !== null) {
            page !== undefined ?
                navigate(`${firstPathName === "series" ? "/series" : ""}/page/${parseInt(page) + 1} /?search=${search}`) :
                navigate(`${firstPathName === "series" ? "/series" : ""}/page/${2}/?search=${search}`)
        } else {
            page !== undefined ?
                navigate(`${firstPathName === "series" ? "/series" : ""}/genre/${genre}/page/${parseInt(page) + 1}`) :
                navigate(`${firstPathName === "series" ? "/series" : ""}/genre/${genre}/page/${2}`);
        }
    } else {
        genre === undefined && search === null ?
            navigate(`${firstPathName === "series" ? "/series" : firstPathName === "cast" ? `/cast/${artistID}/${artistName}` : ""}/page/${parseInt(page) - 1}`) :
            search !== null ?
                navigate(`${firstPathName === "series" ? "/series" : ""}/page/${parseInt(page) - 1}/?search=${search}`) :
                navigate(`${firstPathName === "series" ? "/series" : ""}/genre/${genre}/page/${parseInt(page) - 1}`)

    }
}