import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState';
import { handlePage } from '../../utils/handlePage'

const Buttons = ({ lengthMovies }) => {
    let query = new URLSearchParams(window.location.search);
    let search = query.get('search');

    const { firstPathName } = useContext(GlobalContext)
    const { page, genre, artistID, artistName } = useParams()
    const navigate = useNavigate()

    const handlePageButton = (e) => {
        let pagina = e.target.name
        handlePage(pagina, page, genre, navigate, search, firstPathName, artistID, artistName)
    }
    return (
        <div className='container-buttons'>
            {
                page === undefined && lengthMovies < 20 ?
                    "" :
                    (page !== undefined && parseInt(page)) < 2 && lengthMovies ?
                        <button name='+' onClick={handlePageButton} >Siguiente</button> :
                        page !== undefined && lengthMovies < 20 ?
                            <button name='-' onClick={handlePageButton} >Anterior</button> :
                            <>
                                <button name='-' onClick={handlePageButton} >Anterior</button>
                                <button name='+' onClick={handlePageButton} >Siguiente</button>
                            </>
            }
        </div >
    )
}
export default React.memo(Buttons)