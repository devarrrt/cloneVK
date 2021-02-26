
import produce, { Draft } from 'immer'
import { LoadingState, UsersState } from './state/state'
import { UsersActionsType } from './actionsUsers'



const initialState: UsersState = {
	items: [],
	loadingState: LoadingState.NEVER
}


const usersReducer = produce((draft: Draft<UsersState>, action: any) => {
	switch (action.type) {
		case UsersActionsType.FETCH_USERS:
			draft.items = []
			draft.loadingState = LoadingState.LOADING
			break

		case UsersActionsType.SET_USERS:
			draft.items = action.payload
			draft.loadingState = LoadingState.LOADED
			break

		case UsersActionsType.SET_LOADING_STATE:
			draft.loadingState = action.payload
			break
	}

}, initialState)


export default usersReducer