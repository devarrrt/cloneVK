import { all } from 'redux-saga/effects'
import { postsSaga } from './ducks/posts/sagas'
import { messagesSaga } from './ducks/messages/sagas'
import { usersSaga } from './ducks/users/sagas'
import { userSaga } from './ducks/user/sagaUser'



export default function* rootSaga() {
	yield all([
		postsSaga(),
		messagesSaga(),
		usersSaga(),
		userSaga()
	])
}