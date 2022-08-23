import React, { useContext } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState';
import { handlePage } from '../../utils/handlePage'

const Buttons = ({ lengthMovies }) => {
    const { search } = useLocation()
    const query = search?.slice(8)

    const { firstPathName } = useContext(GlobalContext)
    const { page, genre, artistID, artistName } = useParams()
    const navigate = useNavigate()

    const handlePageButton = (e) => {
        let pagina = e.target.name
        handlePage(pagina, page, genre, navigate, query, firstPathName, artistID, artistName)
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