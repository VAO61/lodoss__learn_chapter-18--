import './Result.scss';
import React from 'react';
import IconStar from '../../assets/img/icon-star.svg';
import Checkbox from '../Checkbox/Checkbox';

const Result = ({
  className,
  id,
  full_name,
  language,
  stargazers_count,
  description,
  html_url,
  topics
}) => {
  return (
    <div className={`${className} result`} id={id}>
      <div className={`result__add-remove`}>
        <Checkbox />
        {/* TODO: state -> Add / Remove */}
        <Checkbox active />
      </div>
      <div className="result__main">
        <p className="result__title">
          <a href={html_url} className="lnk result__link">
            {full_name}
          </a>
        </p>
        <p className="result__desc">{description}</p>
        <div className="result__tags">
          {topics &&
            topics.map(tag => <span className="result__tag">{tag}</span>)}
        </div>
      </div>
      <div className="result__details result-details">
        <p className="result-details__language">{language}</p>
        <div className="result-details__stars-container">
          <img
            className="result-details__icon"
            src={IconStar}
            alt="icon star"
          />
          <p className="result-details__count">{stargazers_count}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
