import React, { useState } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router";
import { addVacancy, updateVacancy } from '../action';
import Button from '../../buttons/Button'
import { validate } from './validation'
import './style.scss'

let VacancyForm = (props) => {

    let [formData, setformData] = useState({
      name: '',
      price: '',
      errors: {}
    } );

    let [salaryChoise, setSalary] = useState('single');

    if(props.data && Object.keys(props.data).length !== 0 && typeof formData.id === 'undefined') setformData({
      ...formData,
      ...props.data
    })

    const handleChangeSalary = (event) => {
        setSalary(event.target.value);
        if(event.target.value == 'range') {
          setformData({
            ...formData,
            price: {
              to: '',
              from: '',
            }
          }) 
        } else {
          setformData({
            ...formData,
            price: ''
          }) 
        }
    }
    const handleChange = (event) => {
      let newData;
      switch(event.target.name) {
        case 'salary-from': 
          newData = {
            price: {
              to: formData.price.to,
              from: event.target.value
            }
          }
          break;
        case 'salary-to': 
          newData = {
            price: {
              to: event.target.value,
              from: formData.price.from
            }
          }
        break;
        case 'salary-single': 
          newData = {
            price: event.target.value
          }
        break;
        default: 
          newData = {
            [event.target.name]: event.target.value
          }
          break;
      }
      
      setformData({
        ...formData,
        ...newData
      })
    }

    const handleSendVacancy = () => {
        let checkError = validate(formData);
        if(Object.keys(checkError).length == 0) {
          if(formData.id) {
            props.updateVacancy(formData)
          } else {
            props.addVacancy(formData)
          }          
        } else {
          setformData({
            ...formData,
            errors: {
              ...checkError
            }
          })
        }
    }

    return (
      <div>
        {Object.keys(formData.errors).length !== 0 && 
          <div className='error-wrapp-info'>
            <h2 className='error-title'>???????????? ?????? ???????????????????? ??????????</h2>
            <p>
              ????????????????????, ???????????????????????????? ????????, ???????????????????? ??????????????, ?? ?????????????? ???????????? ??????????????????????.
            </p>
          </div>
        }
        <form>
            <div className='form-block'>
              <div className='form-block-title'>
                  ???????????????? ?????????????????? <sup className='isRequire'>*</sup>
              </div>
              <div>
                <label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="???????????????? ??????????????????????"
                        onChange={handleChange}
                        className='full-width'
                    />
                    {formData.errors.name && <p className='error-text'>{formData.errors.name}</p>}
                </label>
              </div>
            </div>
            <div className='form-block'>
              <div className='form-block-title'>
                ?????????????? ????????????
              </div>
              <div>
                <label>
                    <span className='sup-title'>
                      ?????????? ????????????<sup className='isRequire'>*</sup>:
                    </span>
                   
                    <input
                        id="city"
                        type="text"
                        name="city"
                        value={formData.city}
                        placeholder="??????????"
                        onChange={handleChange}
                    />
                    {formData.errors.city && <p className='error-text'>{formData.errors.city}</p>}
                </label>
              </div>
              <div>
                <label>
                    <span className='sup-title'>
                      ?????????? ????????????<sup className='isRequire'>*</sup>:
                    </span>
                    <input
                        id="address"
                        type="text"
                        name="address"
                        value={formData.address}
                        placeholder="?????????? ?? ??????"
                        onChange={handleChange}
                        className='full-width'
                    />
                    {formData.errors.address && <p className='error-text'>{formData.errors.address}</p>}
                </label>
              </div>
            </div>
            <div className='form-block'>
              <div className='form-block-title'>
                ????????????????<sup className='isRequire'>*</sup>
              </div>
              <label>
                  <div className='radio-box custom-label'>
                    <input
                        type="radio"
                        name="salary"
                        value='range'
                        checked={salaryChoise === "range"}
                        onChange={handleChangeSalary}
                    />
                    <span className="checkmark"></span>
                    <span className='sup-title'>
                        ????????????????
                    </span>   
                  </div>            
                </label>
                {salaryChoise === 'range' && 
                  <div className='salary-choise'>
                      <input
                        id="salary-to"
                        type="search"
                        name="salary-to"
                        value={formData.price.to && formData.price.to}
                        placeholder="????"
                        onChange={handleChange}
                    />
                    {`  -  `}
                    <input
                        id="salary-from"
                        type="search"
                        name="salary-from"
                        value={formData.price.to && formData.price.from}
                        placeholder="????"
                        onChange={handleChange}
                    />
                    {formData.errors.price && <p className='error-text'>{formData.errors.price}</p>}
                  </div>
                }
                <div>
                <label>
                    <div className='radio-box custom-label'>
                      <input
                          type="radio"
                          name="salary"
                          value='single'
                          checked={salaryChoise === "single"}
                          onChange={handleChangeSalary}
                      />
                      <span className="checkmark"></span>
                      <span className='sup-title'>
                          ???????? ????????????????
                      </span>     
                    </div>          
                </label>
                {salaryChoise === 'single' && 
                    <div className='salary-choise'>
                      <input
                        id="salary-single"
                        type="text"
                        name="salary-single"
                        value={formData.price}
                        placeholder="??????????"
                        onChange={handleChange}
                      />
                      {` ?????? ?? ??????????`}
                      {formData.errors.price && <p className='error-text'>{formData.errors.price}</p>}
                    </div>
                }
                </div>
                <label>
                    <div className='radio-box custom-label'>
                    <input
                        type="radio"
                        name="salary"
                        value=''
                        checked={salaryChoise === ""}
                        onChange={handleChangeSalary}
                    />
                    <span className="checkmark"></span>
                    <span className='sup-title'>
                        ???? ?????????????????? <span className='sup-title--info'>(???? ??????????????????????????)</span>
                    </span>  
                    </div>             
                </label>
            </div>
            <div className='choise-box-btn'>
                <Button text='??????????????????' handleClick={handleSendVacancy} customClass='btn-blue' />
                {` ?????? `}
                <button className='text-link cancel' 
                        onClick={() => props.history.push('/')}>
                  ????????????????
                </button>
            </div>
        </form>
      </div>
    );
};

const mapStateToProps = (state) => {
    return ({
      
    })
}
const mapDispatchToProps = {
    addVacancy,
    updateVacancy
}

VacancyForm.propTypes = {
  data: PropTypes.object,
}

VacancyForm.defaultProps = {
  data: {},
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(VacancyForm);