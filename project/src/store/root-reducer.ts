
import {combineReducers} from 'redux';
import {NameSpace} from '../consts';
import {userProcess} from './user-process/user-process';
import {dataProcess} from './data-process/data-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
