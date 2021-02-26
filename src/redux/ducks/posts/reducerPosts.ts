import produce, { Draft } from 'immer'
import { LoadingState } from './state/state'
import { PostsActions, PostsActionType } from './actionsPosts'
import { PostsState, AddPost } from './state/state'



const InitalPostsState: PostsState = {
	items: [],
	loadingState: LoadingState.NEVER,
	addFormPost: AddPost.NEVER
}



const postsReducer = produce((draft: Draft<PostsState>, action: PostsActions) => {
	switch (action.type) {

		case PostsActionType.FETCH_POSTS:
			draft.items = [];
			draft.loadingState = LoadingState.LOADED
			break

		case PostsActionType.SET_POSTS:
			draft.items = action.payload;
			draft.loadingState = LoadingState.LOADED
			break

		case PostsActionType.FETCH_ADD_POSTS:
			draft.addFormPost = AddPost.LOADING
			break;

		case PostsActionType.ADD_POST:
			draft.items.push(action.payload)
			draft.addFormPost = AddPost.NEVER
			break


		case PostsActionType.DELETE_POST:
			draft.items = draft.items.filter(( obj ) => obj.id  !== action.payload )
		break
			
		default: break
	}
}, InitalPostsState)


export default postsReducer