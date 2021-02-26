import React, { useEffect } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { stylesHome } from './style'
import { AddPost } from '../../components/AddPost'
import { Post } from '../../components/Post'
import { selectLoadingState, selectTweetsItems } from '../../redux/ducks/posts/selectors'
import { fetchPosts } from '../../redux/ducks/posts/actionsPosts'
import { useSelector, useDispatch } from 'react-redux'




interface Props { }


export const Home = (props: Props) => {
	const styles = stylesHome()

	const dispatch = useDispatch()
	const loading = useSelector(selectLoadingState)
	const posts = useSelector(selectTweetsItems)


	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])


	return (
		<Paper className={styles.wrapperHome}>
			<div className={styles.content}>
				<Typography variant="h6"> Новости </Typography>
				{/* форма добавления новости */}
				<AddPost styles={styles} />
				<div className={styles.addFormBottomLine} />
				{/* все новости и посты */}
					{ posts.map( (post, index)  => (
				<Post styles={styles} key={ index }  { ...post } />
					))}
			</div>
			{/* возможность переключаться между новостями и постами моими */}
		</Paper>
	)
}
