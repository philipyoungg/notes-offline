import { propOr, identity } from 'ramda';

// createReducer:: a -> {k: v} -> (a -> {k: v}) -> a
const createReducer = (initialState, handlers) =>
  (state = initialState, action) =>
    propOr(identity, action.type, handlers)(state, action);

export default createReducer;
