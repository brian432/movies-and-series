import { useNavigate, useParams } from 'react-router-dom'
import { handlePage } from '../../utils/handlePage'


export const Buttons = ({lengthMovies}) => {
    let query = new URLSearchParams(window.location.search);
    let search = query.get('search');

    const { page, genre } = useParams()
    const navigate = useNavigate()

    const handlePageButton = (e) => {
        let pagina = e.target.name
        handlePage(pagina, page, genre, navigate, search)
    }
    return (
        <div className='container-buttons'>
            {
                page === undefined || parseInt(page) < 2 ?
                    <button name='+' onClick={handlePageButton} >Siguiente</button> :
                    lengthMovies ?
                        <>
                            <button name='-' onClick={handlePageButton} >Anterior</button>
                            <button name='+' onClick={handlePageButton} >Siguiente</button>
                        </> :
                        <button name='-' onClick={handlePageButton} >Anterior</button>
            }
        </div>
    )
}