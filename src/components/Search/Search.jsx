import './Search.scss';
// import ''
import React from 'react';
// import Select from '../Select/Select_';
// import Select from 'react-select';
import Select from '../Select/Select';

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
        className="search__select"
        options={[{ value: 'Repositories', label: 'Repositories' }]}
        defaultValue="Repositories"
        // defaultMenuIsOpen
        defaultInputValue="Repositories"
        placeholder="Type"
      /> */}
      <Select
        options={[{ value: 'Repositories', label: 'Repositories' }]}
        // TODO _!important: перестало передавать default value
        defaultValue="Repositories"
        // defaultInputValue="Repositories"
        defaultInputValue="Repositories"
        placeholder="Type"
      />
    </div>
    <div className="search__item">
      <Select
        // className="search__select"
        // className="select"
        // classNamePrefix="select"
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
