import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";
import { getAllVacancies, deleteVacancy } from './action';
import NoData from '../NoData/NoData'
import VacancyItem from './vacancyItem/VacancyItem'
import Button from '../buttons/Button'

import './style.scss'

let Vacancies = ({vacanciesList, getAllVacancies, deleteVacancy, history}) => {
    
    useEffect(() => {
        getAllVacancies()
      }, []);

    const handleCreateVacancy = () => {
        history.push('/create-vecancy');
    }
    const handleDelete = (id) => () => {
        console.log('handleDelete--> ', id);
        deleteVacancy(id)
        
    }
    const handleEdit = (id) => () => {
        history.push(`/update-vecancy/${id}`);
    }
    return (
        <div className='vacancies-wrapp container'>
           <div className='title-box'>
                <h1 className='page-title'>Вакансии и отклики <i className="fas fa-info"></i></h1>
                <Button text='Создать вакансию' handleClick={handleCreateVacancy} customClass='btn-addVacancy' />
           </div>
            <div className='content-box'>
                { !!vacanciesList.length ? vacanciesList.map((item) => {
                        return <VacancyItem key={uuidv4()} {...item} 
                                            deleteVacancy={handleDelete(item.id)} 
                                            editVacancy={handleEdit(item.id)} 
                                />
                    })
                    : <NoData>Нет вакансий.</NoData> 
                }
            </div>
            <Button text='Создать вакансию' handleClick={handleCreateVacancy} customClass='btn-addVacancy' />
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        vacanciesList: state.vacancies.vacancies,
    })
}

const mapDispatchToProps = {
    getAllVacancies,
    deleteVacancy
};

Vacancies.propTypes = {
    getAllVacancies: PropTypes.func,
    deleteVacancy: PropTypes.func,
    vacanciesList: PropTypes.array,
  }
  
  Vacancies.defaultProps = {
    vacanciesList: [],
  }

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Vacancies);
