import { combineReducers } from 'redux';
import LibraryReducer from './library/LibraryReducer';
import LibrarySelectionReducer from './library/LibrarySelectionReducer';
import UserReducer from './user/UserReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: LibrarySelectionReducer,
    user: UserReducer
});
