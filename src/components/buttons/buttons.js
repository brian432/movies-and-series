import { Link, useParams} from 'react-router-dom'

import './buttons.css'

export const Buttons = () => {
    const { page } = useParams()
    return (
        <div className='container-buttons'>
            {
                page === undefined || parseInt(page) < 2 ?
                    <Link id='+' to={`/page/2`} >Siguiente</Link> :
                    <>
                        <Link id='-' to={`/page/${parseInt(page) - 1}`} >Anterior</Link>
                        <Link id='+' to={`/page/${parseInt(page) + 1}`} >Siguiente</Link>
                    </>
            }
        </div>
    )
}