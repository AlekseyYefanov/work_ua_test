import React from 'react';
import { connect } from 'react-redux';
import VacancyForm from './VacancyForm'

let CreateVacancy = () => {

    return (
        <div className='form-container'>
          <div className='container'>
            <h1 className='page-create-title'>Создать вакансию</h1>
            <VacancyForm />
          </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        
    })
}

const mapDispatchToProps = {
   
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateVacancy);
