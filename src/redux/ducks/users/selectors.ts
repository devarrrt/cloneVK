import { RootState } from './../../store'
import { UsersState } from './state/state'

export const selectUsersState = ( state: RootState ): UsersState => state.users


export const selectUsers = ( state: RootState ) => selectUsersState(state).items

export const selectLoadingState = ( state: RootState ) => selectUsersState( state ).loadingState