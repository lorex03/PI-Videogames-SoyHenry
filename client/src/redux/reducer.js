import {
    DISPLAY_STATE, 
    GET_GAMES,
    GET_GENRES,
    SET_CURRENT_PAGE,
    GET_BY_NAME, FILTER_GENRES, FILTER_RATING, FILTER_ALPHABETIC,
    GET_GAMES_API,
    GET_GAMES_CREATE,
    RESET_FILTERS

} from "./actions-type"


const initialState = {
    games: [],
   
    gamesApi: [],
   
   gamesCreate: [],
   
    genres : [],



   gamesByName: {
        state: false,
        data: []
    },

    filterGenres: {
        state: false,
        data: []
    },

    filterRating: {
        state: false,
        data: []
    },

    filterAlphabetic: {
        state: false,
        data: []
    },

        paginate: {
            currentPage: 1,
            itemsPage: 8,
    
        },
    
        displayState: {
            all: true,
            api: false,
            create: false,
        }
    

}

const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_GAMES:
            return {
                ...state, 
                games: payload
            } 
   
            case GET_BY_NAME:
                return {
                    ...state,
                    gamesByName: {
                        state: true,
                        data: payload
                    }
                }
        


            case GET_GENRES:
                return {
                    ...state,
                    genres: payload
                }
    


            case SET_CURRENT_PAGE: 
            return {
                ...state,
                paginate: {
                    currentPage: payload,
                    itemsPage: 15
                }
            }
    
         
            case FILTER_GENRES: 
            let resultGenres;
         
         
            if(state.displayState.all) resultGenres = state.games.filter( game => game.genres.includes(payload));
         
         
            if(state.displayState.api) resultGenres = state.gamesApi.filter( game => game.genres.includes(payload));
         
         
         
            if(state.displayState.create)resultGenres = state.gamesCreate.filter( game => game.genres.includes(payload));
            
            
            return {
                ...state,
                gamesByName: {
                    state: false,
                    data: []
                },
         
         
                filterGenres: {
                    state: true,
                    data: resultGenres
         
                },
         
                filterRating: {
                    state: false,
                    data: []
                },
         
                filterAlphabetic: {
                    state: false,
                    data: []
         
                },
         
            }
        
         
         
            case FILTER_RATING: 
            let resultRating;
            // funcion que me ordena la data y le paso si es minimo o máximo
            let order = (data,typeOrder) => {
                return data.sort( (a,b) => {
                    if(typeOrder === "minimun") {
                        return Number(a.weight.split("-")[1]) - Number(b.weight.split(" - ")[1]) 
                    } else {
                        return Number(b.weight.split("-")[1]) - Number(a.weight.split(" - ")[1])
                    }
                })
            }

            if(state.displayState.all) {
                //console.log("tipo:", payload);
                resultRating = order(state.games,payload);
            } 
            if(state.displayState.api) {
                resultRating = order(state.gamesApi,payload);
            } 
            if(state.displayState.create) {
                resultRating = order(state.gamesCreate,payload);
            } 


            return {
                ...state,
                dogsByName: {
                    state: false,
                    data: []
                },
                filterGenres: {
                    state: false,
                    data: []
                },
                filterRating: {
                    state: true,
                    data: resultRating
                },
                filterAlphabetic: {
                    state: false,
                    data: []
                },
            }
        case FILTER_ALPHABETIC:
            let resultAlphabetic;
            let orderToAlphabetic = (data,typeOrder) => {
                return data.sort( (a,b) => {
                    if(typeOrder === "descendent") {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    } else {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    }
                    return 0;
                })
            }
            if(state.displayState.all) {
                //console.log("tipo:", payload);
                resultAlphabetic = orderToAlphabetic(state.games,payload);
            } 
            if(state.displayState.api) {
                resultAlphabetic = orderToAlphabetic(state.gamesApi,payload);
            } 
            if(state.displayState.create) {
                resultAlphabetic = orderToAlphabetic(state.gamesCreate,payload);
            } 
         
            return {
                ...state,
                gamesByName: {
                    state: false,
                    data: []
                },
                filterGenres: {
                    state: false,
                    data: []
                },
                filterRating: {
                    state: false,
                    data: []
                },
                filterAlphabetic: {
                    state: true,
                    data: resultAlphabetic
                },
            }
        case DISPLAY_STATE:
            return {
                ...state,
                displayState: payload
            }
        case GET_GAMES_API:
            return {
                ...state,
                gamesApi: state.games.filter( game => typeof game.id === "number")
            }
        case GET_GAMES_CREATE:
            return {
                ...state,
                gamesCreate: state.games.filter( game => typeof game.id === "string")
            }
       
       
       
       
            case RESET_FILTERS:
            return {
                ...state,
                gamesByName: {
                    state: false,
                    data: []
                },
       
       
       
                filterGenres: {
                    state: false,
                    data: []
                },
       
       
       
                filterRating: {
                    state: false,
                    data: []
                },
       
   
       
                filterAlphabetic: {
                    state: false,
                    data: []
                },
            }
         
         
         
         
         
         
         
            default:
                return {...state}
            }
        }
            export default reducer;
