export const handlePage = (pagina, page, genre, navigate, search) => {
    if (pagina === "+") {
        if (genre === undefined && search === null) {
            page !== undefined ?
                navigate(`/page/${parseInt(page) + 1}`) :
                navigate(`/page/${2}`);
        } else if (search !== null) {
            page !== undefined ?
                navigate(`/page/${parseInt(page) + 1}/?search=${search}`) :
                navigate(`/page/${2}/?search=${search}`)
        } else {
            page !== undefined ?
                navigate(`/genre/${genre}/page/${parseInt(page) + 1}`) :
                navigate(`/genre/${genre}/page/${2}`);
        }
    } else {
        genre === undefined && search === null ?
            navigate(`/page/${parseInt(page) - 1}`) :
            search !== null ?
                navigate(`/page/${parseInt(page) - 1}/?search=${search}`) :
                navigate(`/genre/${genre}/page/${parseInt(page) - 1}`)

    }
}