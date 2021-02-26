import React, { useState, useEffect } from 'react'
import { messagesStyle } from './MesagesStyle'
import { Typography, Button, TextareaAutosize } from '@material-ui/core'
import { BackButton } from './../../components/BackButton';
import { MessagesItem } from './MessagesItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../redux/ducks/messages/selectors'
import { fetchMessagesAction, fetchAddMessageAction } from '../../redux/ducks/messages/actionsMessages'


interface Props {}



export const Messages = (props: Props) => {
const [text, setText] = useState("")
const styles = messagesStyle()
const dispatch = useDispatch()
const messages = useSelector(selectMessages)


const addMessage = ( ) => {
dispatch( fetchAddMessageAction({ text }))
}

const handleChangeText = ( e: React.FormEvent<HTMLTextAreaElement> ) => {
	if ( e.currentTarget ) {
		setText( e.currentTarget.value )
	}
}

useEffect(() => {
	dispatch( fetchMessagesAction() )
}, [dispatch])


	return (
		<div className={ styles.wrapperMessages }>
			<div className={ styles.headerMessages }>
			<BackButton/>
			<Typography variant="h5" className={ styles.titleMessages }>
						Сообщения
				</Typography>
			</div>

			<div>
				{ messages.map( (message) => (
					<MessagesItem key={ message.id } { ...message } styles={ styles }  />
				)) }
			</div>

			<div className={ styles.bottomMessages } > 
				<TextareaAutosize  
				className={ styles.textareaMessages }
				value={ text }
				onChange={ handleChangeText }
				placeholder="Введите сообщение"
				/>
				<Button onClick={ addMessage } > Отправить </Button> 
			</div>


		</div>
	)
}
