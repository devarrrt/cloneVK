import { makeStyles } from '@material-ui/styles'


export const LoginStyle = makeStyles({
	wrapper: {
		height: '100vh',
		overflow: 'hidden',
	},
	container: {
		margin: ' 0 auto',
	},
	header: {
		padding: '7px 30px',
		display: 'flex',
		height: '50px',
		alignItems: 'center',
		borderBottom: '1px solid #ccc'
	},
	headerLogo: {
		display: 'flex',
		alignItems: 'center',
		marginRight: '35px',

	},
	headerSearch: {
		padding: 0,
		backgroundColor: '#EDEEF0',
	},
	'& .MuiOutlinedInput-input': {
		padding: '4px',
	},


	login: {
		width: '1000px',
		margin: '30px auto',

	},
	loginModal: {
		textAlign: 'center',
		padding: '30px',
	},
	buttonBlock: {
		marginTop: '30px',
	},
	TextField: {
	margin: '10px 0'
	}


})
