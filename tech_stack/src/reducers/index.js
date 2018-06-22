import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelecltionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelecltionReducer
});
