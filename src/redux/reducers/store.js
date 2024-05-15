import { createStore, combineReducers } from 'redux';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
    employeeState: employeeReducer,
});

const store = createStore(rootReducer);

export default store;
