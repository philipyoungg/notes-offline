import createConstants from '../utils/createConstants';

const actionTypes = createConstants([
  'NOTE_ADDED',
  'NOTE_TOGGLED',
  'ACTIVE_NOTE_CHANGED',
  'NOTE_FILTER_CHANGED',
  'NOTE_TITLE_UPDATED',
  'NOTE_BODY_UPDATED',
  'NOTE_TOGGLED',
]);

export default actionTypes;
