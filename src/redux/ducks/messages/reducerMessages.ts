
import produce, { Draft } from 'immer'
import { MessagesActionsType } from './actionsMessages'
import { MessagesState, LoadingState, AddMessage } from './state/state'



const initialMessagesState: MessagesState = {
	items: [],
	loadingState: LoadingState.NEVER,
	addMessage: AddMessage.NEVER
}



const messagesReducer = produce((draft: Draft<MessagesState>, action: any) => {

	switch (action.type) {

		case MessagesActionsType.FETCH_MESSAGES:
			draft.items = []
			draft.loadingState = LoadingState.LOADING
			break

		case MessagesActionsType.SET_MESSAGES:
			draft.items = action.payload
			draft.loadingState = LoadingState.LOADED
			break

		case MessagesActionsType.SET_LOADING_STATE:
			draft.loadingState = action.payload;
			break;

		case MessagesActionsType.FETCH_ADD_MESSAGE:
			draft.addMessage = AddMessage.LOADING
			break;

			case MessagesActionsType.ADD_MESSAGES: 
			draft.items.push(action.payload)
			draft.addMessage = AddMessage.NEVER
			break




	}

}, initialMessagesState)

export default messagesReducer

