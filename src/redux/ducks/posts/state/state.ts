

export enum LoadingState { 
	LOADED = 'LOADED', // загружено
	LOADING = 'LOADING', //загрузка
	ERROR = 'ERROR', //ошибка
	NEVER = 'NEVER', //ничего не происходит
	SUCCESS = 'SUCCESS', //успех
}



export interface Post  {
	id: string,
	text: string,
	user: {
		fullname: string,
		avatarUrl: string
	}
}


export enum AddPost {
	LOADING = 'LOADING',
	ERROR ='ERROR',
	NEVER = 'NEVER'
}	


export interface PostsState {
	items: Post[],
	loadingState: LoadingState,
	addFormPost: AddPost
}
