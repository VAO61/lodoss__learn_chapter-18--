import './Result.scss';
import React, { Fragment } from 'react';
import IconStar from "../../assets/img/icon-star.svg";

const Result = ({
  className = '',
}) => (
    <Fragment>
      <div className={`${className} result`}>
        <div className="`result__details result-details`">
          <p className="result-details__language">item.language</p>
        </div>
        <div className="result-details__stars-container">
          <img className="result-details__icon" src={IconStar} alt="icon star" />
          {/* <IconStar  /> */}
          <p className="result-details__count">item.stargazers_count</p>
        </div>
        <div className="result-item__main">
                        {/* link.url */}
          <a href className="lnk result-item__link">
            <p className="result-item__title">item.full_name</p>
          </a>
          <p className="result-item__desc">item.description</p>
          <div className="result-item__tags">
            <span className="result-item__tag">tag</span>
        </div>
      </div>
      <div className={`result__add-remove`}>
    
      {/* <button @click="addOrRemoveRepo(item)" :class="`btn checkbox result__checkbox ${getClassNameActive(item.id)}`" type="checkbox" />
        <button @click="addOrRemoveRepo(item)" :class="`btn btn_brand result__button ${getClassNameActive(item.id)}`">{{ getButtonText(item.id)}}</button> */}
      </div>
    </div >
  </Fragment>
);

export default Result;
