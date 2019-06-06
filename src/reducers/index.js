import { combineReducers } from 'redux';
import LibraryReducer from './library/LibraryReducer';
import LibrarySelectionReducer from './library/LibrarySelectionReducer';
import UserReducer from './user/UserReducer';
import EmployeeFormReducer from './profiles/EmployeeFormReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: LibrarySelectionReducer,
    user: UserReducer,
    employeeForm: EmployeeFormReducer
});
