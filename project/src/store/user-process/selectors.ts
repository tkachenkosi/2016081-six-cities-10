import {AuthorizationStatus, NameSpace} from '../../consts';
import type {State} from '../../types/state';


export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
