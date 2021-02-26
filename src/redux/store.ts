import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer'
import rootSaga from './saga'
import { PostsState } from './ducks/posts/state/state';
import { MessagesState } from './ducks/messages/state/state'
import { UsersState } from './ducks/users/state/state' 
import { UserState } from './ducks/user/state/state';




declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const composeEnhancers =
	(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
	
const sagaMiddleware = createSagaMiddleware()


const store = createStore( rootReducer, composeEnhancers( applyMiddleware( sagaMiddleware)))

export interface RootState { 
	posts: PostsState,
	messages: MessagesState,
	users: UsersState,
	user: UserState
}


export default store
sagaMiddleware.run(rootSaga);
