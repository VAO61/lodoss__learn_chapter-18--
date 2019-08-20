import './Search.scss';
import React from 'react';
import Select from '../Select/Select';
import getJSON from '../../api/getJSON';

//

const Search = ({ className = '' }) => (
  <section className={`${className} search`}>
    <div className="search__item">
      <Select className="search__select" />
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
      <Select className="search__select" />
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
