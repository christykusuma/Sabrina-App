import { combineReducers } from 'redux';
import LibraryReducer from './library/LibraryReducer';
import LibrarySelectionReducer from './library/LibrarySelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: LibrarySelectionReducer
});
