import { combineReducers } from 'redux';

import RepositoriesReducer from './reducers/RepositoriesReducer';

export default combineReducers({ repositories: RepositoriesReducer });