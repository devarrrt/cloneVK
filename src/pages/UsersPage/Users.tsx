import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BackButton } from './../../components/BackButton';
import { Typography, Avatar } from '@material-ui/core';
import { selectUsers } from '../../redux/ducks/users/selectors'
import { usersStyle } from './UsersStyle'
import { fetchUsersAction } from './../../redux/ducks/users/actionsUsers';
import { UserAvatar } from '../../components/UserAvatar'

interface Props { }



export const Users = (props: Props) => {
	const styles = usersStyle()
	const users = useSelector(selectUsers)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsersAction())
	}, [dispatch])



	return (
		<div className={styles.wrapperUsers} >
			<div className={styles.headerUsers}>
				<BackButton />
				<Typography variant="h5" className={styles.titleUsers}>
					Мои друзья
				</Typography>
			</div>

			<div className={styles.contentHeaderUsers}>
				<Typography variant="h5" className={styles.subtitleUsers}>
					Лучшие друзья
				</Typography>
				<div className={styles.contentUsers} >

				</div>


				<Typography variant="h5" className={styles.subtitleUsers}>
					Все
				</Typography>
				<div className={styles.contentUsers} >
					{users.map(user => (
						<div className={styles.userMin} >
						<UserAvatar user={ user } styles={ styles }  />
							<p> {user.fullname} </p>
						</div>
					))}
				</div>

			</div>
		</div>
	)
}



//нарисовать UI и вывести пользователей. сделать их кликабельными и при нажатии на пользователя, открывается профиль с его настрройками 