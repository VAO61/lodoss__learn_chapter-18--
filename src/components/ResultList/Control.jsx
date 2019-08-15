import '../../assets/scss/_btn.scss' // TODO: Temp?
import IconTile from '../../assets/img/icon-tile.svg';
import IconList from '../../assets/img/icon-list.svg';
import './Control.scss';
import React from 'react';

const Button = ({
  className = '',
  active = false,
  children,
  onClick = () => {}
}) => (
    <button className={
      `btn result-list-control__item ${active ? 'result-list-control__item_active' : ''} `
    }>
      {children}
    </button>
);

const ResultListControl = ({
  className = '',
}) => (
    <section className={`${className} result-list-control`}>
      <Button active onClick={() => alert('Tile')}>
        <img src={IconTile} />
      </Button>
      <Button onClick={() => alert('List')}>
        <img src={IconList} />
      </Button>
  </section >
)

export default ResultListControl;