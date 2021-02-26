import React from 'react'
import { Avatar } from '@material-ui/core'
import { User } from '../redux/ducks/users/state/state'
import { usersStyle } from './../pages/UsersPage/UsersStyle';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


interface IUserAvatar { 
	user: User,
	styles: ReturnType< typeof usersStyle >
}

export const UserAvatar: React.FC<IUserAvatar> = ({ user, styles }) => {
const history = useHistory()

const handleClickUser = ( e: React.MouseEvent<HTMLAnchorElement>): void => {
	history.push( `/user/${ user.id }`)
	console.log('hehlo')
} 

	return (
		<Link 
		to={`/user/${ user.id }`}
		onClick={ handleClickUser }
		>
		<Avatar src={user.avatarUrl} alt="avatar" className={styles.userAvatar} />		
		</Link>
	)
}
