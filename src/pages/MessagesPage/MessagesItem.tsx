import React from 'react'
import { messagesStyle } from './MesagesStyle'
import { Avatar, ListItemAvatar } from '@material-ui/core';


interface IMessagesItem {
	styles: ReturnType<typeof messagesStyle>,
	id: string,
	text: string,
	user: {
		fullname: string,
		avatarUrl: string
	}
}


export const MessagesItem: React.FC<IMessagesItem> = ({ id, text, user, styles }) => {

	return (
		<div className={styles.messagesItem}>

			<ListItemAvatar>
				<Avatar src={ user.avatarUrl } alt="avatar" />
			</ListItemAvatar>

			<div className={ styles.messagesBody }>
				<div className={ styles.messagesAuthor }>
					{ user.fullname }
				</div>
				<div className={styles.textMessages}>
					{ text }
			</div>
			</div>


		</div>
	)
}
