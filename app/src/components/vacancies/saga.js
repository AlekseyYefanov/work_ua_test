import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import { getAllVacancies } from './action'


// get-vacancies saga function for api call
function* getAllVacanties() {
    const vacancies = yield fetch('http://localhost:3001/vacancies')
        .then(response => response.json())
        .catch(function (error) {
            console.log('Request failed', error);
        });

    yield put({ type: "GET_ALL_VACANCIES_REQUEST", vacancies })
}

export function* callVacantiesAPI() {
    yield takeLatest('GET_ALL_VACANCIES', getAllVacanties)
}

// add-vacancy saga function for api call
export function* addVacancy(data) {
    const addedVacancy = yield fetch('http://localhost:3001/vacancy', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        return response.json();
    }).then((response) => {
        return response.data;
    }).catch(function (error) {
        console.log('Request failed', error);
    });

    yield put({ type: "ADD_VACANCY_REQUEST", addedVacancy });
}

export function* addVacancyApi() {
    return yield takeLatest('ADD_VACANCY', addVacancy);
}

// delete-vacancy saga function for api call
export function* deleteVacancy({id}) {
    const deletedVacancy = yield fetch(`http://localhost:3001/vacancy/${id}`, {
        method: 'DELETE',
    }).then((response) => {
        return response.json();
    }).then((response) => {
        return response.data;
    }).catch(function (error) {
        console.log('Request failed', error);
    });

    yield put({ type: "DELETE_VACANCY_REQUEST", deletedVacancy });
}

export function* deleteVacancyApi() {
    return yield takeLatest('DELETE_VACANCY', deleteVacancy);
}

// update-vacancy saga function for api call
export function* updateVacancy({data}) {
    const updatedVacancy = yield fetch(`http://localhost:3001/vacancy/${data.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        return response.json();
    }).then((response) => {
        return response.data;
    }).catch(function (error) {
        console.log('Request failed', error);
    });

    yield put({ type: "UPDATE_VACANCY_REQUEST", updatedVacancy });
}

export function* updateVacancyApi() {
    return yield takeLatest('UPDATE_VACANCY', updateVacancy);
}


// get-vacancy saga function for api call
export function* getVacancy(data) {
    const getedVacancy = yield fetch(`http://localhost:3001/vacancy/${data.id}`, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    }).then((response) => {
        return response.data;
    }).catch(function (error) {
        console.log('Request failed', error);
    });

    yield put({ type: "GET_VACANCY_REQUEST", getedVacancy });
}

export function* getVacancyApi() {
    return yield takeLatest('GET_VACANCY', getVacancy);
}

export function* refreshVacanciesSaga() {
    yield put(getAllVacancies());
}

export function* watchDeleteVacancy() {
    yield takeLatest('DELETE_VACANCY', refreshVacanciesSaga);
}
