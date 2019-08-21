import './Search.scss';
import React, { useState } from 'react';
import Select from '../Select/Select';
import getJSON from '../../api/getJSON';

const Search = ({
  className = '',
  isDisableSearch = () => {
    return (
      this.searchValue === '' ||
      this.typeValue === '' ||
      this.languageValue === ''
    );
  },
  getData = async () => {
    if (this.isDisableSearch) {
      return;
    }

    const { data } = await getJSON({
      type: this.typeValue,
      searchValue: this.searchValue,
      lang: this.languageValue
    });
    this.$store.commit('updateItems', data.items);
  }
  // console.log('object')
}) => {
  // react-хуки
  const [type, setType] = useState('Repositories')
  const [lang, setLang] = useState('')
  const [searchValue, setSearchValue] = useState('')

  return (
    <section className={`${className} search`}>
      <div className="search__item">
        <Select
          options={[{ value: 'Repositories', label: 'Repositories' }]}
          // value={type}
          // defaultValue={type}
          onChange={(data) => setType(data.value)}
          defaultInputValue={type}
          placeholder="Type"
          />
      </div>
      <div className="search__item">
        <Select
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
          onChange={(data) => setLang(data.value)}
          defaultInputValue={lang}
          // defaultInputValue=""
          placeholder="Language"
          />
      </div>
      <div className="search__item">
        
        <input className="search__input" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        {/* <label className="form__label" for="typeForSearch">
        Type here for search
      </label>{' '} */}
      </div>
      <button className="search__submit btn btn_brand" disabled={isDisableSearch}>
        search
    </button>
    </section>
  )
};

export default Search;
