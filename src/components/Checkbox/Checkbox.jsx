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
    className={`checkbox ${active ? 'checkbox_active' : ''}`}
    type="button"
    onClick={onClick} // addOrRemoveRepo(item)
  />
);

export default Checkbox;
