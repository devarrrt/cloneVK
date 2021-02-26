import { call, put, takeLatest } from 'redux-saga/effects'
import { UsersApi } from './../../../API/UsersAPI';
import { setUsersAction } from './actionsUsers';
import { UsersActionsType } from './actionsUsers'



export function* fetchUsersRequest(){
	try {
		const items = yield call ( UsersApi.fetchUsers )
		yield put ( setUsersAction(items))
	} 
	catch (error) {
		console.log('error')
	}
}


export function* usersSaga( ){
	yield takeLatest( UsersActionsType.FETCH_USERS, fetchUsersRequest ) 
}