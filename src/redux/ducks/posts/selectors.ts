
import { RootState } from './../../store';
import { LoadingState, PostsState } from './state/state';



export const selectPostsState = ( state: RootState ): PostsState => state.posts

export const  selectLoadingState = ( state: RootState ): LoadingState => selectPostsState( state ).loadingState

export const selectTweetsItems = ( state: RootState )  => selectPostsState( state ).items