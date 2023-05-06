import styles from './login.module.css';

function LoginPage() {
	return (
		<div className={styles.container}>
			Login Page
		</div>
	);
}

LoginPage.getLayout = function getLayout(page) {
	return page;
}

export default LoginPage;
