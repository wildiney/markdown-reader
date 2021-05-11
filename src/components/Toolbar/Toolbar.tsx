import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../utils/Button/Button';

function Toolbar({ increaseFontSize, decreaseFontSize }) {
  const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '20px',
    right: '20px',
    padding: '5px',
    zIndex: 100,
  };

  return (
    <div style={style}>
      <Button clickHandler={increaseFontSize}>+</Button>
      <Button clickHandler={decreaseFontSize}>-</Button>
    </div>
  );
}

Toolbar.propTypes = {
  increaseFontSize: PropTypes.func.isRequired,
  decreaseFontSize: PropTypes.func.isRequired,
};

export default Toolbar;
