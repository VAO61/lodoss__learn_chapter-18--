import './Button.scss';
import React from 'react';

const Button = ({
  className = '',
  active = false,
  children,
  onClick = () => {}
}) => (
  <button
    className={`button button_${active ? 'sub-brand' : 'brand'} ${className}`}
    type={'button'}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
