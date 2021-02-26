import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';


interface Props {}




export const BackButton = (props: Props) => {
const history = useHistory()

const clickBack = ( )=> {
	history.goBack()
}

	return (
	<IconButton onClick={ clickBack } style={{ marginRight: 12 }} color="primary" >
		<ArrowBackIcon/>
	</IconButton>
	)
}
