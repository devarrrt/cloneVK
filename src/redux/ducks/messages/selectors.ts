import { RootState } from './../../store';
import  { MessagesState, LoadingState, AddMessage } from './state/state'



export const selectMessagesState = ( state: RootState ): MessagesState => state.messages


export const selectMessages = ( state: RootState ) => selectMessagesState( state ).items


export const selectLoadingState = ( state: RootState ) => selectMessagesState( state ).loadingState

