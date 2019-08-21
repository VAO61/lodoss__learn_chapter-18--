import './Select.scss';
import React from 'react';
import ReactSelect from 'react-select';

class Select extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { options } = this.props;
    const { selectedOption } = this.state;
    const { defaultValue } = this.props;
    const { defaultInputValue } = this.props;
    const { placeholder } = this.props;

    return (
      <ReactSelect
        className="search__select select"
        classNamePrefix="select"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        defaultInputValue={defaultInputValue}
      />
    );
  }
}

export default Select;
