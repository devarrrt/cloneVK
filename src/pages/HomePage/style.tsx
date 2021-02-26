import { makeStyles } from '@material-ui/styles';


export const stylesHome = makeStyles({
	wrapperHome: {
		height: '100vh',
		display: 'flex',
		overflow: 'auto',
		margin: '0 auto'
	},
	sidebar: {
		maxWidth: 230,
		backgroundColor: '#394356',
		borderRadius: 0,
		height: '100vh',
	},

	main: {
		width: '900px'
	},


	sidebarList: {
		position: 'sticky',
		top: 0,
		listStyle: 'none',
		padding: 0,
		margin: 0,
	},
	
	headerLink: {
		padding: '15px',
	},
	sidebarListItem: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',


		'& div': {
				display: 'inline-flex',
				alignItems: 'center',
				position: 'relative',
				padding: '0 25px 0 25px',
				borderRadius: 30,
				height: 50,
				marginBottom: 15,
		},
		'& a': {
      color: 'inherit',
      textDecoration: 'none',
		},
		'&:hover': {
				opacity: 0.7
		}
	},
	content: {
		padding: "20px"
	},

	
	sidebarListName: {
		fontWeight: 300,
		fontSize: 18,
		marginLeft: 15,
		color: '#fff'
	},	
	sidebarListIcon: {
		color: '#fff'
	},
	addPost: {
		padding: 20,
		display: 'flex',
		flexDirection: 'column',
		marginTop: '40px',
		border: '1px solid #eaeaea',
		borderRadius: '10px',
		boxShadow: '2px 11px 35px -2px rgba(0,0,0,0.20)',
	},
	addPostHeader: {
    display: 'flex',
	},
	postAvatar: {
		width: '50px',
		height: '50px',
		marginRight: '20px'
	},
	postTextarea: {
    width: '500px',
    border: 0,
    fontSize: 15,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
	},
	addPostBottom: {
		display: 'flex',
    justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '10px'
	},
	addPostButton: {
		fontSize: '12px'
	},
	addFormBottomLine:{
	margin: '30px 0 10px 0 ',
	height: 1,
	backgroundColor: '#eaeaea',
	},

	
	post: {
		display: 'flex',
		flexDirection: 'column',
    flex: 1,
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderRadius: 0,
		padding: '10px 15px',
		color: 'inherit',
    textDecoration: 'none',
	},
	postHeader: {
		display: 'flex',
		margin: '20px 0px',
	},
	postContent: {

	},
	postContentHeader: {

	},
	postFooter: {

	},
	addPostRight: {
		display: 'flex',
    alignItems: 'center',
	},

	addPostProgress: {
		margin: '10px 10px 0px 0px'
	}



})