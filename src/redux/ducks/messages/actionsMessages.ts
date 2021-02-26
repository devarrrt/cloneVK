import { Action } from 'redux';
import { LoadingState, Message, AddMessage, MessagesState } from './state/state'


export enum MessagesActionsType {
	FETCH_MESSAGES = 'messages/FETCH_MESSAGES',
	SET_MESSAGES = 'messages/SET_MESSAGES',
	SET_LOADING_STATE = 'messages/SET_LOADING_STATE',
	FETCH_ADD_MESSAGE = 'messages/FETCH_ADD_MESSAGE',
	ADD_MESSAGES = 'messages/ADD_TWEET',
}




export interface FetchMessagesActionInterface extends Action<MessagesActionsType> {
	type: MessagesActionsType.FETCH_ADD_MESSAGE
}
export const fetchMessagesAction = (): FetchMessagesActionInterface => ({
	type: MessagesActionsType.FETCH_ADD_MESSAGE
})




export interface SetMessagesActionInterface extends Action<MessagesActionsType> {
	type: MessagesActionsType.SET_MESSAGES;
	payload: MessagesState['items']
}
export const setMessagesAction = (payload: MessagesState['items']): SetMessagesActionInterface => ({
	type: MessagesActionsType.SET_MESSAGES,
	payload
})



export interface FetchAddMessageInterface extends Action<MessagesActionsType> {
	type: MessagesActionsType.FETCH_ADD_MESSAGE,
	payload: {
		id: string; 
		text: string
	}
}
export const fetchAddMessageAction = (payload: { text: string}) => ({
	type: MessagesActionsType.FETCH_ADD_MESSAGE,
	payload
})





export interface AddMessageInterface extends Action <MessagesActionsType> {
type:	MessagesActionsType.ADD_MESSAGES,
payload: Message
}
export const addMessage = ( payload: Message ): AddMessageInterface => ({
	type: MessagesActionsType.ADD_MESSAGES,
	payload
}) 




export type MessageAction = FetchMessagesActionInterface | SetMessagesActionInterface | FetchAddMessageInterface | AddMessageInterface