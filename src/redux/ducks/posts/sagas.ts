import { takeLatest, call, put } from 'redux-saga/effects';
import { PostsActionType, setPosts, fetchAddPostsActionInterface, addPosts, RemovePostActionInterface } from './actionsPosts'
import { PostsApi } from '../../../API/PostsAPI'
import { Post } from './state/state'


export function* fetchPostsRequest (){
	try {
		const items = yield call ( PostsApi.fetchPosts )
		yield put( setPosts( items ))
	} catch {
		console.log('ошибочка где-то у вас тут')
	}
}


export function* fetchAddPostsRequest ({ payload }: fetchAddPostsActionInterface ) {
	try {
		const data: Post = {
			id:  Math.random().toString(36).substr(2),
			text: payload.textPost,
			user: {
				"fullname": "Анастасия",
				"avatarUrl": "https://sun1-21.userapi.com/impg/QQh8O3aLreAYJd7LA9anm4lYYfjPG29KZC2RKg/35r2rbfNAjI.jpg?size=100x0&quality=96&crop=160,160,1280,1280&sign=4602bdb31e0553905d13ee60a612a832&ava=1"
			},
		}
		const item = yield call ( PostsApi.addPost, data )
		yield put( addPosts(item))
	} catch{
		console.log('error')
	}
}


export function* fetchRemovePostRequest({ payload }: RemovePostActionInterface ){
	try {
		yield call ( PostsApi.deletePost, payload )
	} catch (error) {
		console.log( 'ошибочка вышла' )
	}
}




export function* postsSaga( ){
	yield takeLatest( PostsActionType.FETCH_POSTS, fetchPostsRequest )
	yield takeLatest( PostsActionType.FETCH_ADD_POSTS, fetchAddPostsRequest )
	yield takeLatest( PostsActionType.DELETE_POST, fetchRemovePostRequest )
}