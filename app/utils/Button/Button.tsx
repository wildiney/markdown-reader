import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, clickHandler }) {
  const style = {
    width: '40px',
    height: '40px',
    padding: '0 10px',
    fontSize: '1.1rem',
    overflow: 'hidden',
  };
  return (
    <button type="button" style={style} onClick={() => clickHandler()}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
