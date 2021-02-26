import { makeStyles } from '@material-ui/styles';




export const usersStyle = makeStyles({

	wrapperUsers: {
		padding: '20px',
	},
	titleUsers: {
		fontSize: '24px',
		fontWeight: 600
	},
	headerUsers: {
		display: 'flex',
		alignItems: 'center',
		borderBottom: '1px solid #f2f2f2',
		marginBottom: '40px'
	},
	contentHeaderUsers: {
		display: 'flex',
		flexDirection: 'column',
		padding: '18px 0'
	},
	subtitleUsers: {
		fontSize: '20px',
		fontWeight: 400
	},
	contentUsers: {
		display: 'flex',
		maxWidth: 800,
		border: '1px solid #ccc',
		margin: '20px 0 60px 0'
	},
	userMin: {
		display: 'flex',
		flexDirection: 'column',
		width: 80,
		justifyContent: 'center',
		textAlign: 'center',
		border: '1px solid #f2f2f2',
		cursor: 'pointer',
	},
	userAvatar: {
		height: '60px',
		width: '60px',
		marginLeft: '20px'
	},

	userWrapper: {
		display: 'flex',
		flexDirection: 'column',
		padding: '20px'
	},

	userHeader: {
		marginTop: '20px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	userInfo: {
		display: 'flex',
		flexDirection: 'column'
	},
	userStatus: {

	},
	userContent: {
		margin: "30px 0"
	},
	userBottom: {

	}


})