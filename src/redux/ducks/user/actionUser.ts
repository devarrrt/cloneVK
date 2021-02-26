import { LoadingState } from '../users/state/state'
import { UserState } from './state/state'
import { Action } from 'redux'


export enum UserActionType {
	FETCH_USER_DATA = 'FETCH_USER_DATA',
	SET_USER_DATA = 'SET_USER_DATA',
	SET_LOADING_STATE = 'SET_LOADING_STATE'
}



export interface FetchUserDataInterface extends Action <UserActionType> {
	type: UserActionType.FETCH_USER_DATA,
	payload: string
}
export const fetchUserDataAction = ( payload: string  ): FetchUserDataInterface=> ({
	type: UserActionType.FETCH_USER_DATA,
	payload
})



export interface SetUserDataInterface extends Action <UserActionType> {
type: UserActionType.SET_USER_DATA,
payload: UserState['user']
}
export const setUserDataAction = ( payload: UserState['user'] ): SetUserDataInterface => ({
	type: UserActionType.SET_USER_DATA,
	payload
})



export interface LoadingUserStatusInterface extends Action <UserActionType> {
	type: UserActionType.SET_LOADING_STATE,
	payload: LoadingState
}
export const loadingUserStatusAction = ( payload: LoadingState ): LoadingUserStatusInterface => ({
	type: UserActionType.SET_LOADING_STATE,
	payload
})



export type UserAction = FetchUserDataInterface | SetUserDataInterface | LoadingUserStatusInterface
