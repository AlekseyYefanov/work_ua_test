import { put, takeLatest } from 'redux-saga/effects'

// get-city saga function for api call
function* getAllCity() {
  console.log('getAllCity');
  const city = yield fetch('http://localhost:3001/cities')
      .then(response => response.json())
      .catch(function (error) {
          console.log('Request failed', error);
      });

  yield put({ type: "GET_ALL_CITY_REQUEST", city })
}

export function* callCityAPI() {
  console.log('callCityAPI');
  yield takeLatest('GET_ALL_CITY', getAllCity)
}