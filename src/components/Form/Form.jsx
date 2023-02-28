import React, {useState, useEffect} from 'react';
import style from './Form.module.css';
import validate from './validation.js'

//Crear funcion logout en App.js. 

export default function Form ({ login }) {
	
	const [userData, setUserData] = useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		username: '',
		password: '',
	});

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value
		})
		setErrors(validate({
			...userData,
			[event.target.name]: event.target.value	
		}))
	};

	const handleSubmit = (event) => {
		event.preventDefault()
		login(userData);
	};

	return(
		<div className={style.container} >
			<form className={style.loginForm} onSubmit={handleSubmit} >
				<div className={style.divLaErr} >
					<label className={style.FormLabel} >Username </label>
					{errors.username && <p className={style.errorP} >{errors.username}</p>}
				</div>
				
				<input  
					className={style.FormInput} 
					type='text' 
					onChange={handleChange} 
					value={userData.username} 
					name='username' 
					placeholder='Correo electronico' 
				/>
				
				<div className={style.divLaErr} >
					<label className={style.FormLabel} >Contraseña </label>
					{errors.password && <p className={style.errorP} >{errors.password}</p>}
				</div>
				
				<input  
					className={style.FormInput} 
					type='password' 
					onChange={handleChange} 
					value={userData.password} 
					name="password" 
					placeholder='Contraseña' 
				/>
				
				<button className={style.subButton} type='submit' >Login</button>
			</form>
		</div>
	)
}