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
    // TODO: не опnтимально, есть еще кнопка Search
    className={`btn btn_${type} ${className}`}
    type={'button'}
    onClick={onClick} // addOrRemoveRepo(item)
    disabled={disabled}
  >
    {/* {active ? 'Remove from list' : 'Add to list'} */}
    {children}
  </button>
);

export default Button;
