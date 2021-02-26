import { Action } from 'redux';
import { LoadingState, UsersState } from './state/state'



export enum UsersActionsType {
	FETCH_USERS = 'users/FETCH_USERS',
	SET_USERS = 'users/SET_USERS',
	SET_LOADING_STATE = 'users/SET_LOADING_STATE',
}





export interface FetchUsersActionInterface extends Action <UsersActionsType> {
	type: UsersActionsType.FETCH_USERS
}
export const fetchUsersAction = ( ): FetchUsersActionInterface => ({
	type: UsersActionsType.FETCH_USERS
})



export interface SetUsersActionInterface extends Action <UsersActionsType> {
	type: UsersActionsType.SET_USERS,
	payload: UsersState['items']
}
export const setUsersAction = ( payload: UsersState['items']): SetUsersActionInterface => ({
	type: UsersActionsType.SET_USERS,
	payload
})




export type UsersAction = FetchUsersActionInterface | SetUsersActionInterface