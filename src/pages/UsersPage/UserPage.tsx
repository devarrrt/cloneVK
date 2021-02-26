import React, { useEffect } from 'react'
import { usersStyle } from './UsersStyle'
import { Avatar, Button, ListItemAvatar, Typography } from '@material-ui/core';
import { User } from '../../redux/ducks/users/state/state'
import { selectUserData, loadingUser } from '../../redux/ducks/user/selectorUser'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDataAction, setUserDataAction } from '../../redux/ducks/user/actionUser';
import { useParams } from 'react-router-dom';



interface IUser {
	user: User
 }




export const UserPage: React.FC<IUser> = () => {
	const styles = usersStyle()
	const user = useSelector(selectUserData)
	const isLoading = useSelector( loadingUser )
	const dispatch =  useDispatch()

	const params: { id? : string } = useParams()
	const id = params.id


	useEffect( ()=> {
		if ( id ) {
			dispatch( fetchUserDataAction(id) )
		}
		return() => {
			dispatch( setUserDataAction( undefined ) )
		}
	},[ dispatch, id ] )

	// if ( isLoading ) {
	// 	return (
	// 		<div>  
	// 			Loading....
	// 		</div>
	// 	)
	// }



	return (
		<div className={styles.userWrapper} >
			<div className={styles.userHeader}>
				<ListItemAvatar>
					<Avatar src={ user?.avatarUrl } alt="avatar" />
				</ListItemAvatar>
				<div className={ styles.userInfo }>
					<Typography variant="h6"> { user?.fullname }  { user?.surname } </Typography>
					<p className={styles.userStatus}> { user?.status } </p>
				</div>
				</div>

				<div className={ styles.userContent }>
					Город: { user?.adress.country }, { user?.adress.city }  <br/>
					Компания: { user?.job.company }, { user?.job.country } <br/>
					{ user?.year } года
				</div>

				<div className={ styles.userBottom }>
					<Button> { user?.follow ? "Отписаться" : "Подписаться"} </Button>
				</div>

		</div>
	)
}
