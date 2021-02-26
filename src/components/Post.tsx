import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Typography, Menu, MenuItem, Button } from '@material-ui/core'
import { stylesHome } from '../pages/HomePage/style'
import { useDispatch } from 'react-redux'
import { removePost } from '../redux/ducks/posts/actionsPosts'


interface IPost {
	styles: ReturnType<typeof stylesHome>
	id: string
	text: string
	user: {
		fullname: string
		avatarUrl: string
	}
}


export const Post: React.FC<IPost> = ({ styles, id, text, user }) => {

	const dispatch = useDispatch()
	


	const handleRemove = ()=> { 
		dispatch( removePost(id))
	}
 

	return (
		<div className={styles.post}>
			<div className={styles.postHeader}>
				<Avatar
					src={ user.avatarUrl }
					className={styles.postAvatar}
					alt={`Аватарка пользователя`}
				/>
				<Typography variant="h6" component="h6"> { user.fullname }  </Typography>
			</div>
			<div className={styles.postContent}>
				<div className={styles.postContentHeader} >

					<Typography variant="body1" gutterBottom>
								{text}
					</Typography>

				</div>
				<div className={styles.postFooter}>
					<Button color="primary" > Нравится </Button>
					<Button> Поделиться </Button>
					<Button onClick={ handleRemove } > Удалить </Button>
				</div>
			</div>
		</div>
		)
}


