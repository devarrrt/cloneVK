import { call, put, takeEvery } from 'redux-saga/effects'
import { FetchUserDataInterface, setUserDataAction, loadingUserStatusAction, UserActionType } from './actionUser'
import { UsersApi } from '../../../API/UsersAPI'
import { LoadingState } from '../users/state/state'






export function* fetchUserDataRequest({ payload: userId }: FetchUserDataInterface ) {
	try {
		const data = yield call( UsersApi.fetchUserData, userId )
		yield put ( setUserDataAction(data[0]))
	} catch (error) {
		yield put( loadingUserStatusAction( LoadingState.ERROR ))
	}
}


export function* userSaga( ){
	yield takeEvery( UserActionType.FETCH_USER_DATA, fetchUserDataRequest )
}