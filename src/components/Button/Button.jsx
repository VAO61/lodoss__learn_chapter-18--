import './Button.scss';

import React from 'react';

const Button = ({
  className = '',
  type = 'brand',
  disabled = false,
  children,
  onClick = () => {}
}) => (
  <button
    className={`btn btn_${type} ${className}`}
    type={'button'}
    onClick={onClick} // addOrRemoveRepo(item)
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
