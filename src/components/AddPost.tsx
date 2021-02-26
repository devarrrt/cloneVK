import React, { useState } from 'react'
import { Avatar, TextareaAutosize, IconButton, Button, CircularProgress } from '@material-ui/core'
import { stylesHome } from './../pages/HomePage/style';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import avatarImg from '../assets/img/avatar.jpg'
import { useDispatch } from 'react-redux'
import { fetchAddPosts } from '../redux/ducks/posts/actionsPosts'


interface IAddPost {
	styles: ReturnType<typeof stylesHome>
}




export const AddPost: React.FC<IAddPost> = ({ styles }) => {
	const [textPost, setTextPost] = useState<string>("")
	const dispatch = useDispatch()
	const MAX_LENGTH = 200
	const textLimit = Math.round(( textPost.length / MAX_LENGTH  ) * 100 )
	const textCount = MAX_LENGTH - textPost.length

	const handleChangePost = (e: React.FormEvent<HTMLTextAreaElement>) => {
		if (e.currentTarget) {
			setTextPost(e.currentTarget.value)
		}
	}


	//@ts-ignore
	const handleClickAddPost = async (e) => {
		if (textPost) {
			dispatch(fetchAddPosts({ textPost }))
			setTextPost('')
		}
	}


	return (
		<div className={styles.addPost}>
			<div className={styles.addPostHeader}>
				<Avatar
					src={avatarImg}
					className={styles.postAvatar}
					alt={`Аватарка пользователя`}
				/>
				<TextareaAutosize
					value={textPost}
					onChange={handleChangePost}
					placeholder="Что нового?"
					className={styles.postTextarea}
				/>
			</div>

			<div className={styles.addPostBottom}>
				<div>
					<IconButton>
						<SentimentVerySatisfiedIcon style={{ fontSize: 24 }} />
					</IconButton>
					<IconButton>
						<FileCopyIcon style={{ fontSize: 24 }} />
					</IconButton>
					<IconButton>
						<AudiotrackIcon style={{ fontSize: 24 }} />
					</IconButton>
				</div>



				<div className="addPostRight">

					{textPost &&
					<>
					<span> { textCount } </span>
						<CircularProgress
							className={styles.addPostProgress}
							variant="static"
							size={20}
							thickness={3.5}
							value={ textPost.length >= MAX_LENGTH ? 100 : textLimit }
							style={ textPost.length >= MAX_LENGTH ? { color: 'red' } : undefined  }
						/>
						</>
					}

					<Button
					disabled={ !textPost || textPost.length >= MAX_LENGTH }
						onClick={handleClickAddPost}
						color="primary"
						className={styles.addPostButton}
						variant="contained">
						Добавить новость
					</Button>

				</div>
			</div>
		</div>
	)
}
