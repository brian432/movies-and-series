export const handlePage = (pagina, page, genre, navigate, search, series) => {
    if (pagina === "+") {
        if (genre === undefined && search === null) {
            page !== undefined ?
                navigate(`${series === "series" ? "/series" : ""}/page/${parseInt(page) + 1}`) :
                navigate(`${series === "series" ? "/series" : ""}/page/${2}`);
        } else if (search !== null) {
            page !== undefined ?
                navigate(`${series === "series" ? "/series" : ""}/page/${parseInt(page) + 1}/?search=${search}`) :
                navigate(`${series === "series" ? "/series" : ""}/page/${2}/?search=${search}`)
        } else {
            page !== undefined ?
                navigate(`${series === "series" ? "/series" : ""}/genre/${genre}/page/${parseInt(page) + 1}`) :
                navigate(`${series === "series" ? "/series" : ""}/genre/${genre}/page/${2}`);
        }
    } else {
        genre === undefined && search === null ?
            navigate(`${series === "series" ? "/series" : ""}/page/${parseInt(page) - 1}`) :
            search !== null ?
                navigate(`${series === "series" ? "/series" : ""}/page/${parseInt(page) - 1}/?search=${search}`) :
                navigate(`${series === "series" ? "/series" : ""}/genre/${genre}/page/${parseInt(page) - 1}`)

    }
}