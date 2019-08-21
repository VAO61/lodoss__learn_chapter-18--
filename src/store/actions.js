import { UPDATE_SEARCH_LIST, ADD_TO_MY_LIST, REMOVE_FROM_MY_LIST } from './constants';

export const updateSearchList = (payload) => ({
  type: UPDATE_SEARCH_LIST,
  payload
})

export const addToMyList = (payload) => ({
  type: ADD_TO_MY_LIST,
  payload
})

export const removeFromMyList = (id) => ({
  type: REMOVE_FROM_MY_LIST,
  payload: id
})

