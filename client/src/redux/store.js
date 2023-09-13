import { createStore, applyMiddleware, compose } from "redux";
//La función applyMiddleware se utiliza para aplicar middleware a las acciones que se envían al store.
import thunk from 'redux-thunk'; //y que me permita trabajar con las request asincronas 

import reducer from './reducer';

const composeEnhacer = window.__REDUX_DEVTOLLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunk))
); // es necesario hacer un compose , para que el middleware pueda ser aplicado de forma correcta

export default store;

