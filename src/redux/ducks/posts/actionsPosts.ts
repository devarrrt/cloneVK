import { Action } from 'redux'
import { PostsState, Post } from './state/state';



export enum PostsActionType {
	FETCH_POSTS = 'FETCH_POSTS',
	SET_POSTS = 'SET_POSTS',
	FETCH_ADD_POSTS = 'FETCH_ADD_POSTS',
	ADD_POST = 'ADD_POST',
	DELETE_POST = 'DELETE_POST'
}
 

/////загрузка постов
export interface FetchPostsActionInterface extends Action <PostsActionType> {
	type: PostsActionType.FETCH_POSTS
}
export const fetchPosts = ( ): FetchPostsActionInterface => ({
		type: PostsActionType.FETCH_POSTS
})

/////отображение постов
export interface SetPostsActionInterface extends Action <PostsActionType> {
	type: PostsActionType.SET_POSTS,
	payload: PostsState['items']
}
export const setPosts = ( payload: PostsState['items'] ): SetPostsActionInterface => ({
	type: PostsActionType.SET_POSTS,
	payload
})




//////загрузка добавления постов
export interface fetchAddPostsActionInterface extends Action <PostsActionType> {
	type: PostsActionType.FETCH_ADD_POSTS,
	payload: {
		textPost: string
	}
}
export const  fetchAddPosts = ( payload: { textPost: string }): fetchAddPostsActionInterface => ({
	type: PostsActionType.FETCH_ADD_POSTS,
	payload
})



//////добавление постов
export interface AddPostsActionInterface extends Action <PostsActionType> {
	type: PostsActionType.ADD_POST,
	payload: Post

}
export const addPosts = ( payload: Post ): AddPostsActionInterface => ({
	type: PostsActionType.ADD_POST,
	payload
})



//////уделание постов
export interface RemovePostActionInterface extends Action <PostsActionType> {
	type: PostsActionType.DELETE_POST,
	payload: string
} 

export const removePost = ( payload: string ): RemovePostActionInterface => ({
	type: PostsActionType.DELETE_POST,
	payload
}) 








export type PostsActions = FetchPostsActionInterface | SetPostsActionInterface | fetchAddPostsActionInterface | AddPostsActionInterface | RemovePostActionInterface