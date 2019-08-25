import './ResultTile.scss';
import React from 'react';
import IconStar from '../../assets/img/icon-star.svg';
import Button from '../Button/Button';
import { connect } from 'react-redux';

const Result = ({ className, item, isExists }) => {
  return (
    <div className={`${className} result-tile`} id={item.id}>
      <div className="result-tile__details result-details">
        <p className="result-details__language">{item.language}</p>
        <div className="result-details__stars-container">
          <img
            className="result-details__icon"
            src={IconStar}
            alt="icon star"
          />
          <p className="result-details__count">{item.stargazers_count}</p>
        </div>
      </div>
      <div className="result-tile__main">
        <p className="result-tile__title">
          <a href={item.html_url} className="lnk result-tile__link">
            {item.full_name}
          </a>
        </p>
        <p className="result-tile__desc">{item.description}</p>
        <div className="result-tile__tags">
          {item.topics &&
            item.topics.map(tag => (
              <span className="result-tile__tag">{tag}</span>
            ))}
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
  isExists: !!state.myList.find(item => item.id === props.item.id)
});

export default connect(mapStateToProps)(Result);
