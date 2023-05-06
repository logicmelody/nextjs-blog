import LoginTitle from '../../page-components/login/login-title';

import styles from './login.module.css';

function LoginPage() {
	return (
		<div className={styles.container}>
			<LoginTitle />
		</div>
	);
}

LoginPage.getLayout = function getLayout(page) {
	return page;
}

export default LoginPage;
