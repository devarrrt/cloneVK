import { call, put, takeLatest } from 'redux-saga/effects'
import { setMessagesAction, MessagesActionsType, FetchAddMessageInterface, addMessage } from './actionsMessages'
import { MessagesAPI } from '../../../API/MessagesAPI';
import { Message } from '../../ducks/messages/state/state'

 

export function* fetchMessagesRequest(){
	try {
		const items = yield call( MessagesAPI.fetchMessages ) 
		yield put( setMessagesAction( items ))
	}
	catch ( error ) {
		console.log('error')
	}
}

export function* fetchAddMessagesRequest ({ payload }: FetchAddMessageInterface ) {
	try {
		const data: Message = {
			id: Math.random().toString(36).substr(2),
			text: payload.text,
			user: {
				"fullname": "Анастасия",
				"avatarUrl": "https://sun1-21.userapi.com/impg/QQh8O3aLreAYJd7LA9anm4lYYfjPG29KZC2RKg/35r2rbfNAjI.jpg?size=100x0&quality=96&crop=160,160,1280,1280&sign=4602bdb31e0553905d13ee60a612a832&ava=1"
			}
		}
		const item = yield call( MessagesAPI.addMessage, data )
		yield put( addMessage( item ) )
	} catch (error) {
		console.log( 'error' )
	}
}





export function* messagesSaga() {
	yield takeLatest( MessagesActionsType.FETCH_ADD_MESSAGE, fetchMessagesRequest )
	yield takeLatest( MessagesActionsType.FETCH_ADD_MESSAGE, fetchAddMessagesRequest )
}