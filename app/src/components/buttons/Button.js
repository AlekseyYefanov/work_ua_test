import React from 'react';
import toBe from 'prop-types'
import './style.scss'

let Button = ({text, handleClick, customClass}) => {

    const submitClick = (event) => {
        event.preventDefault()
        handleClick()
    }

    return (
       <button className={`custom-btn ${customClass}`} onClick={submitClick}>
           {text}
       </button>
    );
}

Button.propTypes = {
    customClass: toBe.string,
    handleClick: toBe.func.isRequired,
    text: toBe.string,
}
  
Button.defaultProps = {
    text: 'Нажать',
}

export default Button;
