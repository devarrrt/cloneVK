import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'

interface IModalBlock {
	visible: boolean,
	onClose: () => void,
	title?: string,
	children: React.ReactNode
}



export const ModalBlock: React.FC<IModalBlock> = ({ visible, onClose, title, children }) => {
	return (
		<Dialog
			open={visible}
			onClose={onClose}
			aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">
				{title}
			</DialogTitle>
			<DialogContent>
				{children}
			</DialogContent>
		</Dialog>
	)
}
