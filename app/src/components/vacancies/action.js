export const GET_ALL_VACANCIES = "GET_ALL_VACANCIES"

export const GET_ALL_VACANCIES_REQUEST = "GET_ALL_VACANCIES_REQUEST"

export const ADD_VACANCY = "ADD_VACANCY"

export const ADD_VACANCY_REQUEST = "ADD_VACANCY_REQUEST"

export const UPDATE_VACANCY = "UPDATE_VACANCY"

export const UPDATE_VACANCY_REQUEST = "UPDATE_VACANCY_REQUEST"

export const GET_VACANCY = "GET_VACANCY"

export const GET_VACANCY_REQUEST = "GET_VACANCY_REQUEST"

export const DELETE_VACANCY = "DELETE_VACANCY"

export const DELETE_VACANCY_REQUEST = "DELETE_VACANCY_REQUEST"

export const SUCCESS = "SUCCESS"

export const FAILURE = "FAILURE"

export const getAllVacancies = () => {
  return {
      type: GET_ALL_VACANCIES,
  }
}

export const addVacancy = (data) => {
  return {
      type: ADD_VACANCY,
      data
  }
}

export const deleteVacancy = (id) => {
  return {
      type: DELETE_VACANCY,
      id
  }
}

export const updateVacancy = (data) => {
  return {
      type: UPDATE_VACANCY,
      data
  }
}

export const getVacancy = (id) => {
  return {
      type: GET_VACANCY,
      id
  }
}
