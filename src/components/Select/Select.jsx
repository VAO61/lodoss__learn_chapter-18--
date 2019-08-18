import './Select.scss';
import React from 'react';

const Select = ({
  className =''
}) => (
  <div className={`${className} select`}>
    <select className="select__container">
      <option className="select__option">1</option>
      <option className="select__option">2</option>
      <option className="select__option">3</option>
    </select>
  </div>

  // form__option
);

export default Select;
