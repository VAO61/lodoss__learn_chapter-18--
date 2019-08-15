import './Button.scss';
import React from 'react';

const Button = ({
  className = '',
  active = false,
  // children,
  onClick = () => {}
}) => (
  <button
    // TODO: не оптимально, есть еще кнопка Search
    className={`button button_${active ? 'sub-brand' : 'brand'} ${className}`}
    type={'button'}
    onClick={onClick} // addOrRemoveRepo(item)
  >
    {active ? 'Remove from list' : 'Add to list'}
    {/* {children} */}
  </button>
);

export default Button;
