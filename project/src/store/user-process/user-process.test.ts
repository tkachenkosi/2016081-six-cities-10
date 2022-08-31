import {userProcess, requireAuthorization} from './user-process';
import {AuthorizationStatus} from '../../consts';

const state = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

describe('Reducer: test userProcess', () => {
  it('empty parametrs', () => {
    expect(userProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
      });
  });

  it('authorizationStatus Auth', () => {
    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
      });
  });

  it('authorizationStatus NoAuth', () => {
    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
      });
  });

});

