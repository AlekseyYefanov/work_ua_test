import React from 'react';
import PropTypes from 'prop-types'
import './noData.scss'

let NoData = (props) => { 
  return (
    <div>
        <div className="error-page error-abs">
            {/* <i class='icon fas fa-search'></i> */}
            <h1>{props.children}</h1>
        </div>
    </div>
);
}

NoData.propTypes = {
    children: PropTypes.any,
}
  
NoData.defaultProps = {
    children: null,
}
export default NoData
