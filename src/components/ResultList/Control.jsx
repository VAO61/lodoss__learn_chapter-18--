// import '../../assets/scss/_btn.scss' // TODO: Temp?
import IconTile from '../../assets/img/icon-tile.svg';
import IconList from '../../assets/img/icon-list.svg';
import './Control.scss';
import React from 'react';
import { setTheme } from '../../store/actions';
import { connect } from 'react-redux';

const Button = ({
  className = '',
  active = false,
  children,
  onClick = () => {}
}) => (
  <button
    onClick={onClick}
    className={`${className} btn result-list-control__item ${
      active ? 'result-list-control__item_active' : ''
    } `}
  >
    {children}
  </button>
);

const ResultListControl = ({ className = '', theme, setTheme }) => (
  <section className={`${className} result-list-control`}>
    <Button active={theme === 'tile'} onClick={setTheme('tile')}>
      <img src={IconTile} alt="icon tile" />
    </Button>
    <Button active={theme === 'list'} onClick={setTheme('list')}>
      <img src={IconList} alt="icon list" />
    </Button>
  </section>
);

const mapStateToProps = state => ({
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  setTheme: theme => () => dispatch(setTheme(theme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultListControl);
