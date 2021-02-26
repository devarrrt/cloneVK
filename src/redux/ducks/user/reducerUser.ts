import produce, { Draft } from 'immer'
import { LoadingState } from '../users/state/state'
import { UserState } from './state/state';
import { UserAction, UserActionType } from './actionUser'


export const initalState: UserState = {
	user: undefined,
	loadingState: LoadingState.NEVER
}


const userReducer = produce((draft: Draft<UserState>, action: UserAction) => {
	switch (action.type) {
		
		case UserActionType.FETCH_USER_DATA:
			draft.user = undefined
			draft.loadingState = LoadingState.LOADED
			break

		case UserActionType.SET_USER_DATA:
			draft.user = action.payload
			draft.loadingState = LoadingState.LOADED
			break

		case UserActionType.SET_LOADING_STATE:
			draft.loadingState = action.payload
			break
	}
}, initalState)


export default userReducer