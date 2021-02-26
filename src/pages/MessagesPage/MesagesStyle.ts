import { makeStyles } from '@material-ui/styles';


export const messagesStyle = makeStyles({
	wrapperMessages: {
		padding: '20px',
	},
	titleMessages: {
		fontSize: '24px',
	},
	headerMessages: {
		display: 'flex',
		alignItems: 'center',
		borderBottom: '1px solid #f2f2f2',
		marginBottom: '40px'
	},
messagesItem: {
	display: 'flex',
	alignItems: 'center',
	marginBottom: '20px'
},
messagesAuthor: {
fontSize: '18px',
fontWeight: 500,
marginBottom: '7px'
},
bottomMessages: {
display: 'flex',
alignItems: 'center',
marginTop: '40px',
},
messagesBody: {
	display: 'flex',
	flexDirection: 'column'
},
textareaMessages: {
	margin: "0, 30px 0 0",
	height: '80px',
	padding: '5px 10px',
	resize: 'none',
	border: '1px solid #f2f2f2',
	borderRadius: '20px',
	outline: 'none',
	fontSize: '16px'
},
textMessages: {
	backgroundColor: '#f2f2f2',
	width: '200px',
	height: '40px',
	padding: '5px 10px',
	borderRadius: '6px',
}

})