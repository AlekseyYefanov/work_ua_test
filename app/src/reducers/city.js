import * as ACTION_TYPES from '../actions/city';

export const initialState = {
    city: [],
    loading: false,
}

export function City(state = initialState, action) {
    console.log('action in reducer', action)
    switch (action.type) {
        case ACTION_TYPES.GET_ALL_CITY:
            return {
                ...state
            }
        case ACTION_TYPES.GET_ALL_CITY_REQUEST:
            return {
                ...state,
                city: action.city.city
            }
        default:
            return state
    }
}
