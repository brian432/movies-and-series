import { useState, useEffect, useCallback, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
import { getGenresMoviesOrSeries } from "../../services/fetchGenresMoviesOrSeries";
import { scroll } from '../../utils/scroll'

import Search from '../search/search'
import { Links } from '../generosLink/generoLink'
import { FavsContext } from "../../context/FavsContext";

export const Header = () => {
    const [clases, setClases] = useState("");
    const [generos, setGeneros] = useState([]);
    const [menu, setMenu] = useState("");
    const navigate = useNavigate();

    const { firstPathName } = useContext(GlobalContext)
    const { favs } = useContext(FavsContext)

    useEffect(() => {
        getGenresMoviesOrSeries(firstPathName).then(generos => setGeneros(generos.genres))
    }, [firstPathName]);

    const handleClases = useCallback(() => {
        setClases("");
        setMenu("");
        scroll()
    }, [])

    const handleMenu = useCallback(() => {
        menu === "" ? setMenu("encendido") : setMenu("")
    }, [menu])


    const handleSubmit = useCallback((search) => {
        setMenu("")
        navigate(`${firstPathName === "series" ? "/series" : ""}/?search=${search}`)
    }, [navigate, firstPathName])

    return (
        <header>
            <Link to={`/${firstPathName === "series" ? "series" : ""}`} className="logo" >{firstPathName === "series" ? "Series" : "Peliculas"}</Link>
            <Link to={`/${firstPathName === "series" ? "" : "series"}`} className="movies-series-link"  >{firstPathName === "series" ? "Películas" : "Series"}</Link>
            {
                favs?.length > 0 &&
                <Link to="/favs" className="switch">Favoritos</Link>
            }
            <div className={`${menu !== '' ? 'nav-active container-generos' : 'container-generos'}`}>
                <div id="generos">
                    <p onClick={() => clases === "" ? setClases("click") : setClases("")} className={`${clases === "click" ? "rotacion" : ""} hover`}>Generos</p>
                    <ul className={`${clases === "" ? "" : "genero-active"} nav-links`}>
                        {
                            generos.map(genero =>
                                <Links
                                    genero={genero}
                                    handleClases={handleClases}
                                    key={genero.name}
                                />
                            )
                        }
                    </ul>
                </div>
                <Search onSubmit={handleSubmit} />
            </div>
            <div id="hamburguesa" onClick={handleMenu}>
                <div className={menu === "" ? "" : "linea1"}></div>
                <div className={menu === "" ? "" : "linea2"}></div>
                <div className={menu === "" ? "" : "linea3"}></div>
            </div>
        </header>
    )
}