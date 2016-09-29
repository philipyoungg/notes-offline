import createConstants from '../utils/createConstants';

const actionTypes = createConstants([
  'ADD_NOTE',
  'TOGGLE_ARCHIVE_NOTE',
  'CHANGE_ACTIVE_NOTE',
  'CHANGE_NOTE_FILTER',
  'UPDATE_NOTE_TITLE',
  'UPDATE_NOTE_BODY',
  'TOGGLE_ARCHIVE_NOTE',
]);

export default actionTypes;