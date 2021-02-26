import { RootState } from './../../store';
import { UserState } from './state/state';
import { LoadingState, User } from '../users/state/state'




export const selectUser = ( state: RootState ): UserState => state.user
export const loadingUser = ( state: RootState ): LoadingState => selectUser(state).loadingState


export const selectUserData = ( state: RootState ): User | undefined => selectUser( state ).user

export const loadingUserSelect = ( state: RootState ): boolean => loadingUser( state ) === LoadingState.LOADING

export const loadedUserSelect = ( state: RootState ): boolean => loadingUser( state ) === LoadingState.LOADED

