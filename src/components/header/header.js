import { useState, useEffect, useCallback, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import { getGenresMoviesOrSeries } from "../../services/fetchGenresMoviesOrSeries";
import { scroll } from '../../utils/scroll'

import Search from '../search/search'

export const Header = () => {
    const [clases, setClases] = useState("");
    const [generos, setGeneros] = useState([]);
    const [menu, setMenu] = useState("");
    const navigate = useNavigate();

    const { series } = useContext(GlobalContext)

    useEffect(() => {
        getGenresMoviesOrSeries(series).then(generos => setGeneros(generos.genres))
    }, [series]);

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
        navigate(`${series === "series" ? "/series" : ""}/?search=${search}`)
    }, [navigate, series])

    return (
        <header>
            <Link to={`/${series === "series" ? "series" : ""}`} className="logo" >{series === "series" ? "Series" : "Peliculas"}</Link>
            <Link to={`/${series === "series" ? "" : "series"}`} className="switch" >{series === "series" ? "Peliculas" : "Series"}</Link>
            <div className={`${menu !== '' ? 'nav-active container-generos' : 'container-generos'}`}>
                <div id="generos">
                    <p onClick={() => clases === "" ? setClases("click") : setClases("")} className={`${clases === "click" ? "rotacion" : ""} hover`}>Generos</p>
                    <ul className={`${clases === "" ? "" : "genero-active"} nav-links`}>
                        {generos.map((genero, indice) =>
                            <li key={indice}>
                                <Link to={`${series === "series" ? "/series" : ""}/genre/${genero.id}`} className="links hover" key={indice} onClick={handleClases} name={genero.name} id={genero.id}>{genero.name}</Link>
                            </li>
                        )}
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