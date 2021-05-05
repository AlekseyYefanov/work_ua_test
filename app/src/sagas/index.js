import { all, fork } from 'redux-saga/effects';
import { 
    callVacantiesAPI, 
    addVacancyApi, 
    deleteVacancyApi, 
    updateVacancyApi, 
    getVacancyApi, 
    watchDeleteVacancy 
} from '../components/vacancies/saga';

import { callCityAPI } from './city'

export default function* rootSaga() {
    yield fork(watchDeleteVacancy);
    yield all([
        callVacantiesAPI(),
        addVacancyApi(),
        deleteVacancyApi(),
        updateVacancyApi(),
        getVacancyApi(),      
        callCityAPI(),  
    ]);
}

