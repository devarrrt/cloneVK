import React from 'react'
import { ModalBlock } from './ModalBlock'
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { LoginStyle } from '../pages/LoginPage/style'



interface IRegisterModal {
open: boolean,
onClose: ()=>void
}

interface IForm {
	fullname: string,
	email: string,
	username: string,
	password: string,
	password2: string,
}

const RegisterSchema  = yup.object().shape({
	fullname: yup.string().required('Введите имя'),
	email: yup.string().email('Неверная почта').required('Введите почту'),
	username: yup.string().required('Введите логин'),
	password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
	password2: yup.string().oneOf([yup.ref('password')], 'Пароли не соответствуют'),
})



export const RegisterModal: React.FC<IRegisterModal> = ({ open, onClose }) => {

	const styles = LoginStyle()
const { control, handleSubmit, errors } = useForm<IForm>({
	resolver: yupResolver( RegisterSchema )
})

const onSubmit = ( data: any ) => {
	console.log( data )
}


	return (
	<ModalBlock
	visible={ open }
	onClose={ onClose }
	title="Регистрация"
	>
	<form onSubmit={ handleSubmit( onSubmit ) }> 
		<FormControl component="fieldset" fullWidth>
		<FormGroup aria-label="position" row >
	
		<Controller //email
                            as={TextField}
                            control={control}
                            name="email"
                            id="email"
                            label="E-Mail"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            defaultValue=""
                            helperText={errors.email?.message}
                            error={!!errors.email}
                            fullWidth
														autoFocus
														className={ styles.TextField }
                        />

                        <Controller   //Логин
                            as={TextField}
                            control={control}
                            name="username"
                            id="username"
                            label="Логин"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="text"
                            defaultValue=""
                            helperText={errors.username?.message}
                            error={!!errors.username}
														fullWidth
														className={ styles.TextField }
                        />

                        <Controller //имя
                            as={TextField}
                            control={control}
                            name="fullname"
                            id="fullname"
                            label="Ваше имя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="text"
                            defaultValue=""
                            helperText={errors.fullname?.message}
                            error={!!errors.fullname}
														fullWidth
														className={ styles.TextField }
                        />

                        <Controller //Пароль
                            as={TextField}
                            control={control}
                            name="password"
                            id="password"
                            label="Пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            defaultValue=""
                            helperText={errors.password?.message}
                            error={!!errors.password}
														fullWidth
														className={ styles.TextField }
                        />

                        <Controller //пароль
                            as={TextField}
                            control={control}
                            name="password2"
                            id="password2"
                            label="Повторите пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            defaultValue=""
                            helperText={errors.password2?.message}
                            error={!!errors.password2}
														fullWidth
														className={ styles.TextField }
                        />

													<Button
													type="submit"
													variant="contained"
													color="primary"
													fullWidth
													>
														Регистрация
														</Button>


		</FormGroup>
		</FormControl>
	</form>
	</ModalBlock>
	)
}
