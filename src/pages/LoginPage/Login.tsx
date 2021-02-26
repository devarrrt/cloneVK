import React, {useState} from 'react'
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import { LoginModal } from '../../components/LoginModal'
import { RegisterModal } from '../../components/RegisterModal'
import { LoginStyle } from './style'

import vkIcon from '../../assets/img/vk.svg'



interface Props { }




export const Login = (props: Props) => {
	const styles = LoginStyle()
	const [ visibleModal, setVisibleModal ] = useState<'login' | 'register'>( )

	const openModalLogin = ( ): void => {
		setVisibleModal('login' )
	}
	const openModalRegister = ( ): void => {
		setVisibleModal('register' )
	}
	const handleCloseModal = ( ): void => {
		setVisibleModal( undefined )
	}



	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>

				<div className={styles.header} >
					<div className={styles.headerLogo}>
						<img src={vkIcon} alt="vk-icon" />
						<Typography variant="h6" > ВКОНТАКТЕ  </Typography>
					</div>
					<TextField
						name="search"
						label="Поиск"
						variant="outlined"
						className={styles.headerSearch}
					/>
				</div>  
				{/* header */}

				<section className={ styles.login }> 
					 <Paper className={ styles.loginModal }>  
					 <Typography variant="h5" > Добро пожаловать!  </Typography>
					 	<div className={ styles.buttonBlock  }>
						 <Button color="primary"
						onClick={ openModalLogin }
						 > Войти </Button>
					 	<Button 
						 onClick={ openModalRegister }
						 > Зарегистрироваться </Button>
						</div> 

						<LoginModal open={ visibleModal === 'login' } onClose={ handleCloseModal }  />
						<RegisterModal open={ visibleModal === 'register' } onClose={ handleCloseModal }  />

					 </Paper>
				</section>



			</div>
		</div>
	)
}
