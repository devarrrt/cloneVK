
export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
	SUCCESS = 'SUCCESS',  
}



export interface Message {
	id: string,
	text: string,
	user: {
		fullname: string,
		avatarUrl: string
	}
}

export enum AddMessage {
	LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}


export interface MessagesState {
	items: Message[],
	loadingState: LoadingState,
	addMessage: AddMessage
}