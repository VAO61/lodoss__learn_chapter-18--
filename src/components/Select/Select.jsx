import './Select.scss';
import React from 'react';
import ReactSelect from 'react-select';

class Select extends React.Component {
  // state = {
  //   selectedOption: null
  // };
  // handleChange = selectedOption => {
  //   this.setState({ selectedOption });
  //   // console.log(`Option selected:`, selectedOption);
  // };
  render() {
    const { options, defaultValue, defaultInputValue, placeholder, onChange } = this.props;

    return (
      <ReactSelect
        className="search__select select"
        classNamePrefix="select"
        // value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        defaultInputValue={defaultInputValue}
      />
    );
  }
}

export default Select;
