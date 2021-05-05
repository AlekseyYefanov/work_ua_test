import React from 'react';
import PropTypes from 'prop-types'
import Dropdown from '../../dropdown/Dropdown'
import './style.scss'

let VacancyItem = ({name, price, priceComment, deleteVacancy, editVacancy}) => {
    return (
        <div className='vacancy-item'>
            <h3>{name}</h3>
            <div className='price'>
                {price && typeof price === 'object' 
                ? `${price && price.from} - ${price && price.to} грн`
                : price
                }
                {priceComment && <span className='price-info'><i className="fas fa-circle"></i> {priceComment}</span>}
              </div>
            <div className='info'>{}</div>
            <Dropdown handleEdit={editVacancy} handleDelete={deleteVacancy} />
        </div>
    );
}

VacancyItem.propTypes = {
    deleteVacancy: PropTypes.func,
    editVacancy: PropTypes.func,
    name: PropTypes.string,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    priceComment: PropTypes.string,
  }
  
  VacancyItem.defaultProps = {
    name: '',
    price: '',
    priceComment: ''
  }

export default VacancyItem;
