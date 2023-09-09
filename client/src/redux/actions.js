import axios from 'axios';

import  {
    DISPLAY_STATE, 

    GET_GAMES,
    
    GET_GAMES_BY_ID,
    
    GET_GENRES, GET_PLATFORMS,
    
    SET_CURRENT_PAGE,
    
    GET_BY_NAME, 
    
    FILTER_GENRES,
    
    FILTER_RATING,
      FILTER_ALPHABETIC,
    GET_GAMES_API,
    GET_GAMES_CREATE,
    RESET_FILTERS,
    REST_BY_ID,
    CREATE_GAME,
    FILTER_PLATFORMS

} from "./actions-type"

export const displayState = (state) => {
    return { type: DISPLAY_STATE, payload: state }
}

export const getGames = () => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get('http://localhost:3001/videogames');
   
        dispatch({ type: GET_GAMES,
            payload: data });
      
            } catch (error) {
        alert("error: " + error.response.data.error);
      }
    };
};

export const getGamesByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            dispatch({type: GET_BY_NAME, payload: data })
        } catch (error) {
            alert("error: " + error.response.data.error);
        }
    }
}


export const getGamesById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/videogames/${id}`);
            dispatch({type: GET_GAMES_BY_ID, payload: data })
        } catch (error) {
            alert("error: " + error.response.data.error);
        }
    }
}

export const resetById = () => {
    return { type: REST_BY_ID }
}


export const getGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/genres");
            dispatch({type: GET_GENRES, payload: data })
        } catch (error) {
            alert("error: " + error.response.data.error);
        }
    }
}

export const getPlatforms = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/platforms");
            dispatch({type: GET_PLATFORMS, payload: data })
        } catch (error) {
            alert("error: " + error.response.data.error);
        }
    }
}


//Actualizar el paginado
export const setCurrentPage = (number) => {
    return { type: SET_CURRENT_PAGE, payload: number }
}

//Filtar por (GENEROS) (genres)

export const filterGenres = (genre) => {
    return { type: FILTER_GENRES, payload: genre}
}
export const filterPlatforms = (genre) => {
    return { type: FILTER_PLATFORMS, payload: genre}
}



// filtrar por weight (rating)
export const filterRating = (typerating) => {
    return { type: FILTER_RATING, payload: typerating}
}

export const filterAlphabetic = (typeAlphabetic) => {
    return { type: FILTER_ALPHABETIC, payload: typeAlphabetic}
}
//!resetFilterAll (todos)

export const resetFilterAll = () => {
    return { type: RESET_FILTERS }
}
export const getGamesApi = () => {
    return { type:GET_GAMES_API }
}

export const getGamesCreate = () => {
    return { type: GET_GAMES_CREATE }
}


export const createGame = (game) => {
    return async (dispatch) => {
        try {
            const url = "http://localhost:3001/videogames";
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const {data} = await axios.post(url,game,config);
            dispatch({type: CREATE_GAME, payload: data})
        } catch (error) {
            //console.log(error);
            alert("error: " + error.response.data.error);
        }
    }
}