import './ButtonView.sass';
import React from 'react';

// type = 'list' | 'tile'

const ButtonView = ({ type = 'list' }) => (
  <button className={'button-view'} type={'button'}>
    {type === 'list' ? 'svg1' : ''}
  </button>
)