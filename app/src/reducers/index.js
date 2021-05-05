import { combineReducers } from 'redux';
import { vacancies } from "../components/vacancies/reducer";
import { City } from "./city";

export default combineReducers({
  vacancies,
  city: City
});
