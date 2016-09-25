import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import notes from '../note/NoteReducer';

export default combineReducers({
  routing: routerReducer,
  notes,
});
