import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getVacancy, getAllVacancies } from "../action";
import VacancyForm from './VacancyForm'

let EditVacancy = ({match, getVacancy, getAllVacancies, vacancy, vacancies }) => {

  let [currentVacancy, setCurrentVacancy] = useState({})
  let [isCurrentVacancy, setIsCurrentVacancy] = useState(false)
  const id = match.params.id;

  useEffect(() => {
   // getVacancy(id)
   getAllVacancies()
  }, []);

  let findVacancy = vacancies.filter((item) => item.id === id);
  if(findVacancy.length && !isCurrentVacancy) {
    setCurrentVacancy(findVacancy[0]);
    setIsCurrentVacancy(true);
  }

  return (
      <div className='container'>
        <div className='form-container'>
          <VacancyForm title='Обновить вакансию' data={currentVacancy} />
        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return ({
      vacancy: state.vacancies.vacancy,
      vacancies: state.vacancies.vacancies,
  })
}

const mapDispatchToProps = {
  getVacancy,
  getAllVacancies
};

EditVacancy.propTypes = {
  getVacancy: PropTypes.func,
  getAllVacancies: PropTypes.func,
  vacancies: PropTypes.array,
  vacancy: PropTypes.object,
}

EditVacancy.defaultProps = {
  vacancies: [],
  vacancy: {},
}

export default connect(mapStateToProps,mapDispatchToProps)(EditVacancy);
