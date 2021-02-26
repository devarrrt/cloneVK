import React from 'react'
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'
import { ModalBlock } from '../components/ModalBlock'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom'
import * as yup from 'yup';

import { LoginStyle } from '../pages/LoginPage/style'
 


interface ILoginModal {
	open: boolean,
	onClose: () => void
}

interface IForm {
	email: string,
	password: string
}


const LoginSchema = yup.object().shape({
	email: yup.string().email('Введите корректную почту').required('Введите почту'),
	password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
})


export const LoginModal: React.FC<ILoginModal> = ({ open, onClose }) => {
const styles = LoginStyle()
const history = useHistory()

	const onSubmit = (data: IForm) => {
		console.log(data)
		history.push('/home')
	}

	const { control, handleSubmit, errors } = useForm<IForm>({
		resolver: yupResolver(LoginSchema)
	})


	return (
		<ModalBlock
			title="Войти в аккаунт"
			visible={open}
			onClose={onClose}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl component="fieldset" fullWidth >
					<FormGroup aria-label="position" row>

						<Controller
							as={TextField}
							name="email"
							label="E-mail"
							variant="filled"
							id="email"
							autoFocus
							defaultValue=""
							fullWidth
							control={control}
							error={!!errors.email}
							helperText={errors?.email?.message}
							InputLabelProps={{
								shrink: true,
							}}
							className={ styles.TextField }
						/>

						<Controller
							as={TextField}
							name="password"
							label="Пароль"
							variant="filled"
							id="password"
							autoFocus
							defaultValue=""
							fullWidth
							control={control}
							error={!!errors.password}
							helperText={errors?.password?.message}
							InputLabelProps={{
								shrink: true,
							}}
							className={ styles.TextField }
						/>

						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth>
							Войти
                </Button>
					</FormGroup>
				</FormControl>
			</form>
		</ModalBlock>
	)
}



//добавить модалку для регистрации и сделать переход на главную страницу (профиль)