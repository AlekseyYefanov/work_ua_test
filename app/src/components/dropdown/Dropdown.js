import React from 'react';
import toBe from 'prop-types'
import './style.scss'
import useVisible from '../../helpers/useVisible';

let Dropdown = ({handleEdit, handleDelete}) => {

    const { ref, isVisible, setIsVisible } = useVisible(false);

    const handleShowMore = () => {
      setIsVisible(!isVisible)
    }
//TODO: need make a more versatile drop-down list with passing values
    return (
       <div className='dropdown-wrap'>
         <span onClick={handleShowMore}>Еще <i className={`turn-${!isVisible ? 'down' : 'up'}`}></i></span>
          { isVisible && 
            <ul style={{ position: 'absolute' }} ref={ref}>
                <li onClick={handleEdit}>Редактировать</li>
                <li onClick={handleDelete}>Удалить</li>
            </ul> 
          }
       </div>
      
    );
}

Dropdown.propTypes = {
  handleDelete: toBe.func.isRequired,
  handleEdit: toBe.func.isRequired,
}

export default Dropdown;
