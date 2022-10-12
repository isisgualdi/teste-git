import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const INITIAL_STATE = {
    data: [
        'Isis',
        'Arthur',
        'Marina'
    ],
}

/* [['isis', 'arthur'], 'gilberto'] => ['isis', 'arthur', 'gilberto'] spread */

function nomes(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_NAME':
            return {data: [...state.data, action.name] };
        case 'REMOVE_NAME':
            const listaSemNome = state.data.filter((item) => item.toLowerCase() != action.name.toLowerCase())
            return {data: listaSemNome}

        default:
            return state;
    }
}

const Reducers = combineReducers({
    nomes});

export const Store = createStore(Reducers, applyMiddleware(thunk));