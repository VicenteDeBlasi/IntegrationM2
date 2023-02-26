
// const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const regexPassword = /^.*(?=.{6,11})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?./-_@$* "]).*$/i;

const validate = (userData) => {
	let errors = {};
	var regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	var regexPassword = /^.*(?=.{7,12})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?./-_@$* "]).*$/i;

	if (!userData.username) {
		errors.username = 'Este campo no puede estar vacio';
	}
	if (!regexEmail.test(userData.username)) {
		errors.username = 'Usuario invalido';
	}
	if (userData.username.length > 35) {
		errors.username = 'Correo electronico demasiado largo';
	}
	if (!userData.password) {
		errors.password = 'Este campo no puede estar vacio';	
	}
	if (!regexPassword.test(userData.password)) {
		errors.password = 'Contraseña invalida';
	}
	return errors;
};

export default validate;