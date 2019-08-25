import './ResultTile.scss';
import React from 'react';
import IconStar from '../../assets/img/icon-star.svg';
import Button from '../Button/Button';
import { connect } from 'react-redux';

const Result = ({
  className,
  id,
  full_name,
  language,
  stargazers_count,
  description,
  html_url,
  topics,
  isExists
}) => {
  return (
    <div className={`${className} result-tile`} id={id}>
      <div className="result-tile__details result-details">
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
      <div className="result-tile__main">
        <p className="result-tile__title">
          <a href={html_url} className="lnk result-tile__link">
            {full_name}
          </a>
        </p>
        <p className="result-tile__desc">{description}</p>
        <div className="result-tile__tags">
          {topics &&
            topics.map(tag => <span className="result-tile__tag">{tag}</span>)}
        </div>
      </div>
      <div className={`result-tile__add-remove`}>
        {isExists ? (
          <Button type="sub-brand">Remove from list</Button>
        ) : (
          <Button>Add to list</Button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  isExists: !!state.myList.find(item => item.id === props.id)
});

export default connect(mapStateToProps)(Result);
