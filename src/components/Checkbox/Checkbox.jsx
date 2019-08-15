import './Checkbox.scss';
import React from 'react';

const Checkbox = ({
  className = '',
  active = false,
  onClick = () => {
    // addOrRemoveRepo(item)
  }
}) => (
  <button
    className={`checkbox checkbox_${active ? 'active' : ''}`}
    type="button"
    onClick={onClick} // addOrRemoveRepo(item)
  />
);

export default Checkbox;
