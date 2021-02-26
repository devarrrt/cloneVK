import { User, LoadingState } from '../../users/state/state'
 


export interface UserState {
	user?: User;
	loadingState: LoadingState
}

