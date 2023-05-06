import styles from './login.module.css';

function Login() {
	return (
		<div className={styles.container}>
			Login Page
		</div>
	);
}

Login.getLayout = function getLayout(page) {
	return page;
}

export default Login;
