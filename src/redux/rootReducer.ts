import { combineReducers } from 'redux'
import postsReducer from './ducks/posts/reducerPosts'
import messagesReducer from './ducks/messages/reducerMessages'
import usersReducer from './ducks/users/reducerUsers';
import userReducer from './ducks/user/reducerUser'



export const rootReducer  = combineReducers({
	posts: postsReducer,
	messages: messagesReducer,
	users: usersReducer,
	user: userReducer
})