


export enum LoadingState {
	LOADED = 'LOADED', // загружено
	LOADING = 'LOADING', //загрузка
	ERROR = 'ERROR', //ошибка
	NEVER = 'NEVER', //ничего не происходит
	SUCCESS = 'SUCCESS', //успех
}


export interface User {
	id: number,
	fullname: string,
	surname: string,
	avatarUrl: string,
	status: string,
	year: number,
	adress: IAdress,
	bestFriend: boolean,
	job: IJob,
	follow: boolean 
}

export interface IJob {
	country: string,
	company: string
}

export interface IAdress {
	country: string,
	city: string
}


export interface UsersState {
	items: User[],
	loadingState: LoadingState
}