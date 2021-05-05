import * as ACTION_TYPES from './action';

export const initialState = {
    vacancies: [],
    loading: false,
    removedVacancy: null,
    vacancy: {}
}

export function vacancies(state = initialState, action) {
    console.log('action in reducer', action)
    switch (action.type) {
        case ACTION_TYPES.GET_ALL_VACANCIES:
            return {
                ...state
            }
        case ACTION_TYPES.GET_ALL_VACANCIES_REQUEST:
            return {
                ...state,
                vacancies: action.vacancies
            }
        case ACTION_TYPES.GET_VACANCY:
            return {
                ...state
            }
        case ACTION_TYPES.GET_VACANCY_REQUEST:
            return {
                ...state,
                vacancy: action.vacancy
            }
        case ACTION_TYPES.ADD_VACANCY:
            return {
                ...state,
                vacancies: action.vacancies
            }
        case ACTION_TYPES.ADD_VACANCY_REQUEST:
            return {
                ...state,
            }
        case ACTION_TYPES.DELETE_VACANCY:
            return {
                ...state,
                removedVacancy: state.vacancies.find(p => p.id === action.id)
            }
        default:
            return state
    }
}
