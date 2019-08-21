import './Search.scss';
import React from 'react';
// import Select from '../Select/Select_';
// import TestSelect from '../Select/TestSelect';
import Select from 'react-select';

// import Select from 'react-select';
// import getJSON from '../../api/getJSON';

// const options = [
//   { value: 'One', label: 'One' },
//   { value: 'Two', label: 'Two' },
//   { value: 'Three', label: 'Three' }
// ];

// const { selectedOption } = this.state;

const Search = ({
  className = ''
  // state = {
  //   selectedOption: null
  // },
  // handleChange = selectedOption => {
  //   this.setState({ selectedOption });
  //   console.log(`Option selected:`, selectedOption);
  // }
}) => (
  <section className={`${className} search`}>
    <div className="search__item">
      {/* <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      /> */}
      <Select
        className="search__select"
        options={[{ value: 'Repositories', label: 'Repositories' }]}
        defaultValue="Repositories"
        // defaultMenuIsOpen
        defaultInputValue="Repositories"
        placeholder="Type"
      />
      {/* <TestSelect
        className="search__select"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder={placeholder}
      /> */}
      {/* props */}
      {/* <select className="form__select" v-model="typeValue" id="selectType">
          <option
            className="form__option"
            v-for="option in typeList"
            v-bind: key="option"
          :value="option"
          >{{ option }}</option>
        </select>
      <label className="form__label" for="selectType">Type</label> */}
    </div>
    <div className="search__item">
      <Select
        className="search__select"
        options={[
          { value: 'Javascript', label: 'Javascript' },
          { value: 'CSS', label: 'CSS' },
          { value: 'HTML', label: 'HTML' },
          { value: 'PHP', label: 'PHP' },
          { value: 'Ruby', label: 'Ruby' },
          { value: 'C++', label: 'C++' },
          { value: 'Python', label: 'Python' },
          { value: 'C#', label: 'C#' },
          { value: 'Java', label: 'Java' },
          { value: 'Go', label: 'Go' },
          { value: 'Haskel', label: 'Haskel' }
        ]}
        defaultInputValue=""
        placeholder="Language"
      />
      {/* props */}
      {/*<select className="form__select" v-model="languageValue" id="selectLanguage">
         <option
          className="form__option"
          v-for="option in languageList"
            : key="option"
        :value="option"
          >{{ option }}</option>
        </select>
    <label className="form__label" for="selectLanguage">Language</label> */}
    </div>
    <div className="search__item">
      <input className="search__input" type="text" />
      {/* <input
        className="form__input"
        id="typeForSearch"
        type="text"
        v-model.trim="searchValue"
      @keyup.enter="getData"
    />
        <label className="form__label" for="typeForSearch">Type here for search</label> */}
    </div>
    <button className="search__submit btn btn_brand">search</button>
  </section>
);

export default Search;
