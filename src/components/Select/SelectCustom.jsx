import React from 'react';
import Select from 'react-select';

const placeholder = 'Type / Language';

class SelectCustom extends React.Component {
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

    return (
      <Select
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

export default SelectCustom;
