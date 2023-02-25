import React, {useState, useEffect} from 'react';
import style from './Form.module.css';
import validate from './validation.js'

export default function Form () {
	
	const [userData, setuserData] = useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		username: '',
		password: '',
	});

	useEffect(() => {
		setErrors(validate(userData));
	}, [userData]);

	const handleChange = (event) => {
		setuserData({
			...userData,
			[event.target.name]: event.target.value
		})
	};

	const handleSubmit = (event) => {
		event.preventDefault()
		const errorsArray = Object.values(errors);
		const errorsLength = errorsArray.length;

		if (errorsLength === 0) {
			window.alert('Datos completos');
			setuserData({
				username: '',
				password: '',
			});
			setErrors({
				username: '',
				password: '',
			})
		}else{
			window.alert('Revisa de nuevo');
		}
	}

	return(
		<div className={style.container} >
			<form onSubmit={handleSubmit} >
				<label className={style.FormLabel} >Username: </label>
				<input  className={style.FormInput} type='text' onChange={handleChange} value={userData.username} name='username' placeholder='Correo electronico' />

				<label className={style.FormLabel} >Contraseña: </label>
				<input  className={style.FormInput} type='password' onChange={handleChange} value={userData.password} name="password" placeholder='Contraseña' />

				<button className={style.subButton} type='submit' >Login</button>
			</form>
		</div>
	)
}