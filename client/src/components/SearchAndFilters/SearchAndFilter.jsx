import { useSelector, useDispatch } from "react-redux";
import style from "../SearchAndFilters/SearchAndFilter.module.css"
import { filterGenres, filterRating, displayState, getGamesApi, getGamesCreate, resetFilterAll, filterAlphabetic, setCurrentPage, getGamesByName } from "../../redux/actions";

const SearchAndFilter = () => {

    //! Estado global para validar ALL, API, CREATE

    const dispatch = useDispatch();


    //const platforms = useSelector( state => state.platforms );
    const genres = useSelector( state => state.genres );
    const display = useSelector( state => state.displayState );


    const handleClick = (e) => {

        //Este if me permite identificar si estoy usando filtros
        if(e.currentTarget.name === "genres") {
            const genresSearch = e.target.value;
          
            dispatch(filterGenres(genresSearch));
            dispatch(setCurrentPage(1));
        }








        if(e.currentTarget.name === "rating") {
            const ratingSearch = e.target.value;
            
            dispatch(filterRating(ratingSearch));
            dispatch(setCurrentPage(1));
        }
        if(e.currentTarget.name === "alphabetic") {
            const alphabeticSearch = e.target.value;
          
            dispatch(filterAlphabetic(alphabeticSearch))
            dispatch(setCurrentPage(1));
        }
    }


    const handleChecked = (e) => {
        
        if(e.target.value === "all") {
            //Este dispatch es para actualizar el estado de display y poder renderizarlos en home
            dispatch(displayState({
                all: true,
                api: false,
                create: false,
            }))
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll());
            dispatch(setCurrentPage(1));
        }

        if(e.target.value === "api") {
            //Este dispatch es para actualizar el estado de display y poder renderizarlos en home
            dispatch(displayState({
                all: false,
                api: true,
                create: false,
            }))
            // Este dispatch me permite obtener los perros según requiera el usuario
            dispatch(getGamesApi());
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll());
            dispatch(setCurrentPage(1));
        }
        if(e.target.value === "create") {
            //Este dispatch es para actualizar el estado de display y poder renderizarlos en home
            dispatch(displayState({
                all: false,
                api: false,
                create: true,
            }))
            // Este dispatch me permite obtener los perros según requiera el usuario
            dispatch(getGamesCreate());
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll());
            dispatch(setCurrentPage(1));
        }
    }

    const handleEnter = (e) => {
        if(e.key === "Enter") {
            let names = e.target.value;
             //Este dispatch es para actualizar el estado de display y poder renderizarlos en home
            /*  dispatch(displayState({
                all: false,
                api: false,
                create: false,
            })) */
            // Este dispatch me permite resetear los filtros por si cambian de opción
            dispatch(resetFilterAll());
            dispatch(setCurrentPage(1));
            dispatch(getGamesByName(names));
            e.target.value = "";
         }
    }


return (
<div className={style.body}>
<p> Genres:  </p>
<select className={style.alpha} onChange={handleClick} name="genres">
{
                            Array.isArray(genres) && genres?.map( (genres, index) => {
                                return <option value={genres.name} key={index}>{genres.name}</option>
                            }) 
                        }
                    </select>
    
                

                    <p> Rating: </p>
                    <select  className={style.alpha}onChange={handleClick} name="rating">
                
                    <option value="minimun">Minimun</option>
                
                    <option value="maximum">Maximum</option>
                
                    </select>


      

<p >Alphabetic:</p>
                
                
                <select className={style.alpha} onChange={handleClick} name="alphabetic">
            
                <option  value="descendent">Descendent</option>
                <option value="ascendent">Ascendent</option>
            
            
                </select>

<div className={style.nam}>

<input type="search" onKeyUp={handleEnter} className={style.search} placeholder="Search by name"/>

</div>



<p>Seleccione:</p>

<div className={style.search}>
    <label>ALL</label>
    <input type="checkbox" name="" value="all" checked={display.all} onChange={handleChecked}/>
</div>
<div>
    <label>API</label>
    <input type="checkbox" name="" value="api" checked={display.api} onChange={handleChecked}/>
</div>
<div>
    <label>CREATE</label>
    <input type="checkbox" name="" value="create" checked={display.create} onChange={handleChecked}/>
</div>

</div>

) }
export default SearchAndFilter;
