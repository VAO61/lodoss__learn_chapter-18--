import './Button.scss';
import React from 'react';

const Button = ({ className = '', active = false,  children, onClick = () => {} }) => (
  <button className={`button button_${active ? 'red' : 'blue'} ${className}`} type={'button'} onClick={onClick}>
    {children}
  </button>
)

export default Button;