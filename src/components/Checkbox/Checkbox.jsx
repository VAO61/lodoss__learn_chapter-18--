import './Checkbox.scss';

import React from 'react';

const Checkbox = ({ active = false, onClick = () => {} }) => (
  <button
    className={`checkbox ${active ? 'checkbox_active' : ''}`}
    type="button"
    onClick={onClick} // addOrRemoveRepo(item)
  />
);

export default Checkbox;
